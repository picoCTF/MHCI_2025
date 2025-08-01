import { Card, CardBody } from "@heroui/react";
import Icon, { type IconProps } from "./Icon";
import type { SemanticColorProps } from "../../Interfaces";

export interface IconCardProps {
    background: SemanticColorProps["color"];
    icon: IconProps["name"];
}

const IconCard: React.FC<IconCardProps> = ({ background, icon }) => {

    return (
        <Card radius="md" className={"flex w-[48px] h-[48px] bg-"+ background +"-50"} shadow="none">
            <CardBody className="flex">
                <Icon name={icon} size={"48"} weight={"normal"} color={background} colorValue="500"/>
                {/* <span className="font-icon text-[24px] text-center text-primary-500">{icon}</span> */}
            </CardBody>
        </Card>
    );
}

export default IconCard;