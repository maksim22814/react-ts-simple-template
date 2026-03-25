// widgets/CityCardView/CityCardView.tsx
import { ICity } from "../../entities/City/model";
import CityCard from "../../entities/City/CityCard";
import { useCities } from "../../contexts/CityContext";
import { useNavigation } from "../../contexts/NavigationContext";
import Button from "../../shared/ui/Button";

interface ICityCardViewProps {
    city: ICity;
}

function CityCardView({ city }: ICityCardViewProps) {
    const { deleteCity } = useCities();
    const { goToEdit } = useNavigation();

    const handleDelete = () => {
        deleteCity(city.id);
    };

    const handleEdit = () => {
        goToEdit(city.id);
    };

    return (
        <CityCard city={city}>
            <Button clickAction={handleEdit}>
                Изменить
            </Button>
            <Button clickAction={handleDelete}>
                Удалить
            </Button>
        </CityCard>
    );
}

export default CityCardView;