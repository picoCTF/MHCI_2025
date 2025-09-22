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
        <Card className="w-full min-w-full h-fit min-h-fit bg-default-100" radius="sm" shadow="none" isPressable isHoverable onPress={() => onResourceLinkCardPress(link)}>
            <CardBody className="flex flex-row justify-between">
                <div className="flex flex-row min-w-fit min-h-fit gap-3">
                    <p>{icon}</p>
                    <p>{name}</p>
                </div>
                {/* NEED_ICON */}
                <p>ARROWICON</p>
            </CardBody>
        </Card>
    );
}

export default ResourceLinkCard;