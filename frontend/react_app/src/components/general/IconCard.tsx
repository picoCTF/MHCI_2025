import { Card, CardBody, Skeleton } from "@heroui/react";
import type { SemanticColorProps } from "../../Interfaces";
import { Icon } from "@iconify/react";

export interface IconCardProps {
    background: SemanticColorProps["color"];
    icon: string;
    radius?: "md" | "lg";
    size: "sm" | "lg";
}

// A card containing an icon
// Generally used in challenge cards or learning path cards to show the category of the challenges
const IconCard: React.FC<IconCardProps> = ({ background, icon, radius, size }) => {

    let cardSize = "12";
    let iconSize = 20;
    if(size == "lg")
    {
        cardSize = "16"
        iconSize = 40;
    }

    return (
        <Skeleton className={"flex w-fit h-fit rounded-xl"}>
            <Card radius={radius} className={"flex p-0 m-0 w-" + cardSize + " min-w-" + cardSize + " h-" + cardSize + " min-h-" + cardSize + " bg-"+ background +"-50"} shadow="none">
                <CardBody className="flex place-items-center place-content-center p-0 m-0">
                    <Icon icon={icon} width={iconSize} height={iconSize} className={"text-" + background + "-500"}/>
                </CardBody>
            </Card>
        </Skeleton>
    );
}

export default IconCard;