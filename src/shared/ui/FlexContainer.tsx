import { ReactNode } from "react";
import { FlexAlignContentType, FlexAlignItemsType, FlexDirectionType, FlexWrapType } from "../types/FlexTypes";

interface IFlexContainerProps {
    children?: ReactNode;
    gap?: number;
    wrap?: FlexWrapType;
    direction?: FlexDirectionType;
    justifyContent?: FlexAlignContentType;
    alignContent?: FlexAlignContentType;
    alignItems?: FlexAlignItemsType;
    isFillSpace?: boolean;
}

function FlexContainer({
    children,
    gap = 8,
    wrap = "wrap",
    direction = "column",
    justifyContent = "center",
    alignContent = "center",
    alignItems = "center",
}: IFlexContainerProps) {
    return (
        <div
            style={{
                display: "flex",
                gap: gap + "px",
                flexWrap: wrap,
                flexDirection: direction,
                justifyContent: justifyContent,
                alignContent: alignContent,
                alignItems: alignItems,
            }}
        >
            {children}
        </div>
    );
}
export default FlexContainer;
