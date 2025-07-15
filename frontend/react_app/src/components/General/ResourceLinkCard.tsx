import { Card, CardBody } from "@heroui/react";
import { useNavigate } from "react-router-dom";

interface ResourceLinkCardProps {
    name: string;
    link: string;

    icon?: string;
}

//Should make this a script or something that's consistent across all card components that can be pressed
const onResourceLinkCardPress = ((link: string) => {
    const navigate = useNavigate();
    navigate(link);
})

const ResourceLinkCard: React.FC<ResourceLinkCardProps> = ({ name, link, icon }) => {
    return (
        <Card className="w-fill min-w-fill h-fit min-h-fit" isPressable isHoverable onPress={() => onResourceLinkCardPress(link)}>
            <CardBody className="flex flex-row justify-between">
                <div className="flex flex-row min-w-fit min-h-fit">
                    <p>{icon}</p>
                    <p>{name}</p>
                </div>
                <p>ARROWICON</p>
            </CardBody>
        </Card>
    );
}

export default ResourceLinkCard;