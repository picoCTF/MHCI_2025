import { Card, CardBody } from "@heroui/react";
import PendingMemberRequestCard, { type PendingMemberRequestCardProps } from "../general/PendingMemberRequestCard";

interface PendingMemberRequestsCardProps {
    pendingRequests: PendingMemberRequestCardProps[];
}

const PendingMemberRequestsCard: React.FC<PendingMemberRequestsCardProps> = ({ pendingRequests }) => {
    return (
        <Card className="w-full h-fit border-small border-default-300 p-6" radius="md" shadow="none">
            <CardBody className="gap-3 m-0 p-0">
                <h3>Pending Member Requests</h3>
                {pendingRequests.map((item) => (<PendingMemberRequestCard key={item.id} id={item.id} username={item.username}/>))}
            </CardBody>
        </Card>
    );
}

export default PendingMemberRequestsCard;