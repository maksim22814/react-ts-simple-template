// src/pages/cities/AddCityPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCities } from "../../contexts/CityContext";
import { ICity } from "../../entities/City/model";
import Button from "../../shared/ui/Button";
import FlexContainer from "../../shared/ui/FlexContainer";
import Input from "../../shared/ui/Input";
import Text from "../../shared/ui/Text";

export function AddCityPage() {
    const { addCity } = useCities(); 
    const navigate = useNavigate();

    const [newCity, setNewCity] = useState<Omit<ICity, "id">>({
        name: "",
        country: "",
        population: 0,
    });

    const handlePopulationChange = (value: string) => {
        const population = parseInt(value) || 0;
        setNewCity({ ...newCity, population });
    };

    const handleSubmit = () => {
        const city: ICity = {
            id: Date.now(),
            name: newCity.name || "Без названия",
            country: newCity.country || "Неизвестна",
            population: newCity.population || 0,
        };
        addCity(city);
        navigate("/");
    };

    return (
        <FlexContainer gap={20}>
            <Text size={24}>Добавление города</Text>
            <FlexContainer alignItems="stretch">
                <FlexContainer direction="row">
                    <Text>Название: </Text>
                    <Input
                        placeholder="Введите название города"
                        changeAction={(value) => setNewCity({ ...newCity, name: value })}
                    />
                </FlexContainer>
                <FlexContainer direction="row">
                    <Text>Страна: </Text>
                    <Input
                        placeholder="Введите страну"
                        changeAction={(value) => setNewCity({ ...newCity, country: value })}
                    />
                </FlexContainer>
                <FlexContainer direction="row">
                    <Text>Население: </Text>
                    <Input
                        placeholder="Введите количество жителей"
                        changeAction={handlePopulationChange}
                    />
                </FlexContainer>
                <FlexContainer direction="row" gap={12}>
                    <Button clickAction={handleSubmit}>Сохранить</Button>
                    <Button clickAction={() => navigate("/")}>Отмена</Button>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    );
}