// src/features/CityCardView/CityCardView.tsx
import { useCities } from "../../contexts/CityContext";
import { useNavigation } from "../../contexts/NavigationContext";
import { ICity } from "../../entities/City/model";
import  CityCard  from "../../entities/City/CityCard";
import Button from "../../shared/ui/Button";
import FlexContainer from "../../shared/ui/FlexContainer";
import Panel from "../../shared/ui/Panel";

interface ICityCardViewProps {
    city: ICity;
}

export function CityCardView({ city }: ICityCardViewProps) {
    const { deleteCity } = useCities();
    const { goToEdit, goToDetails } = useNavigation();

    const handleDelete = () => {
        deleteCity(city.id);
    };

    return (
        <Panel padding={5}>
            <FlexContainer>
                <div onClick={() => goToDetails(city.id)} style={{ cursor: "pointer", flex: 1 }}>
                    <CityCard city={city} />
                </div>
                <FlexContainer direction="row">
                    <Button clickAction={handleDelete}>Удалить</Button>
                    <Button clickAction={() => goToEdit(city.id)}>Изменить</Button>
                </FlexContainer>
            </FlexContainer>
        </Panel>
    );
}