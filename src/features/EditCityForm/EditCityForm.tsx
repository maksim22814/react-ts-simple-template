// src/features/EditCityForm/EditCityForm.tsx
import { useState, useEffect } from "react";
import { ICity } from "../../entities/City/model";
import { useCities } from "../../contexts/CityContext";
import { useNavigation } from "../../contexts/NavigationContext";
import Button from "../../shared/ui/Button";
import FlexContainer from "../../shared/ui/FlexContainer";
import Input from "../../shared/ui/Input";
import Text from "../../shared/ui/Text";

function EditCityForm() {
    const { cities, updateCity } = useCities();
    const { selectedCityId, goToList } = useNavigation();
    
    const [formData, setFormData] = useState<Omit<ICity, "id">>({
        name: "",
        country: "",
        population: 0,
    });

    useEffect(() => {
        if (selectedCityId) {
            const city = cities.find(c => c.id === selectedCityId);
            if (city) {
                setFormData({
                    name: city.name,
                    country: city.country,
                    population: city.population,
                });
            }
        }
    }, [selectedCityId, cities]);

    const handlePopulationChange = (value: string) => {
        const population = parseInt(value) || 0;
        setFormData(prev => ({ ...prev, population }));
    };

    const handleSubmit = () => {
        if (!selectedCityId) return;
        
        const updatedCity: ICity = {
            id: selectedCityId,
            name: formData.name || "Без названия",
            country: formData.country || "Неизвестна",
            population: formData.population || 0,
        };
        updateCity(selectedCityId, updatedCity);
        goToList();
    };

    if (!selectedCityId) return <Text>Город не найден!</Text>;

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
                <Button clickAction={handleSubmit}>Сохранить</Button>
            </FlexContainer>
        </FlexContainer>
    );
}

export default EditCityForm;