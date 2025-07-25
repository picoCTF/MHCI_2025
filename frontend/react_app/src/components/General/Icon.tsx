import type { SemanticColorProps } from "../../Interfaces";

export interface IconProps {
    name: "article" | "award_star" | "book" | "calendar" | "check" | "close" | "code" | "extension" | "flag" | "home" | "import_contacts" | "info" | "mode_heat" | "notifications" | "person" | "smart_display";
    size: "20" | "24" | "40" | "48";
    weight: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
    color: SemanticColorProps["color"];
    colorValue?: SemanticColorProps["colorValue"];
}

const Icon: React.FC<IconProps> = ({name, size, weight, color, colorValue}) =>  {
    return (
        <span className={"font-icon font-" + weight + " text-icon-" + size + " text-" + color + (colorValue ? ("-" + colorValue) : "")}>{name}</span>
    );
}

export default Icon;