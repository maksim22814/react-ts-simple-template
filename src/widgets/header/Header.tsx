// src/widgets/header/Header.tsx
import { NavLink } from "react-router-dom";
import FlexContainer from "../../shared/ui/FlexContainer";
import Panel from "../../shared/ui/Panel";
import Text from "../../shared/ui/Text";

export default function Header() {
    return (
        <header>
            <Panel padding={25}>
                <FlexContainer direction="row" justifyContent="space-between">
                    <Text size={20}>Города</Text>
                    <FlexContainer direction="row" gap={20}>
                        <NavLink 
                            to="/" 
                            style={({ isActive }) => ({
                                textDecoration: "none",
                                color: isActive ? "#0066cc" : "#333",
                                fontWeight: isActive ? "600" : "normal",
                                borderBottom: isActive ? "2px solid #0066cc" : "none",
                                paddingBottom: "4px"
                            })}
                        >
                            <Text>Список городов</Text>
                        </NavLink>
                        <NavLink 
                            to="/add" 
                            style={({ isActive }) => ({
                                textDecoration: "none",
                                color: isActive ? "#0066cc" : "#333",
                                fontWeight: isActive ? "600" : "normal",
                                borderBottom: isActive ? "2px solid #0066cc" : "none",
                                paddingBottom: "4px"
                            })}
                        >
                            <Text>Добавить город</Text>
                        </NavLink>
                    </FlexContainer>
                </FlexContainer>
            </Panel>
        </header>
    );
}