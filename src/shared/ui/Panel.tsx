import { ReactNode } from "react";
import styles from "./../styles/Panel.module.css";

interface IPanelProps {
    children?: ReactNode;
    padding?: number;
    margin?: number;
}

function Panel({ children, padding = 0, margin = 0 }: IPanelProps) {
    return (
        <div
            className={styles.basePanel}
            style={{ padding: padding, margin: margin }}
        >
            {children}
        </div>
    );
}
export default Panel;
