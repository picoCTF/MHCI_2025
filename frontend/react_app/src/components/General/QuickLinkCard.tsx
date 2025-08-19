import { Card, CardBody } from "@heroui/react";
import IconCard from "./IconCard";
import type { IconProps } from "./Icon";
// import { useNavigate } from "react-router-dom";

export interface QuickLinkCardProps {
    name: string;
    description: string;
    icon: IconProps["name"];
    id: number;
    link: string;
}

//Should make this a script or something that's consistent across all card components that can be pressed
const onQuickLinkCardPress = ((link: string) => {
    // navigate(link);
})

const QuickLinkCard: React.FC<QuickLinkCardProps> = ({ name, description, icon, link }) => {

    // switch (id) {
    //     case "community": {
    //         link = "/resources/community";
    //         // icon = "";
    //         break;
    //     }
    //     case "external-resources": {
    //         link = "/resources/community";
    //         break;
    //     }
    //     case "learning-guides": {
    //         link = "/resources/learning-guides";
    //         // icon = "";
    //         break;
    //     }
    //     case "primer": {
    //         link = "/resources/primer";
    //         // icon = "";
    //         break;
    //     }
    //     case "videos": {
    //         link = "/resources/videos";
    //         // icon = "";
    //         break;
    //     }
    //     default: {
    //         link = "#";
    //         break;
    //     }
    // }

    return (
        <Card className="w-[340px] min-w-[340px] h-fit border-medium m-0 p-6" isPressable isHoverable shadow="none" onPress={() => onQuickLinkCardPress(link)}>
            <CardBody className="flex flex-row w-full h-fit p-0 gap-6">
                <IconCard background={"secondary"} icon={icon}/>
                <div className="flex flex-col gap-1">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </CardBody>
        </Card>
    );
}

export default QuickLinkCard;