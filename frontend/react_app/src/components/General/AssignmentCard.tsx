import { Button, Card, CardBody } from "@heroui/react";
import { getTimeString, parseTimeString } from "../../Functions";
import Icon from "./Icon";
import ProgressWithTextDiv from "./ProgressWithTextDiv";
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
        <Card className="flex w-full min-w-fit h-fit border-small bg-default-50 border-default-300 p-6" radius="md" shadow="none" aria-label={name + " assignment card"}>
            <CardBody className="flex flex-col w-fit h-fit gap-6 p-0">
                <div className={"flex flex-row w-full text-" + timeColor + " gap-1 items-center"}>
                    {isLastDay ? <Icon name={"info"} size={"xs"} color={"danger"}/> : undefined}
                    <p className="font-semibold">{"Due in " + getTimeString(timeLeft[2], timeLeft[3], timeLeft[4], timeLeft[5])}</p>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <h3>{name}</h3>
                    <p>{"Classroom: " + classroomName}</p>
                </div>
                <div className="flex flex-row w-[500px] gap-4 items-center">
                    <ProgressWithTextDiv color={"primary"} ariaLabel={completedChallenges + " of " + totalChallenges + " challenges completed"} 
                        value={completedChallenges/totalChallenges * 100} endingText={completedChallenges + "/" + totalChallenges + " challenges"}/>
                    <Button className="flex w-fit h-fit m-0 px-4 py-2" color="primary" radius="sm">Resume</Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default AssignmentCard;