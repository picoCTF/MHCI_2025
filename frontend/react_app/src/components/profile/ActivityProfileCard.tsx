import { Card, CardBody, semanticColors, Tab, Tabs } from "@heroui/react";
// import ActivitySummaryCard from "./activity/ActivitySummaryCard";
// import { ResponsiveCalendar, ResponsiveTimeRange, type CalendarData, } from "@nivo/calendar";
import { Icon } from "@iconify/react";
import Heatmap from "../charts/Heatmap";

export interface ActivityProfileCardProps {
    numSolves: number;
    streakLength: number;
}

// FIX_ME - fill this in with the items in the Activity folder
const ActivityProfileCard: React.FC<ActivityProfileCardProps> = ({numSolves, streakLength}) => {

    // let styles = getComputedStyle(document.documentElement);
    // let secondary100 = styles.getPropertyValue("--secondary-100");

    let borderColor = semanticColors.light.content1[50] ? semanticColors.light.content1[50] : "#ffffff";
    let emptyElementColor = semanticColors.light.default[200] ? semanticColors.light.default[200] : "#ffffff";
    let firstElementColor = semanticColors.light.secondary[100] ? semanticColors.light.secondary[100] : "#ffffff";
    let secondElementColor = semanticColors.light.secondary[300] ? semanticColors.light.secondary[300] : "#ffffff";
    let thirdElementColor = semanticColors.light.secondary[500] ? semanticColors.light.secondary[500] : "#ffffff";
    let fourthElementColor = semanticColors.light.secondary[700] ? semanticColors.light.secondary[700] : "#ffffff";

    let solveText = "Solve";
    if (numSolves != 1) {
        solveText = "Solves";
    }

    let streakText = "Day";
    if (streakLength != 1){
        streakText = "Days";
    }

    return (
        <Card className="flex w-full max-w-full h-fit bg-content1-base border-small border-default-300 p-10" radius="md" shadow="none">
            <CardBody className="flex flex-col w-full h-fit p-0 m-0">
                <div className="flex flex-row justify-between">
                    <h2>Activity</h2>
                    <div className="flex flex-row gap-4 w-fit h-fit text-left">
                        <div>
                            <h2>{numSolves}</h2>
                            <p>{solveText}</p>
                        </div>
                        <div className="flex flex-col w-fit h-fit">
                            <div className="flex flex-row w-fit h-fit items-center">
                                <h2>{streakLength}</h2>
                                <Icon icon={"material-symbols:mode-heat-outline"} width={24} height={24} className={"text-primary"}/>
                            </div>
                            <p>{streakText}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full h-fit items-center text-center">
                    <Tabs>
                        <Tab key={"week"} title="Week">
                            <div className="flex flex-col gap-4 w-full h-fit place-center">
                                <Heatmap 
                                    cellStrokeColor={borderColor}
                                    cellBGColors={[emptyElementColor, firstElementColor, secondElementColor, thirdElementColor, fourthElementColor]}
                                    data={
                                        [
                                            {
                                                label1: "a",
                                                label2: "a",
                                                value: 0
                                            }, 
                                            {
                                                label1: "b",
                                                label2: "b",
                                                value: 1
                                            }, 
                                            {
                                                label1: "a",
                                                label2: "b",
                                                value: 2
                                            },
                                            {
                                                label1: "b",
                                                label2: "a",
                                                value: 3
                                            },
                                            {
                                                label1: "a",
                                                label2: "c",
                                                value: 4
                                            },
                                            {
                                                label1: "b",
                                                label2: "c",
                                                value: 5
                                            },
                                            {
                                                label1: "c",
                                                label2: "b",
                                                value: 6
                                            }
                                        ]
                                    } 
                                    tooltipContent={<p>Testing the Tooltip</p>} 
                                    inputWidth={400} 
                                    inputHeight={150}/>
                                {/* <ActivitySummaryCard summary={"AI summary of the week"}/> */}
                            </div>
                        </Tab>
                        {/* FIX_ME - Need to make the calendar adjust to fill the width and height of ots parent */}
                        <Tab className="flex flex-col w-full h-fit" key={"lifetime"} title="Lifetime">
                            <div className="flex flex-col gap-4 w-full h-fit place-items-center">
                                <Heatmap
                                    cellStrokeColor={borderColor}
                                    cellBGColors={[emptyElementColor, firstElementColor, secondElementColor, thirdElementColor, fourthElementColor]} 
                                    data={
                                        [
                                            {
                                                label1: "a",
                                                label2: "a",
                                                value: 0
                                            }, 
                                            {
                                                label1: "b",
                                                label2: "b",
                                                value: 1
                                            }, 
                                            {
                                                label1: "a",
                                                label2: "b",
                                                value: 2
                                            },
                                            {
                                                label1: "b",
                                                label2: "a",
                                                value: 3
                                            },
                                            {
                                                label1: "a",
                                                label2: "c",
                                                value: 4
                                            },
                                            {
                                                label1: "b",
                                                label2: "c",
                                                value: 5
                                            },
                                            {
                                                label1: "c",
                                                label2: "b",
                                                value: 6
                                            }
                                        ]
                                    } 
                                    tooltipContent={<p>Testing the Tooltip</p>} 
                                    inputWidth={700} 
                                    inputHeight={150}/>
                                {/* <ActivitySummaryCard summary={"AI summary of lifetime"}/> */}
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </CardBody>
        </Card>
    );
}

export default ActivityProfileCard;