// src/pages/ui/MainPage.tsx
import { useNavigation } from "../../contexts/NavigationContext";
import CityList from "../../features/CityList/CityList";
import AddCityForm from "../../features/AddCityForm/AddCityForm";
import EditCityForm from "../../features/EditCityForm/EditCityForm";

function MainPage() {
    const { screen } = useNavigation();

    switch (screen) {
        case "add":
            return <AddCityForm />;
        case "edit":
            return <EditCityForm />;
        default:
            return <CityList />;
    }
}

export default MainPage;