// src/app/contexts/CityContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import { ICity } from "../entities/City/model";

const initialCities: ICity[] = [
    { id: 1, name: "Москва", country: "Россия", population: 12506468 },
    { id: 2, name: "Токио", country: "Япония", population: 13929286 },
    { id: 3, name: "Нью-Йорк", country: "США", population: 8419600 },
];

interface ICityContext {
    cities: ICity[];
    addCity: (city: ICity) => void;
    updateCity: (id: number, updatedCity: ICity) => void;
    deleteCity: (id: number) => void;
}

const CityContext = createContext<ICityContext | undefined>(undefined);

export function CityProvider({ children }: { children: ReactNode }) {
    const [cities, setCities] = useState<ICity[]>(initialCities);

    const addCity = (city: ICity) => {
        setCities(prev => [...prev, city]);
    };

    const updateCity = (id: number, updatedCity: ICity) => {
        setCities(prev => prev.map(city => 
            city.id === id ? updatedCity : city
        ));
    };

    const deleteCity = (id: number) => {
        setCities(prev => prev.filter(city => city.id !== id));
    };

    return (
        <CityContext.Provider value={{ cities, addCity, updateCity, deleteCity }}>
            {children}
        </CityContext.Provider>
    );
}

export function useCities() {
    const context = useContext(CityContext);
    if (!context) {
        throw new Error("useCities must be used within CityProvider");
    }
    return context;
}