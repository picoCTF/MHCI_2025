import { Card, CardBody, CardHeader } from "@heroui/react";
import { useNavigate } from "react-router-dom";

interface QuickLinkCardProps {
    title: "Community" | "External Resources" | "Learning Guides" | "Primer" | "Videos";
    description: string;
    icon: string;
    link?: string;
}

function getQuickLink(resource: string) {
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

const onQuickLinkCardPress = ((link: string) => {
    // navigate(link);
})

const QuickLinkCard: React.FC<QuickLinkCardProps> = ({ title, description, icon, link }) => {
    return (
        <Card isPressable isHoverable onPress={() => onQuickLinkCardPress(link ? link : getQuickLink(title))}>
            <CardHeader>
                <p>{icon}</p>
            </CardHeader>
            <CardBody>
                <h2>{title}</h2>
                <p>{description}</p>
            </CardBody>
        </Card>
    );
}

export default QuickLinkCard;