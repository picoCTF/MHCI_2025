import type { SemanticColorProps } from "../../Interfaces";

// Every time you add a new icon in the index.css file, you need to add its name here
export interface IconProps {
    name: "arrow_back_ios" | "arrow_forward" | "arrow_forward_ios" | "article" | "award_star" | "book" | "build" | "calendar" | "cancel" | "check" | "check_circle" | "close" | "code" | "extension" | "flag" | "home" | "import_contacts" | "info" | "key" | "language" | "location_on" | "memory" | "mode_heat" | "notifications" | "person" | "search" | "settings" | "smart_display" | "star";
    size: "xs" | "sm" | "md" | "lg" | "xl";
    weight?: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
    color: SemanticColorProps["color"];
    colorValue?: SemanticColorProps["colorValue"];
}

// Returns an icon from Google's Material Icon library
// When adding new icons, import them into the index.css file and then add their name as an option in the interface
const Icon: React.FC<IconProps> = ({name, size, weight, color, colorValue}) =>  {

    let fontSize = "";

    switch(size) {
        case "xs": {
            fontSize = "[16px]";
            break;
        }
        case "sm": {
            fontSize = "[20px]";
            break;
        }
        case "md": {
            fontSize = "[24px]";
            break;
        }
        case "lg": {
            fontSize = "[40px]";
            break;
        }
        default: {
            fontSize = "[48px]";
            break;
        }
    }

    return (
        <p className={"flex font-icon p-0 m-0 text-" + fontSize + (weight ? (" font-" + weight) : "" ) + " text-" + color + (colorValue ? ("-" + colorValue) : "")}>{name}</p>
    );
}

export default Icon;