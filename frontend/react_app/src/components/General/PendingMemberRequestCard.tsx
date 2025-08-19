import { Button, Card, CardBody } from "@heroui/react";
import Icon from "./Icon";

export interface PendingMemberRequestCardProps {
    id: number;
    username: string;
}

const PendingMemberRequestCard: React.FC<PendingMemberRequestCardProps> = ({ username }) => {
    return (
        <Card className="flex w-full h-fit bg-default-100" radius="sm" shadow="none">
            <CardBody className="flex flex-row justify-between items-center p-4 m-0">
                <p className="flex w-full font-base">{username}</p>
                <div className="flex flex-row gap-4">
                    <Button className="border-none w-fit h-full" isIconOnly size="sm" radius="full" variant="ghost" color="danger">
                        <Icon name={"cancel"} size={"md"} color={"danger"} colorValue="500"/>
                    </Button>
                    <Icon name={"check_circle"} size={"md"} color={"success"}/>
                    <Button className="border-none w-[12px] h-[24px] p-0 m-0 overflow-show" isIconOnly size="sm" radius="full" variant="ghost" color="success">
                        <Icon name={"check_circle"} size={"md"} color={"success"}/>
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default PendingMemberRequestCard;