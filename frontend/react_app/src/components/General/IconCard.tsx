import { Card, CardBody } from "@heroui/react";
import type { SemanticColorProps } from "../../Interfaces";
import type { IconName } from "./IconTypes";
import { Icon } from "@iconify/react";

export interface IconCardProps {
    background: SemanticColorProps["color"];
    icon: IconName;
    size: "sm" | "lg";
}

// A card containing an icon
// Generally used in challenge cards or learning path cards to show the category of the challenges
const IconCard: React.FC<IconCardProps> = ({ background, icon, size }) => {

    let cardSize = "12";
    let iconSize = 20;
    if(size == "lg")
    {
        cardSize = "16"
        iconSize = 40;
    }

    return (
        <Card radius="md" className={"flex p-0 m-0 w-" + cardSize + " min-w-" + cardSize + " h-" + cardSize + " min-h-" + cardSize + " bg-"+ background +"-50"} shadow="none">
            <CardBody className="flex place-items-center place-content-center p-0 m-0">
                {/* <Icon name={icon} size={"lg"} weight={"normal"} color={background} colorValue="500"/> */}
                <Icon icon={icon} width={iconSize} height={iconSize} className={"text-" + background + "-500"}/>
            </CardBody>
        </Card>
    );
}

export default IconCard;