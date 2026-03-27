// src/features/CityCardView/CityCardView.tsx
import { Link } from "react-router-dom";
import { useCities } from "../../contexts/CityContext";
import { ICity } from "../../entities/City/model";
import { CityCard } from "../../entities/City/CityCard";
import Button from "../../shared/ui/Button";
import FlexContainer from "../../shared/ui/FlexContainer";
import Panel from "../../shared/ui/Panel";

interface ICityCardViewProps {
    city: ICity;
}

export function CityCardView({ city }: ICityCardViewProps) {
    const { deleteCity } = useCities(); // Используем хук useCities

    const handleDelete = () => {
        if (window.confirm(`Вы уверены, что хотите удалить город ${city.name}?`)) {
            deleteCity(city.id);
        }
    };

    return (
        <Panel padding={5}>
            <FlexContainer>
                <Link to={`/city/${city.id}`} style={{ textDecoration: "none", flex: 1 }}>
                    <CityCard city={city} />
                </Link>
                <FlexContainer direction="row">
                    <Button clickAction={handleDelete}>Удалить</Button>
                    <Link to={`/edit/${city.id}`}>
                        <Button>Изменить</Button>
                    </Link>
                </FlexContainer>
            </FlexContainer>
        </Panel>
    );
}