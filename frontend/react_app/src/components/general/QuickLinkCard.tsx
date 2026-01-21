import { Card, CardBody, Skeleton } from "@heroui/react";
import IconCard from "./IconCard";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import type { IconName } from "./IconTypes";

export interface QuickLinkCardProps {
    name: string;
    description: string;
    icon: IconName;
    id: number;
    link: string;
}

// Use this to link to a particular page on the website or an external resource
const QuickLinkCard: React.FC<QuickLinkCardProps> = ({ name, description, icon, link }) => {

    const navigate = useNavigate();

    return (
        <Card className="w-[340px] min-w-[340px] h-full min-h-fit border-medium border-default-300 m-0 p-6 bg-content1-base" isPressable isHoverable shadow="none" onPress={() => navigate(link)}>
            <CardBody className="flex flex-row w-fit h-fit p-0 gap-6">
                <IconCard background={"secondary"} icon={icon} size={"sm"}/>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1 items-center">
                        <Skeleton className="flex w-fit rounded-full">
                            <h3>{name}</h3>
                        </Skeleton>
                        <Skeleton className="flex w-fit h-fit rounded-full">
                            <Icon icon={"material-symbols:arrow-forward"} width={24} height={24} className="text-default-900"/>
                        </Skeleton>
                    </div>
                    <Skeleton className="flex w-fit rounded-full">
                        <p>{description}</p>
                    </Skeleton>
                </div>
            </CardBody>
        </Card>
    );
}

export default QuickLinkCard;