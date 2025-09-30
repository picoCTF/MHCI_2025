import { Card, CardBody } from "@heroui/react";
import RecentAssignmentsCard from "./RecentAssignmentsCard";
import PendingMemberRequestsCard from "../Homepage/PendingMemberRequestsCard";
import { type AssignmentStatusCardProps } from "./AssignmentStatusCard";
import type { PendingMemberRequestCardProps } from "./PendingMemberRequestCard";

export interface ClassroomCardProps {
    id: number;
    name: string;
    numMembers: number;
    recentAssignments: AssignmentStatusCardProps[];
    pendingMemberUsernames: PendingMemberRequestCardProps[];
}

// This card shows a classroom along with its assignments, members, and member requests
const ClassroomCard: React.FC<ClassroomCardProps> = ({ name, numMembers, recentAssignments, pendingMemberUsernames }) => {
    return (
        <Card className="flex w-full h-fit border-small p-6 bg-content1-base m-0" radius="md" shadow="none">
            <CardBody className="flex p-0 m-0 gap-4">
                <div className="flex flex-col items-start gap-3">
                    <h3>{name}</h3>
                    <p>{numMembers + " Members"}</p>
                </div>
                <PendingMemberRequestsCard pendingRequests={pendingMemberUsernames}/>
                <RecentAssignmentsCard list={recentAssignments}/>
            </CardBody>
        </Card>
    );
}

export default ClassroomCard;