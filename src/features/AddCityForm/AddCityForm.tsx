// src/features/AddCityForm/AddCityForm.tsx
import { useState } from "react";
import { ICity } from "../../entities/City/model";
import { useCities } from "../../contexts/CityContext";
import { useNavigation } from "../../contexts/NavigationContext";
import Button from "../../shared/ui/Button";
import FlexContainer from "../../shared/ui/FlexContainer";
import Input from "../../shared/ui/Input";
import Text from "../../shared/ui/Text";

function AddCityForm() {
    const { addCity } = useCities();
    const { goToList } = useNavigation();
    
    const [formData, setFormData] = useState<Omit<ICity, "id">>({
        name: "",
        country: "",
        population: 0,
    });

    const handlePopulationChange = (value: string) => {
        const population = parseInt(value) || 0;
        setFormData(prev => ({ ...prev, population }));
    };

    const handleSubmit = () => {
        const newCity: ICity = {
            id: Date.now(),
            name: formData.name || "Без названия",
            country: formData.country || "Неизвестна",
            population: formData.population || 0,
        };
        addCity(newCity);
        goToList();
    };

    return (
        <FlexContainer gap={20}>
            <Text size={24}>Добавление города</Text>
            <FlexContainer alignItems="stretch">
                <FlexContainer direction="row">
                    <Text>Название: </Text>
                    <Input
                        placeholder="Введите название города"
                        changeAction={(value) => setFormData({ ...formData, name: value })}
                    />
                </FlexContainer>
                <FlexContainer direction="row">
                    <Text>Страна: </Text>
                    <Input
                        placeholder="Введите страну"
                        changeAction={(value) => setFormData({ ...formData, country: value })}
                    />
                </FlexContainer>
                <FlexContainer direction="row">
                    <Text>Население: </Text>
                    <Input
                        placeholder="Введите количество жителей"
                        changeAction={handlePopulationChange}
                    />
                </FlexContainer>
                <Button clickAction={handleSubmit}>Сохранить</Button>
            </FlexContainer>
        </FlexContainer>
    );
}

export default AddCityForm;