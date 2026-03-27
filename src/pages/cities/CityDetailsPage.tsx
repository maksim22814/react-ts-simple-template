// src/pages/cities/CityDetailsPage.tsx
import { useParams, Link } from "react-router-dom";
import { useCities } from "../../contexts/CityContext";
import FlexContainer from "../../shared/ui/FlexContainer";
import Text from "../../shared/ui/Text";
import Button from "../../shared/ui/Button";
import Panel from "../../shared/ui/Panel";
import { getCityTypeByPopulation } from "../../entities/City/types";

export function CityDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const { cities } = useCities();
    
    const city = cities.find(c => c.id === Number(id));
    const formattedPopulation = city?.population.toLocaleString('ru-RU');
    const cityType = city ? getCityTypeByPopulation(city.population) : null;

    if (!city) {
        return (
            <FlexContainer gap={20}>
                <Text size={24}>Город не найден!</Text>
                <Link to="/">
                    <Button>Вернуться к списку</Button>
                </Link>
            </FlexContainer>
        );
    }

    return (
        <FlexContainer gap={20}>
            <Text size={24}>Подробная информация</Text>
            <Panel padding={20}>
                <FlexContainer direction="column" gap={16}>
                    <Text size={20}>#{city.id}: {city.name}</Text>
                    <Text>Страна: {city.country}</Text>
                    <Text>Население: {formattedPopulation} человек</Text>
                    <Text>Тип: {cityType}</Text>
                    <FlexContainer direction="row" gap={12}>
                        <Link to={`/edit/${city.id}`}>
                            <Button>Редактировать</Button>
                        </Link>
                        <Link to="/">
                            <Button>Назад к списку</Button>
                        </Link>
                    </FlexContainer>
                </FlexContainer>
            </Panel>
        </FlexContainer>
    );
}