import { Card, CardHeader, CardBody, CardFooter, Tab, Tabs } from "@heroui/react";
import ActivitySummaryCard from "./Activity/ActivitySummaryCard";
import Icon from "../General/Icon";

interface ActivityProfileCardProps {
    numSolves: number;
    streakLength: number;
}

const ActivityProfileCard: React.FC<ActivityProfileCardProps> = ({numSolves, streakLength}) => {

    let solveText = "Solve";
    if (numSolves != 1) {
        solveText = "Solves";
    }

    let streakText = "Day";
    if (streakLength != 1){
        streakText = "Days";
    }

    return (
        <Card className="flex w-[825px] h-fit border-small p-10" radius="md" shadow="none">
            <CardBody className="flex flex-col p-0 m-0">
                <div className="flex flex-row justify-between">
                    <h2>Activity</h2>
                    <div className="flex flex-row w-fit h-fit text-left">
                        <div>
                            <h2>{numSolves}</h2>
                            <p>{solveText}</p>
                        </div>
                        <div className="flex flex-row w-fit h-fit">
                            <Icon name={"mode_heat"} size={"48"} weight={"normal"} color={"primary"}/>
                            <div>
                                <h2>{streakLength}</h2>
                                <p>{streakText}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Tabs>
                        <Tab key={"week"} title="Week">
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <ActivitySummaryCard summary={"AI summary of the week"}/>
                            </div>
                        </Tab>
                        <Tab key={"month"} title="Month">
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <ActivitySummaryCard summary={"AI summary of the month"}/>
                            </div>
                        </Tab>
                        <Tab key={"lifetime"} title="Lifetime">
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <ActivitySummaryCard summary={"AI summary of lifetime"}/>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </CardBody>
        </Card>
    );
}

export default ActivityProfileCard;