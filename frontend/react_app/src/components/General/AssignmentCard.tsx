import { Card, CardBody, Button } from "@heroui/react";
import ProgressWithTextDiv from "./ProgressWithTextDiv";
import { getTimeString } from "../../Functions";
import type { TimeStringProps } from "../../Interfaces";
import Icon from "./Icon";
// import { useNavigate } from "react-router-dom";

export interface AssignmentCardProps {
    classroomName: string;
    completedChallenges: number;
    id: number;
    name: string;
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
        <Card className="flex w-fit min-w-fit h-fit border-small p-6" radius="md" shadow="none">
            <CardBody className="flex flex-col w-fit h-fit gap-6 p-0">
                <div className={"flex flex-row w-full text-" + timeColor + " gap-1 items-center"}>
                    {isLastDay ? <Icon name={"info"} size={"xs"} color={"danger"}/> : undefined}
                    {/* {isLastDay ? <span className="font-icon text-icon-xs">info</span> : undefined} */}
                    <p className="font-semibold">{"Due in " + getTimeString(time["days"], time["hours"], time["minutes"], time["seconds"])}</p>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <h3>{name}</h3>
                    <p>{"Classroom: " + classroomName}</p>
                </div>
                <div className="flex flex-row w-[500px] gap-4 items-center">
                    <ProgressWithTextDiv color={"primary"} ariaLabel={completedChallenges + " of " + totalChallenges + " challenges completed"} value={completedChallenges/totalChallenges * 100} endingText={completedChallenges + "/" + totalChallenges + " challenges"}/>
                    <Button className="flex w-fit h-fit m-0 px-4 py-2" color="primary" radius="sm">Resume</Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default AssignmentCard;