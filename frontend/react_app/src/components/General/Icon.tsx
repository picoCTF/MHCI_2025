import type { SemanticColorProps } from "../../Interfaces";

// Every time you add a new icon in the index.css file, you need to add its name here
export interface IconProps {
    name: "article" | "award_star" | "book" | "build" | "calendar" | "cancel" | "check" | "check_circle" | "close" | "code" | "extension" | "flag" | "home" | "import_contacts" | "info" | "key" | "language" | "memory" | "mode_heat" | "notifications" | "person" | "search" | "smart_display" | "star";
    size: "xs" | "sm" | "md" | "lg" | "xl";
    weight?: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
    color: SemanticColorProps["color"];
    colorValue?: SemanticColorProps["colorValue"];
}

// Returns an icon from Google's Material Icon library
// When adding new icons, import them into the index.css file and then add their name as an option in the interface
const Icon: React.FC<IconProps> = ({name, size, weight, color, colorValue}) =>  {
    return (
        <span className={"font-icon text-icon-" + size + (weight ? (" font-" + weight) : "" ) + " text-" + color + (colorValue ? ("-" + colorValue) : "")}>{name}</span>
    );
}

export default Icon;