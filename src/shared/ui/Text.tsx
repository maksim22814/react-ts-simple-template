import { ReactNode } from "react";

interface ITextProps {
    children?: ReactNode;
    size?: number | string;
    color?: string;
}

function Text({ children, size = 14, color = "black" }: ITextProps) {
    return (
        <p style={{ fontSize: size + "pt", color: color }}>
            {children}
        </p>
    );
}
export default Text;
