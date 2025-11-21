import { Card, Skeleton } from "@heroui/react";
import PendingMemberRequestCard, { PendingMemberRequestCardSkeleton, type PendingMemberRequestCardProps } from "../general/PendingMemberRequestCard";

interface PendingMemberRequestsCardProps {
    pendingRequests: PendingMemberRequestCardProps[];
}

const PendingMemberRequestsCard: React.FC<PendingMemberRequestsCardProps> = ({ pendingRequests }) => {
    return (
        <Card className="w-full h-fit border-small border-default-300 p-6 gap-3" radius="md" shadow="none">
            <h3>Pending Member Requests</h3>
            {pendingRequests.map((item) => (<PendingMemberRequestCard key={item.id} id={item.id} username={item.username}/>))}
        </Card>
    );
}

export const PendingMemberRequestsCardSkeleton: React.FC<{}> = ({}) => {
    return (
        <Card className="w-full h-fit border-small border-default-300 p-6 gap-3" radius="md" shadow="none">
            <Skeleton className="flex w-fit rounded-full">
                <h3>Pending Member Requests</h3>
            </Skeleton>
            {Array.from({length: 3}, (_, index) => (<PendingMemberRequestCardSkeleton key={index}/>))}
        </Card>
    );
}

export default PendingMemberRequestsCard;