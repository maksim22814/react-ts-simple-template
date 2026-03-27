// src/pages/cities/EditCityPage.tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCities } from "../../contexts/CityContext";
import { ICity } from "../../entities/City/model";
import Button from "../../shared/ui/Button";
import FlexContainer from "../../shared/ui/FlexContainer";
import Input from "../../shared/ui/Input";
import Text from "../../shared/ui/Text";

export function EditCityPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { cities, updateCity } = useCities();
    
    const city = cities.find(c => c.id === Number(id));
    const [formData, setFormData] = useState<Omit<ICity, "id">>({
        name: "",
        country: "",
        population: 0,
    });

    useEffect(() => {
        if (city) {
            setFormData({
                name: city.name,
                country: city.country,
                population: city.population,
            });
        }
    }, [city]);

    if (!city) {
        return (
            <FlexContainer gap={20}>
                <Text size={24}>Город не найден!</Text>
                <Button clickAction={() => navigate("/")}>Вернуться к списку</Button>
            </FlexContainer>
        );
    }

    const handlePopulationChange = (value: string) => {
        const population = parseInt(value) || 0;
        setFormData({ ...formData, population });
    };

    const handleSubmit = () => {
        const updatedCity: ICity = {
            id: Number(id),
            name: formData.name || "Без названия",
            country: formData.country || "Неизвестна",
            population: formData.population || 0,
        };
        updateCity(Number(id), updatedCity);
        navigate("/");
    };

    return (
        <FlexContainer gap={20}>
            <Text size={24}>Редактирование города</Text>
            <FlexContainer alignItems="stretch">
                <FlexContainer direction="row">
                    <Text>Название: </Text>
                    <Input
                        placeholder="Введите название города"
                        changeAction={(value) => setFormData({ ...formData, name: value })}
                        defaultValue={formData.name}
                    />
                </FlexContainer>
                <FlexContainer direction="row">
                    <Text>Страна: </Text>
                    <Input
                        placeholder="Введите страну"
                        changeAction={(value) => setFormData({ ...formData, country: value })}
                        defaultValue={formData.country}
                    />
                </FlexContainer>
                <FlexContainer direction="row">
                    <Text>Население: </Text>
                    <Input
                        placeholder="Введите количество жителей"
                        changeAction={handlePopulationChange}
                        defaultValue={String(formData.population)}
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