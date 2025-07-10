import { Card, CardBody, CardHeader } from "@heroui/react";
import { useNavigate } from "react-router-dom";

interface ResourceCardProps {
    resource: "Community" | "External Resources" | "Learning Guides" | "Primer" | "Videos";
    description: string;
    icon: string;
    link?: string;
}

function getResourceLink(resource: string) {
    switch(resource) {
        case "Community":
        {
            return "/resources/community";
        }
        case "External Resources":
        {
            return "/resources/community";
        }
        case "Learning Guides":
        {
            return "/resources/learning-guides";
        }
        case "Videos":
        {
            return "/resources/videos";
        }
        default:
        {
            return "/resources/primer";
        }
    }
}

const onResourceCardPress = ((link: string) => {
    // const navigate = useNavigate();
    // navigate(link);
})

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, description, icon, link }) => {
    return (
        <Card isPressable isHoverable onPress={() => onResourceCardPress(link ? link : getResourceLink(resource))}>
            <CardHeader>
                <p>{icon}</p>
            </CardHeader>
            <CardBody>
                <h2>{resource}</h2>
                <p>{description}</p>
            </CardBody>
        </Card>
    );
}

export default ResourceCard;