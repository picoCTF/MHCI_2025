import { Card, Skeleton } from "@heroui/react";
import AssignmentStatusCard, { AssignmentStatusCardSkeleton, type AssignmentStatusCardProps } from "./AssignmentStatusCard";

interface RecentAssignmentsCardProps {
    list: AssignmentStatusCardProps[];
}

const RecentAssignmentsCard: React.FC<RecentAssignmentsCardProps> = ({ list }) => {
    return (
        <Card className="flex w-full h-fit border-small border-default-300 p-6 gap-3" shadow="none">
            <h3>Recent Assignments</h3>
            {list.map((item) => (<AssignmentStatusCard key={item.id} name={item.name} completedChallenges={item.completedChallenges} totalChallenges={item.totalChallenges} id={item.id} isActive={item.isActive}/>))}
        </Card>
    );
}

export const RecentAssignmentsCardSkeleton: React.FC<{}> = ({}) => {
    return (
        <Card className="flex w-full h-fit border-small border-default-300 p-6 gap-3" shadow="none">
            <Skeleton className="flex w-fit rounded-full">
                <h3>Recent Assignments</h3>
            </Skeleton>
            {Array.from({length: 3}, (_, index) => (<AssignmentStatusCardSkeleton key={index}/>))}
        </Card>
    );
}

export default RecentAssignmentsCard;