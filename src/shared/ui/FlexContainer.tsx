import { ReactNode } from "react";

type FlexWrapType = "wrap" | "nowrap" | "wrap-reverse";
type FlexDirectionType = "row" | "column" | "row-reverse" | "column-reverse";
type FlexAlignContentType = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch";
type FlexAlignItemsType = "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

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
    isFillSpace = false
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
                ...(isFillSpace && { width: "100%", height: "100%" })
            }}
        >
            {children}
        </div>
    );
}

export default FlexContainer;