import { Card, CardBody } from "@heroui/react";
import IconCard from "./IconCard";
import type { IconProps } from "./Icon";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

export interface QuickLinkCardProps {
    name: string;
    description: string;
    icon: IconProps["name"];
    id: number;
    link: string;
}

const QuickLinkCard: React.FC<QuickLinkCardProps> = ({ name, description, icon, link }) => {

    const navigate = useNavigate();

    return (
        <Card className="w-[340px] min-w-[340px] h-full min-h-fit border-medium border-default-300 m-0 p-6 bg-content1-base" isPressable isHoverable shadow="none" onPress={() => navigate(link)}>
            <CardBody className="flex flex-row w-fit h-fit p-0 gap-6">
                <IconCard background={"secondary"} icon={icon}/>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1">
                        <h3>{name}</h3>
                        <Icon name={"arrow_forward"} size={"md"} color={"default"} colorValue="900"/>
                    </div>
                    <p>{description}</p>
                </div>
            </CardBody>
        </Card>
    );
}

export default QuickLinkCard;