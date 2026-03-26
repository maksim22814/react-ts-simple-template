// src/app/contexts/NavigationContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

export type ScreenType = "list" | "add" | "edit";

interface INavigationContext {
    screen: ScreenType;
    editingCityId: number | null;
    goToList: () => void;
    goToAdd: () => void;
    goToEdit: (id: number) => void;
}

const NavigationContext = createContext<INavigationContext | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
    const [screen, setScreen] = useState<ScreenType>("list");
    const [editingCityId, setEditingCityId] = useState<number | null>(null);

    const goToList = () => {
        setScreen("list");
        setEditingCityId(null);
    };

    const goToAdd = () => {
        setScreen("add");
        setEditingCityId(null);
    };

    const goToEdit = (id: number) => {
        setScreen("edit");
        setEditingCityId(id);
    };

    return (
        <NavigationContext.Provider value={{ screen, editingCityId, goToList, goToAdd, goToEdit }}>
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