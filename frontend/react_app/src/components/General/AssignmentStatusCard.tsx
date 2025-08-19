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
        <Chip className={"bg-" + backgroundColor}>
            <p className={"font-medium text-" + textColor}>{text}</p>
        </Chip>
    );
}

export interface AssignmentStatusCardProps {
    name: string;
    completedChallenges: number;
    totalChallenges: number;
    id: number;
    isActive: boolean;
    time: TimeStringProps;
    dueDate: DateProps;
}

const AssignmentStatusCard: React.FC<AssignmentStatusCardProps> = ({ name, completedChallenges, dueDate, totalChallenges, isActive, time }) => {
    
    let timeText = "Due in " + getTimeString(time["days"], time["hours"], time["minutes"], time["seconds"]);
    let dateText = "Due date: " + getDateString(dueDate["day"], dueDate["month"], dueDate["year"]);
    
    return (
        <Card className="w-full h-fit bg-default-100 p-0 m-0" radius="sm" shadow="none">
            <CardBody className="flex flex-row justify-between items-center p-4">
                <div className="flex flex-col w-full h-full gap-2">
                    <div className="flex flex-row gap-4">
                        <h4>{name}</h4>
                        <StatusChip isActive={isActive}/>
                    </div>
                    <p className="text-xs text-default-700">{isActive ? timeText : dateText}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <h4 className="w-min text-right">{completedChallenges + "/" + totalChallenges}</h4>
                    <p className="w-min text-xs text-default-700 text-right">submitted</p>
                </div>
            </CardBody>
        </Card>
    );
}

export default AssignmentStatusCard;