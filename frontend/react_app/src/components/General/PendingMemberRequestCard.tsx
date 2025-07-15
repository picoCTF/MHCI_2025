import { Button, Card, CardBody } from "@heroui/react";

interface PendingMemberRequestCardProps {
    username: string;
}

const PendingMemberRequestCard: React.FC<PendingMemberRequestCardProps> = ({ username }) => {
    return (
        <Card className="w-fill h-fit]">
            <CardBody className="flex flex-row justify-between">
                <p className="w-fill">{username}</p>
                <div>
                    <Button isIconOnly size="sm" radius="full">XIcon</Button>
                    <Button isIconOnly size="sm" radius="full">CheckIcon</Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default PendingMemberRequestCard;