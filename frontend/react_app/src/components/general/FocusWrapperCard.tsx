import type { ReactNode } from "react";

export interface FocusWrapperCardProps {
    children: ReactNode[] | ReactNode;
    isFocused: boolean;
    orientation: "row" | "col";
}

// If this is in focus, then the children will be highlighted by a blue, padded div
const FocusWrapperCard: React.FC<FocusWrapperCardProps> = ({ children, isFocused, orientation }) => {

    let padding = "0";
    let corners = "";
    let bgColor = "bg-transparent";

    // Only have padding and blue background if the children are in focus
    if(isFocused) {
        padding = "8";
        corners = "rounded-large "
        bgColor = "bg-primary-100";
    }

    return (
        <div className={"flex flex-" + orientation + " w-full max-h-[750px] " + corners + "gap-6 p-" + padding + " " + bgColor + " overflow-scroll"}>
            {children}
        </div>
    );
}

export default FocusWrapperCard;