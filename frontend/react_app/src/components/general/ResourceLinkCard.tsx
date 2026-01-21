import { Card, CardBody, Skeleton } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

interface ResourceLinkCardProps {
    name: string;
    link: string;

    icon?: string;
}

// This links to some other resource within the website when the user clicks it
const ResourceLinkCard: React.FC<ResourceLinkCardProps> = ({ name, link, icon }) => {

    const navigate = useNavigate();

    return (
        <Card className="w-full min-w-full h-fit min-h-fit bg-default-100" radius="sm" shadow="none" isPressable isHoverable onPress={() => navigate(link)}>
            <CardBody className="flex flex-row justify-between">
                <div className="flex flex-row min-w-fit min-h-fit gap-3">
                    {icon ? <Icon icon={icon}/> : null}
                    <p>{name}</p>
                </div>
                <Icon icon={"material-symbols:arrow-outward"}/>
            </CardBody>
        </Card>
    );
}

export const ResourceLinkCardSkeleton: React.FC<{}> = ({}) => {
    return (
        <Skeleton className="rounded-md">
            <Card className="w-full min-w-full h-fit min-h-fit bg-default-100" radius="sm" shadow="none">
                <CardBody className="flex flex-row justify-between">
                    <div className="flex flex-row min-w-fit min-h-fit gap-3">
                        <Icon icon={"material-symbols:heat-mode-outline"}/>
                        <p>Name Here</p>
                    </div>
                    <Icon icon={"material-symbols:arrow-outward"}/>
                </CardBody>
            </Card>
        </Skeleton>
    );
}

export default ResourceLinkCard;