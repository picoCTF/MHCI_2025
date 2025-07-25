import { Card, CardBody } from "@heroui/react";
import AssignmentStatusCard, { type AssignmentStatusCardProps } from "./AssignmentStatusCard";

interface RecentAssignmentsCardProps {
    list: AssignmentStatusCardProps[];
}

const RecentAssignmentsCard: React.FC<RecentAssignmentsCardProps> = ({ list }) => {
    return (
        <Card className="flex w-full h-fit border-small p-6 m-0" shadow="none">
            <CardBody className="flex m-0 p-0 gap-3">
                <h2>Recent Assignments</h2>
                {/* <AssignmentStatusCard name={"Assignment Name 1"} completedChallenges={0} totalChallenges={10} status={"Active"} time={{days: 3, hours: 5, minutes: 56, seconds: 37}}/>
                <AssignmentStatusCard name={"Assignment Name 2"} completedChallenges={0} totalChallenges={10} status={"Expired"} time={"Due Date Here"}/> */}
                {list.map((item) => (<AssignmentStatusCard name={item.name} completedChallenges={item.completedChallenges} totalChallenges={item.totalChallenges} time={item.time} isActive={item.isActive} dueDate={item.dueDate}/>))}
            </CardBody>
        </Card>
    );
}

export default RecentAssignmentsCard;