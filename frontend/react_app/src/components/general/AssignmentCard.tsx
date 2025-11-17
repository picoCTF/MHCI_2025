import { Button, Card, Skeleton } from "@heroui/react";
import { getTimeString, parseTimeString } from "../../Functions";
import ProgressWithTextDiv from "./ProgressWithTextDiv";
import { Icon } from "@iconify/react";
// import { useNavigate } from "react-router-dom";

export interface AssignmentCardProps {
    classroomName: string;
    completedChallenges: number;
    due_date: string;
    id: number;
    name: string;
    totalChallenges: number;
}

//This appears on the Homepage if the user has an assignment due
const AssignmentCard: React.FC<AssignmentCardProps> = ({ name, classroomName, completedChallenges, due_date, totalChallenges }) => {

    /* API_NEEDED - Get the individual assignment info through the AssignmentResponse endpoint */
    
    // The time string from the AssignmentResponse endpoint
    // const timeString = "2025-10-01T12:34:56.123";

    /* Parse the time from the YYYY-MM-DDTHH:mm:ss.sssZ or YYYY-MM-DDTHH:mm:ss.sss±HH:mm format
        The T separates the date and time. The Z and +-HH:mm are for timezone info */
    
    let curDateObj = new Date();

    let curDateTime = parseTimeString(curDateObj.toISOString());

    const dueDateTime = parseTimeString(due_date);

    const timeLeft = [dueDateTime[0]-curDateTime[0], dueDateTime[1]-curDateTime[1], dueDateTime[2]-curDateTime[2], 
        dueDateTime[3]-curDateTime[3], dueDateTime[4]-curDateTime[4], dueDateTime[5]-curDateTime[5], dueDateTime[6]-curDateTime[6]
    ];

    //Check whether the assignment has less than one day left and show the danger color and icon if so
    let isLastDay = false;
    let timeColor = "default-foreground";

    if(timeLeft[2] == 1 && timeLeft[1] == 0 && timeLeft[0] == 0)
    {
        isLastDay = true;
        timeColor = "danger";
    }

    return (
        <Card className="flex flex-col w-full min-w-fit h-fit border-small bg-default-50 border-default-300 p-card-md gap-6" radius="md" shadow="none" aria-label={name + " assignment card"}>
            <Skeleton className={"flex flex-row w-fit text-" + timeColor + " gap-1 items-center rounded-full"}>
                {isLastDay ? <Icon icon={"material-symbols:info-outline"} width={16} height={16} className={"text-danger"}/> : undefined}
                <p className="font-semibold">{"Due in " + getTimeString(timeLeft[2], timeLeft[3], timeLeft[4], timeLeft[5])}</p>
            </Skeleton>
            <div className="flex flex-col w-full gap-2">
                <Skeleton className="flex w-fit rounded-full">
                    <h3>{name}</h3>
                </Skeleton>
                <Skeleton className="flex w-fit rounded-full">
                    <p>{"Classroom: " + classroomName}</p>
                </Skeleton>
            </div>
            <div className="flex flex-row w-[500px] gap-4 items-center">
                <ProgressWithTextDiv color={"primary"} ariaLabel={completedChallenges + " of " + totalChallenges + " challenges completed"} 
                    value={completedChallenges/totalChallenges * 100} endingText={completedChallenges + "/" + totalChallenges + " challenges"}/>
                <Skeleton className="flex rounded-md">
                    <Button className="flex w-fit h-fit m-0 px-4 py-2" color="primary" radius="sm">Resume</Button>
                </Skeleton>
            </div>
        </Card>
    );
}

export default AssignmentCard;