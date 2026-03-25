// src/entities/City/CityCard.tsx
import { ReactNode } from "react";
import { ICity } from "./model";
import { getCityTypeByPopulation } from "./types";
import styles from "./CityCard.module.css"

interface ICityCardProps {
    city: ICity;
    children?: ReactNode;
}

function CityCard({ city, children }: ICityCardProps) {
    const cityType = getCityTypeByPopulation(city.population);
    
    const getTypeColor = (type: string) => {
        const colors: Record<string, string> = {
            "мегаполис": "#9c27b0",
            "крупный": "#2196f3",
            "средний": "#4caf50",
            "малый": "#ff9800"
        };
        return colors[type] || "#666";
    };

    const formattedPopulation = city.population.toLocaleString('ru-RU');

    return (
        <div className={styles.card}>
            <h3 className={styles.title} style={{ color: getTypeColor(cityType) }}>
                {city.name}
            </h3>
            <p className={styles.text}>
                <strong>Страна:</strong> {city.country}
            </p>
            <p className={styles.text}>
                <strong>Население:</strong> {formattedPopulation} чел.
            </p>
            <p className={styles.text}>
                <strong>Тип:</strong> {cityType}
            </p>
            {children && <div className={styles.actions}>{children}</div>}
        </div>
    );
}

export default CityCard;