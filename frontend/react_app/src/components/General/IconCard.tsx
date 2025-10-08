import { Card, CardBody } from "@heroui/react";
import Icon, { type IconProps } from "./Icon";
import type { SemanticColorProps } from "../../Interfaces";

export interface IconCardProps {
    background: SemanticColorProps["color"];
    icon: IconProps["name"];
}

// A card containing an icon
// Generally used in challenge cards or learning path cards to show the category of the challenges
const IconCard: React.FC<IconCardProps> = ({ background, icon }) => {

    return (
        <Card radius="md" className={"flex w-[48px] min-w-[48px] h-[48px] min-h-[48px] bg-"+ background +"-50"} shadow="none">
            <CardBody className="flex place-items-center">
                <Icon name={icon} size={"xl"} weight={"normal"} color={background} colorValue="500"/>
            </CardBody>
        </Card>
    );
}

export default IconCard;