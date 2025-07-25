import { Card, CardBody, Chip } from "@heroui/react";
import type { DateProps, TimeStringProps } from "../../Interfaces";
import { getTimeString, getDateString } from "../../Functions";

interface StatusProp {
    isActive: boolean;
}

const StatusChip: React.FC<StatusProp> = ({ isActive }) => {
    
    let backgroundColor = "danger-50";
    let textColor = "danger-foreground";
    let text = "Expired";

    if(isActive) {
        backgroundColor = "success-50";
        textColor = "success-foreground";
        text = "Active";
    }
    
    return (
        <Chip>{text}</Chip>
    );
}

export interface AssignmentStatusCardProps {
    name: string;
    completedChallenges: number;
    totalChallenges: number;
    isActive: boolean;
    time: TimeStringProps;
    dueDate: DateProps;
}

// export type AssignmentStatusCardProps<T> = T extends { active: TimeStringProps, expired: string} ? Active : Expired;

const AssignmentStatusCard: React.FC<AssignmentStatusCardProps> = ({ name, completedChallenges, dueDate, totalChallenges, isActive, time }) => {
    
    let timeText = "Due in " + getTimeString(time["days"], time["hours"], time["minutes"], time["seconds"]);
    let dateText = "Due date: " + getDateString(dueDate["day"], dueDate["month"], dueDate["year"]);
    
    return (
        <Card className="w-full h-fit bg-default-100 p-0 m-0" radius="sm" shadow="none">
            <CardBody className="flex flex-row justify-between p-4">
                <div className="flex flex-col w-full h-full gap-2">
                    <div className="flex flex-row gap-4">
                        <p>{name}</p>
                        <StatusChip isActive={isActive}/>
                    </div>
                    <p>{isActive ? timeText : dateText}</p>
                </div>
                <div className="flex flex-col items-end">
                    <p className="w-min text-right">{completedChallenges + "/" + totalChallenges}</p>
                    <p className="w-min text-right">submitted</p>
                </div>
            </CardBody>
        </Card>
    );
}

export default AssignmentStatusCard;