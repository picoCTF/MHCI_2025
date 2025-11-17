import { Card, CardBody, Skeleton } from "@heroui/react";
import PendingMemberRequestCard, { type PendingMemberRequestCardProps } from "../general/PendingMemberRequestCard";

interface PendingMemberRequestsCardProps {
    pendingRequests: PendingMemberRequestCardProps[];
}

const PendingMemberRequestsCard: React.FC<PendingMemberRequestsCardProps> = ({ pendingRequests }) => {
    return (
        <Card className="w-full h-fit border-small border-default-300 p-6 gap-3" radius="md" shadow="none">
            <Skeleton className="flex w-fit rounded-full">
                <h3>Pending Member Requests</h3>
            </Skeleton>
            {pendingRequests.map((item) => (<PendingMemberRequestCard key={item.id} id={item.id} username={item.username}/>))}
        </Card>
    );
}

export default PendingMemberRequestsCard;