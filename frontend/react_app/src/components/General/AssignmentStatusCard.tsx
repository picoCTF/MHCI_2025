import { Card, CardBody, Chip } from "@heroui/react";
import { getTimeString, getDateString, parseTimeString } from "../../Functions";

interface StatusProp {
    isActive: boolean;
}

//Shows the status of an assignment (Active or Expired)
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
    isActive: StatusProp["isActive"];
}

//NEED_ICON
const AssignmentStatusCard: React.FC<AssignmentStatusCardProps> = ({ name, completedChallenges, totalChallenges, isActive }) => {
    
    // API_NEEDED - Get the Get the individual assignment info through the AssignmentResponse endpoint

    // The time string from the AssignmentResponse endpoint
    const timeString = "2025-10-01T12:34:56.123";
    
    /* Parse the time from the YYYY-MM-DDTHH:mm:ss.sssZ or YYYY-MM-DDTHH:mm:ss.sss±HH:mm format
        The T separates the date and time. The Z and +-HH:mm are for timezone info */
        
    let time = parseTimeString(timeString);

    //Get the time left for and due date of the assignment 
    let timeText = "Due in " + getTimeString(time[2], time[3], time[4], time[5]);
    let dateText = "Due date: " + getDateString(time[2], time[1], time[0]);
    
    return (
        <Card className="w-full h-fit bg-content2-base p-0 m-0" radius="sm" shadow="none">
            <CardBody className="flex flex-row h-fit justify-between items-center p-4">
                <div className="flex flex-col w-full h-full gap-2">
                    <div className="flex flex-row gap-4">
                        <h3 className="font-sans font-semibold">{name}</h3>
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