import { Card, CardBody, semanticColors, Tab, Tabs } from "@heroui/react";
import ActivitySummaryCard from "./Activity/ActivitySummaryCard";
import Icon from "../general/Icon";
import { ResponsiveCalendar, ResponsiveTimeRange, type CalendarData } from "@nivo/calendar";

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

    let yearData: CalendarData = {
        from: "2025-01-02",
        to: "2026-01-01",
        data: [
            {
                day: "2025-10-13",
                value: 5
            },
            {
                day: "2025-11-13",
                value: 3
            },
            {
                day: "2025-08-01",
                value: 50
            }
        ]
    }

    return (
        <Card className="flex w-full max-w-full h-fit bg-content1-base border-small border-default-300 p-10" radius="md" shadow="none">
            <CardBody className="flex flex-col w-full h-fit p-0 m-0">
                <div className="flex flex-row justify-between">
                    <h2>Activity</h2>
                    <div className="flex flex-row w-fit h-fit text-left">
                        <div>
                            <h2>{numSolves}</h2>
                            <p>{solveText}</p>
                        </div>
                        <div className="flex flex-row w-fit h-fit">
                            <Icon name={"mode_heat"} size={"lg"} weight={"normal"} color={"primary"}/>
                            <div>
                                <h2>{streakLength}</h2>
                                <p>{streakText}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full h-fit items-center text-center">
                    <Tabs>
                        <Tab key={"week"} title="Week">
                            <div className="gap-4">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <ActivitySummaryCard summary={"AI summary of the week"}/>
                            </div>
                        </Tab>
                        <Tab key={"month"} title="Month">
                            <div className="gap-4">
                                <div className="flex flex-col" style={{width: "800px", height: "150px"}}>
                                    <ResponsiveTimeRange 
                                        from={yearData.from} 
                                        to={yearData.to} 
                                        data={yearData.data}
                                        emptyColor={emptyElementColor}
                                        colors={[firstElementColor, secondElementColor, thirdElementColor, fourthElementColor]}
                                        margin={{ left: 20 }}
                                        dayBorderWidth={2}
                                        dayBorderColor={borderColor}
                                        legends={[
                                            {
                                                anchor: 'bottom-right',
                                                direction: 'row',
                                                translateY: 36,
                                                itemCount: 4,
                                                itemWidth: 42,
                                                itemHeight: 36,
                                                itemsSpacing: 14,
                                                itemDirection: 'right-to-left'
                                            }
                                        ]}
                                    />
                                </div>
                                <ActivitySummaryCard summary={"AI summary of the month"}/>
                            </div>
                        </Tab>
                        {/* FIX_ME - Need to make the calendar adjust to fill the width and height of ots parent */}
                        <Tab className="flex flex-col w-full h-fit" key={"lifetime"} title="Lifetime">
                            <div className="flex flex-col gap-4 w-full min-w-fit h-fit">
                                <div className="flex flex-col" style={{width: "800px", height: "150px"}}>
                                    <ResponsiveCalendar 
                                    from={yearData.from} 
                                    to={yearData.to} 
                                    data={yearData.data}
                                    emptyColor={emptyElementColor}
                                    colors={[firstElementColor, secondElementColor, thirdElementColor, fourthElementColor]}
                                    margin={{ left: 20 }}
                                    yearSpacing={40}
                                    monthBorderColor={borderColor}
                                    dayBorderWidth={2}
                                    dayBorderColor={borderColor}
                                    legends={[
                                        {
                                            anchor: 'bottom-right',
                                            direction: 'row',
                                            translateY: 36,
                                            itemCount: 4,
                                            itemWidth: 42,
                                            itemHeight: 36,
                                            itemsSpacing: 14,
                                            itemDirection: 'right-to-left'
                                        }
                                    ]}
                                />
                                </div>
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