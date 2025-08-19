import { Card, CardBody } from "@heroui/react";
import RecentAssignmentsCard from "./RecentAssignmentsCard";
import PendingMemberRequestsCard from "../homepage/PendingMemberRequestsCard";
import { type AssignmentStatusCardProps } from "./AssignmentStatusCard";
import type { PendingMemberRequestCardProps } from "./PendingMemberRequestCard";

export interface ClassroomCardProps {
    id: number;
    name: string;
    numMembers: number;
    recentAssignments: AssignmentStatusCardProps[];
    pendingMemberUsernames: PendingMemberRequestCardProps[];
}

const ClassroomCard: React.FC<ClassroomCardProps> = ({ name, numMembers, recentAssignments, pendingMemberUsernames }) => {
    return (
        <Card className="flex w-full h-fit border-small p-6" radius="md" shadow="none">
            <CardBody className="flex p-0 m-0 gap-4">
                <div className="flex flex-col items-start gap-3">
                    {/* API_NEEDED - Get the classroom name and number of members */}
                    <h3>{name}</h3>
                    <p>{numMembers + " Members"}</p>
                </div>
                {/* API_NEEDED - Get the usernames of the people that want to join this classroom */}
                <PendingMemberRequestsCard pendingRequests={pendingMemberUsernames}/>
                {/* API_NEEDED - Get the IDs of assignments the user recently viewed in this classroom */}
                <RecentAssignmentsCard list={recentAssignments}/>
            </CardBody>
        </Card>
    );
}

export default ClassroomCard;