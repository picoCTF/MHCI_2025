import { Card, CardBody } from "@heroui/react";
import PendingMemberRequestCard, { type PendingMemberRequestCardProps } from "../General/PendingMemberRequestCard";

interface PendingMemberRequestsCardProps {
    pendingRequests: PendingMemberRequestCardProps[];
}

const PendingMemberRequestsCard: React.FC<PendingMemberRequestsCardProps> = ({ pendingRequests }) => {
    return (
        <Card className="w-full h-fit border-small p-6" radius="md" shadow="none">
            <CardBody className="gap-3 m-0 p-0">
                <h2>Pending Member Requests</h2>
                {pendingRequests.map((item) => (<PendingMemberRequestCard username={item.username}/>))}
            </CardBody>
        </Card>
    );
}

export default PendingMemberRequestsCard;