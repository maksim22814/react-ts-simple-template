// src/features/CityList/CityList.tsx
import { useCities } from "../../contexts/CityContext";
import { useNavigation } from "../../contexts/NavigationContext";
import { CityCardView } from "../CityCardView/CityCardView"; // Используем именованный импорт
import Button from "../../shared/ui/Button";
import FlexContainer from "../../shared/ui/FlexContainer";
import Text from "../../shared/ui/Text";
import styles from "./CityList.module.css"

function CityList() {
    const { cities } = useCities();
    const { goToAdd } = useNavigation();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Список городов</h2>
                <Button clickAction={goToAdd}>
                    Добавить город
                </Button>
            </div>
            <div className={styles.list}>
                {cities.length === 0 ? (
                    <p>Нет городов</p>
                ) : (
                    cities.map(city => (
                        <CityCardView key={city.id} city={city} />
                    ))
                )}
            </div>
        </div>
    );
}

export default CityList;