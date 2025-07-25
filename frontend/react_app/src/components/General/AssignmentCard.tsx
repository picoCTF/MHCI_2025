import { Card, CardBody, Button } from "@heroui/react";
import ProgressWithTextDiv from "./ProgressWithTextDiv";
import { getTimeString } from "../../Functions";
import type { TimeStringProps } from "../../Interfaces";
// import { useNavigate } from "react-router-dom";

export interface AssignmentCardProps {
    name: string;
    classroomName: string;
    completedChallenges: number;
    totalChallenges: number;
    time: TimeStringProps;
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({ name, classroomName, completedChallenges, totalChallenges, time }) => {

    let isLastDay = false;
    let timeColor = "default-foreground";

    if(time["days"] < 1)
    {
        isLastDay = true;
        timeColor = "danger";
    }

    return (
        <Card className="flex w-[362px] min-w-[362px] h-[220px] min-h-[220px] border-small p-6" radius="md" shadow="none">
            <CardBody className="flex flex-col gap-6 p-0">
                <div className={"flex flex-row text-" + timeColor + " text-small gap-1"}>
                    {isLastDay ? <span className="font-icon text-icon-xs">info</span> : undefined}
                    <p>{"Due in " + getTimeString(time["days"], time["hours"], time["minutes"], time["seconds"])}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>{name}</p>
                    <p>{"Classroom: " + classroomName}</p>
                </div>
                <div className="flex flex-row w-full gap-4 place-center">
                    <ProgressWithTextDiv color={"primary"} ariaLabel={completedChallenges + " of " + totalChallenges + " challenges completed"} value={completedChallenges/totalChallenges * 100} endingText={completedChallenges + "/" + totalChallenges + " challenges"}/>
                    <Button className="flex w-fit h-fit m-0 px-4 py-2" color="primary" radius="sm">Resume</Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default AssignmentCard;