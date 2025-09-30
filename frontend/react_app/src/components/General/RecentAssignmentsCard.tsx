import { Card, CardBody } from "@heroui/react";
import AssignmentStatusCard, { type AssignmentStatusCardProps } from "./AssignmentStatusCard";

interface RecentAssignmentsCardProps {
    list: AssignmentStatusCardProps[];
}

const RecentAssignmentsCard: React.FC<RecentAssignmentsCardProps> = ({ list }) => {
    return (
        <Card className="flex w-full h-fit border-small p-6 m-0" shadow="none">
            <CardBody className="flex m-0 p-0 gap-3">
                <h3>Recent Assignments</h3>
                {list.map((item) => (<AssignmentStatusCard key={item.id} name={item.name} completedChallenges={item.completedChallenges} totalChallenges={item.totalChallenges} time={item.time} id={item.id} isActive={item.isActive} dueDate={item.dueDate}/>))}
            </CardBody>
        </Card>
    );
}

export default RecentAssignmentsCard;