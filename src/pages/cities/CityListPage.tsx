// src/pages/cities/CityListPage.tsx
import { Link } from "react-router-dom";
import { useCities } from "../../contexts/CityContext";
import FlexContainer from "../../shared/ui/FlexContainer";
import Text from "../../shared/ui/Text";
import Button from "../../shared/ui/Button";
import { CityCardView } from "../../features/CityCardView/CityCardView";

export function CityListPage() {
    const { cities } = useCities();

    return (
        <FlexContainer gap={20}>
            <FlexContainer direction="row" justifyContent="space-between" alignItems="center">
                <Text size={24}>Список городов</Text>
                <Link to="/add">
                    <Button>Добавить город</Button>
                </Link>
            </FlexContainer>
            <FlexContainer>
                {cities.length <= 0 ? (
                    <Text>Городов нет :</Text>
                ) : (
                    cities.map((city) => <CityCardView key={city.id} city={city} />)
                )}
            </FlexContainer>
        </FlexContainer>
    );
}