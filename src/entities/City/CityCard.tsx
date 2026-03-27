// src/entities/City/CityCard.tsx
import { ICity } from "./model";
import { getCityTypeByPopulation } from "./types";
import Panel from "../../shared/ui/Panel";
import FlexContainer from "../../shared/ui/FlexContainer";
import Text from "../../shared/ui/Text";

interface ICityCardProps {
    city: ICity;
}

export function CityCard({ city }: ICityCardProps) {
    const { id, name, country, population } = city;
    const cityType = getCityTypeByPopulation(population);
    const formattedPopulation = population.toLocaleString('ru-RU');

    return (
        <Panel padding={5}>
            <FlexContainer direction="column">
                <Text>#{id}: {name}</Text>
                <Text>Страна: {country}</Text>
                <Text>Население: {formattedPopulation} чел.</Text>
                <Text>Тип: {cityType}</Text>
            </FlexContainer>
        </Panel>
    );
}