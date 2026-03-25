// src/features/AddCityForm/AddCityForm.tsx
import { useState } from "react";
import { ICity } from "../../entities/City/model";
import { useCities } from "../../contexts/CityContext";
import { useNavigation } from "../../contexts/NavigationContext";
import Button from "../../shared/ui/Button";
import Input from "../../shared/ui/Input";
import styles from "./AddCityForm.module.css"

function AddCityForm() {
    const { addCity } = useCities();
    const { goToList } = useNavigation();
    
    const [formData, setFormData] = useState<Omit<ICity, "id">>({
        name: "",
        country: "",
        population: 0,
    });

    const handleChange = (field: keyof typeof formData, value: string) => {
        if (field === "population") {
            const numValue = parseInt(value) || 0;
            setFormData(prev => ({ ...prev, [field]: numValue }));
        } else {
            setFormData(prev => ({ ...prev, [field]: value }));
        }
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
        <div className={styles.container}>
            <h2>Добавление города</h2>
            
            <div className={styles.form}>
                <Input
                    placeholder="Название города"
                    value={formData.name}
                    changeAction={(value) => handleChange("name", value)}
                />
                
                <Input
                    placeholder="Страна"
                    value={formData.country}
                    changeAction={(value) => handleChange("country", value)}
                />
                
                <Input
                    placeholder="Население (человек)"
                    value={formData.population.toString()}
                    changeAction={(value) => handleChange("population", value)}
                />
                
                <div className={styles.buttons}>
                    <Button clickAction={handleSubmit}>
                        Сохранить
                    </Button>
                    <Button clickAction={goToList}>
                        Отмена
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AddCityForm;