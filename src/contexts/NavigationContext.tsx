// src/contexts/NavigationContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

export type ScreenType = "list" | "add" | "edit" | "details";

interface INavigationContext {
    screen: ScreenType;
    selectedCityId: number | null;
    goToList: () => void;
    goToAdd: () => void;
    goToEdit: (id: number) => void;
    goToDetails: (id: number) => void;
}

const NavigationContext = createContext<INavigationContext | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
    const [screen, setScreen] = useState<ScreenType>("list");
    const [selectedCityId, setSelectedCityId] = useState<number | null>(null);

    const goToList = () => {
        setScreen("list");
        setSelectedCityId(null);
    };

    const goToAdd = () => {
        setScreen("add");
        setSelectedCityId(null);
    };

    const goToEdit = (id: number) => {
        setScreen("edit");
        setSelectedCityId(id);
    };

    const goToDetails = (id: number) => {
        setScreen("details");
        setSelectedCityId(id);
    };

    return (
        <NavigationContext.Provider value={{ 
            screen, 
            selectedCityId, 
            goToList, 
            goToAdd, 
            goToEdit,
            goToDetails
        }}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error("useNavigation must be used within NavigationProvider");
    }
    return context;
}