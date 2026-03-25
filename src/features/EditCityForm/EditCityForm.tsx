// src/features/EditCityForm/EditCityForm.tsx
import { useState, useEffect } from "react";
import { ICity } from "../../entities/City/model";
import { useCities } from "../../contexts/CityContext";
import { useNavigation } from "../../contexts/NavigationContext";
import Button from "../../shared/ui/Button";
import Input from "../../shared/ui/Input";
import styles from "./EditCityForm.module.css"

function EditCityForm() {
    const { cities, updateCity } = useCities();
    const { editingCityId, goToList } = useNavigation();
    
    const [formData, setFormData] = useState<Omit<ICity, "id">>({
        name: "",
        country: "",
        population: 0,
    });

    useEffect(() => {
        if (editingCityId) {
            const city = cities.find(c => c.id === editingCityId);
            if (city) {
                setFormData({
                    name: city.name,
                    country: city.country,
                    population: city.population,
                });
            }
        }
    }, [editingCityId, cities]);

    const handleChange = (field: keyof typeof formData, value: string) => {
        if (field === "population") {
            const numValue = parseInt(value) || 0;
            setFormData(prev => ({ ...prev, [field]: numValue }));
        } else {
            setFormData(prev => ({ ...prev, [field]: value }));
        }
    };

    const handleSubmit = () => {
        if (!editingCityId) return;
        
        const updatedCity: ICity = {
            id: editingCityId,
            name: formData.name || "Без названия",
            country: formData.country || "Неизвестна",
            population: formData.population || 0,
        };

        updateCity(editingCityId, updatedCity);
        goToList();
    };

    return (
        <div className={styles.container}>
            <h2>Редактирование города</h2>
            
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
                        Сохранить изменения
                    </Button>
                    <Button clickAction={goToList}>
                        Отмена
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default EditCityForm;