import { Card, CardBody, CardHeader } from "@heroui/react";
import AssignmentStatusCard from "./AssignmentStatusCard";

interface RecentAssignmentsCardProps {
    assignmentIDs: string[];
}

const RecentAssignmentsCard: React.FC<RecentAssignmentsCardProps> = ({ assignmentIDs }) => {
    return (
        <Card className="w-fill h-fit]">
            <CardHeader>
                <h2>Recent Assignments</h2>
            </CardHeader>
            <CardBody>
                <AssignmentStatusCard assignmentID={assignmentIDs[0]}/>
                <AssignmentStatusCard assignmentID={assignmentIDs[1]}/>
            </CardBody>
        </Card>
    );
}

export default RecentAssignmentsCard;