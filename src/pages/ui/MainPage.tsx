// src/pages/ui/MainPage.tsx
import { useNavigation } from "../../contexts/NavigationContext";
import CityList from "../../features/CityList/CityList";
import AddCityForm from "../../features/AddCityForm/AddCityForm";
import EditCityForm from "../../features/EditCityForm/EditCityForm";
import CityDetails from "../../features/CityDetails/CityDetails"; // Теперь путь правильный

function MainPage() {
    const { screen } = useNavigation();

    switch (screen) {
        case "add":
            return <AddCityForm />;
        case "edit":
            return <EditCityForm />;
        case "details":
            return <CityDetails />;
        default:
            return <CityList />;
    }
}

export default MainPage;