// src/widgets/footer/Footer.tsx
import Panel from "../../shared/ui/Panel";
import Text from "../../shared/ui/Text";

export default function Footer() {
    return (
        <footer>
            <Panel padding={15}>
                <Text>© 2024 Города мира. Все права защищены.</Text>
            </Panel>
        </footer>
    );
}