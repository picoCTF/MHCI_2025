import { Card, CardHeader, CardBody, CardFooter, Tab, Tabs } from "@heroui/react";
import ActivitySummaryCard from "./Activity/ActivitySummaryCard";

interface ActivityProfileCardProps {}

const ActivityProfileCard: React.FC<ActivityProfileCardProps> = ({}) => {

    // API_NEEDED - Get the user's total number of solves and current streak length
    let numSolves = 1;
    let streakLength = 2;

    let solveText = "Solve";
    if (numSolves != 1) {
        solveText = "Solves";
    }

    let streakText = "Day";
    if (streakLength != 1){
        streakText = "Days";
    }

    return (
        <Card className="flex w-[825px] min-w-[825px] max-w-[825px] h-fit min-h-fit max-h-fit">
            <CardHeader className="flex flex-row w-full h-fit items-start justify-between">
                <h2>Activity</h2>
                <div className="flex flex-row w-fit h-fit text-left">
                    <div>
                        <h2>{numSolves}</h2>
                        <p>{solveText}</p>
                    </div>
                    <div className="flex flex-row w-fit h-fit">
                        <p>FIREICON</p>
                        <div>
                            <h2>{streakLength}</h2>
                            <p>{streakText}</p>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="flex flex-col items-center text-center">
                <Tabs>
                    <Tab key={"week"} title="Week">
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <ActivitySummaryCard/>
                        </div>
                    </Tab>
                    <Tab key={"month"} title="Month">
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <ActivitySummaryCard/>
                        </div>
                    </Tab>
                    <Tab key={"lifetime"} title="Lifetime">
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <ActivitySummaryCard/>
                        </div>
                    </Tab>
                </Tabs>
            </CardBody>
        </Card>
    );
}

export default ActivityProfileCard;