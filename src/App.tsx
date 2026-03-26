// src/App.tsx
import { CityProvider } from "./contexts/CityContext";
import { NavigationProvider } from "./contexts/NavigationContext";
import MainPage from "./pages/ui/MainPage";
import MainMenu from "./pages/ui/MainMenu";
import styles from "./index.module.css"

function App() {
    return (
        <CityProvider>
            <NavigationProvider>
                <div className={styles.app}>
                    <MainMenu />
                    <MainPage />
                </div>
            </NavigationProvider>
        </CityProvider>
    );
}

export default App;