import { Button, Card, CardBody } from "@heroui/react";

export interface PendingMemberRequestCardProps {
    username: string;
}

const PendingMemberRequestCard: React.FC<PendingMemberRequestCardProps> = ({ username }) => {
    return (
        <Card className="flex w-full h-fit bg-default-100" radius="sm" shadow="none">
            <CardBody className="flex flex-row justify-between items-center p-4 m-0">
                <p className="flex w-full">{username}</p>
                <div className="flex flex-row gap-4">
                    <Button isIconOnly size="sm" radius="full" variant="ghost" color="danger">
                        <span className="font-icon text-[24px]">close</span>
                    </Button>
                    <Button isIconOnly size="sm" radius="full" variant="ghost" color="success">
                        <span className="font-icon text-[24px]">check</span>
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default PendingMemberRequestCard;