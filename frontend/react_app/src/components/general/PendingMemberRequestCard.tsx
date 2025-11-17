import { Button, Card, CardBody, Skeleton } from "@heroui/react";
import { Icon } from "@iconify/react";

export interface PendingMemberRequestCardProps {
    id: number;
    username: string;
}

const PendingMemberRequestCard: React.FC<PendingMemberRequestCardProps> = ({ username }) => {
    return (
        <Card className="flex flex-row w-full h-fit justify-between items-center p-4 bg-content2-base" radius="sm" shadow="none">
            <Skeleton className="flex w-fit rounded-full">
                <p className="flex w-full font-base">{username}</p>
            </Skeleton>
            <div className="flex flex-row gap-4">
                <Skeleton className="flex w-fit h-full rounded-full">
                    <Button className="border-none w-fit h-full" isIconOnly size="sm" radius="full" variant="ghost" color="danger">
                        <Icon icon={"material-symbols:cancel-outline"} width={24} height={24} className="text-danger-500"/>
                    </Button>
                </Skeleton>
                <Skeleton className="flex w-fit h-full rounded-full">
                    <Button className="border-none w-fit h-full p-0 m-0 overflow-show" isIconOnly size="sm" radius="full" variant="ghost" color="success">
                        <Icon icon={"material-symbols:check-circle-outline"} width={24} height={24} className="text-success"/>
                    </Button>
                </Skeleton>
            </div>
        </Card>
    );
}

export default PendingMemberRequestCard;