import { Card, Skeleton } from "@heroui/react";
import RecentAssignmentsCard, { RecentAssignmentsCardSkeleton } from "./RecentAssignmentsCard";
import PendingMemberRequestsCard, { PendingMemberRequestsCardSkeleton } from "../Homepage/PendingMemberRequestsCard";
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
        <Card className="flex w-full h-fit min-h-fit border-small border-default-300 p-6 bg-content1-base gap-4" radius="md" shadow="none">
            <div className="flex flex-col items-start gap-3">
                <Skeleton className="flex w-fit rounded-full">
                    <h3>{name}</h3>
                </Skeleton>
                <Skeleton className="flex w-fit rounded-full">
                    <p>{numMembers + " Members"}</p>
                </Skeleton>
            </div>
            <PendingMemberRequestsCard pendingRequests={pendingMemberUsernames}/>
            <RecentAssignmentsCard list={recentAssignments}/>
        </Card>
    );
}

export const ClassroomCardSkeleton: React.FC<{}> = ({}) => {
    return (
        <Card className="flex w-full h-fit min-h-fit border-small border-default-300 p-6 bg-content1-base gap-4" radius="md" shadow="none">
            <div className="flex flex-col items-start gap-3">
                <Skeleton className="flex w-fit rounded-full">
                    <h3>Name</h3>
                </Skeleton>
                <Skeleton className="flex w-fit rounded-full">
                    <p>{"XX Members"}</p>
                </Skeleton>
            </div>
            <PendingMemberRequestsCardSkeleton/>
            <RecentAssignmentsCardSkeleton/>
        </Card>
    );
}

export default ClassroomCard;