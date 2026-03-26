// src/features/CityDetails/CityDetails.tsx
import { useCities } from "../../contexts/CityContext";
import { useNavigation } from "../../contexts/NavigationContext";
import { getCityTypeByPopulation } from "../../entities/City/types";
import Button from "../../shared/ui/Button";
import FlexContainer from "../../shared/ui/FlexContainer";
import Panel from "../../shared/ui/Panel";
import Text from "../../shared/ui/Text";

export function CityDetails() {
    const { cities } = useCities();
    const { selectedCityId, goToList, goToEdit } = useNavigation();
    
    const city = cities.find(c => c.id === selectedCityId);
    const formattedPopulation = city?.population.toLocaleString('ru-RU');
    const cityType = city ? getCityTypeByPopulation(city.population) : null;

    if (!city) {
        return (
            <FlexContainer gap={20}>
                <Text size={24}>Город не найден!</Text>
                <Button clickAction={goToList}>Вернуться к списку</Button>
            </FlexContainer>
        );
    }

    return (
        <FlexContainer gap={20}>
            <Text size={24}>Подробная информация</Text>
            <Panel padding={20}>
                <FlexContainer direction="column" gap={16}>
                    <Text size={20}>#{city.id}: {city.name}</Text>
                    <Text>📍 Страна: {city.country}</Text>
                    <Text>👥 Население: {formattedPopulation} человек</Text>
                    <Text>🏷️ Тип: {cityType}</Text>
                    <FlexContainer direction="row" gap={12}>
                        <Button clickAction={() => goToEdit(city.id)}>
                            Редактировать
                        </Button>
                        <Button clickAction={goToList}>
                            Назад к списку
                        </Button>
                    </FlexContainer>
                </FlexContainer>
            </Panel>
        </FlexContainer>
    );
}

export default CityDetails;