import { Card, CardBody, CardHeader } from "@heroui/react";
import PendingMemberRequestCard from "../General/PendingMemberRequestCard";

interface PendingMemberRequestsCardProps {
    usernames: string[];
}

const PendingMemberRequestsCard: React.FC<PendingMemberRequestsCardProps> = ({ usernames }) => {
    return (
        <Card className="w-fill h-fit]">
            <CardHeader>
                <h2>Pending Member Requests</h2>
            </CardHeader>
            <CardBody>
                <PendingMemberRequestCard username={usernames[0]}/>
                <PendingMemberRequestCard username={usernames[1]}/>
                <PendingMemberRequestCard username={usernames[2]}/>
            </CardBody>
        </Card>
    );
}

export default PendingMemberRequestsCard;