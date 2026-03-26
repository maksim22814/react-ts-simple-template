// src/pages/ui/MainMenu.tsx
import { useNavigation } from "../../contexts/NavigationContext";
import styles from "./MainMenu.module.css"

function MainMenu() {
    const { screen, goToList, goToAdd } = useNavigation();

    return (
        <div className={styles.menu}>
            <h1>Города</h1>
            <nav>
                <button 
                    className={screen === "list" ? styles.active : ""}
                    onClick={goToList}
                >
                    список городов
                </button>
                <button 
                    className={screen === "add" ? styles.active : ""}
                    onClick={goToAdd}
                >
                    добавить город
                </button>
            </nav>
        </div>
    );
}

export default MainMenu;