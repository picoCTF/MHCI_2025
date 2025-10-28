import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export interface PendingMemberRequestCardProps {
    id: number;
    username: string;
}

const PendingMemberRequestCard: React.FC<PendingMemberRequestCardProps> = ({ username }) => {
    return (
        <Card className="flex w-full h-fit bg-content2-base" radius="sm" shadow="none">
            <CardBody className="flex flex-row justify-between items-center p-4 m-0">
                <p className="flex w-full font-base">{username}</p>
                <div className="flex flex-row gap-4">
                    <Button className="border-none w-fit h-full" isIconOnly size="sm" radius="full" variant="ghost" color="danger">
                        <Icon icon={"material-symbols:cancel-outline"} width={24} height={24} className="text-danger-500"/>
                    </Button>
                    {/* <Icon name={"check_circle"} size={"md"} color={"success"}/> */}
                    <Button className="border-none w-fit h-full p-0 m-0 overflow-show" isIconOnly size="sm" radius="full" variant="ghost" color="success">
                        <Icon icon={"material-symbols:check-circle-outline"} width={24} height={24} className="text-success"/>
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default PendingMemberRequestCard;