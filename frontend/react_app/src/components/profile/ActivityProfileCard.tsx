import { Card, CardBody, semanticColors, Tab, Tabs } from "@heroui/react";
// import ActivitySummaryCard from "./activity/ActivitySummaryCard";
import { ResponsiveCalendar, ResponsiveTimeRange, type CalendarData, } from "@nivo/calendar";
import { Icon } from "@iconify/react";

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
                value: 10
            }
        ]
    }

    let monthData: CalendarData = {
        from: "2025-10-01",
        to: "2025-10-30",
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
                value: 10
            }
        ]
    }

    let weekData: CalendarData = {
        from: "2025-10-05",
        to: "2025-10-12",
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
                value: 10
            }
        ]
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
                            <div className="flex flex-col gap-4 w-full h-fit">
                                <div className="flex flex-col place-center" style={{width: "400px", height: "150px"}}>
                                    <ResponsiveTimeRange 
                                        from={weekData.from} 
                                        to={weekData.to} 
                                        data={weekData.data}
                                        emptyColor={emptyElementColor}
                                        colors={[firstElementColor, secondElementColor, thirdElementColor, fourthElementColor]}
                                        margin={{ top: 25, bottom: 20 }}
                                        dayBorderWidth={2}
                                        dayBorderColor={borderColor}
                                        weekdayTicks={[0, 1, 2, 3, 4, 5, 6]}
                                        weekdayLegendOffset={-40}
                                        weekdays={["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]}
                                        dayRadius={5}
                                        daySpacing={8}
                                        direction="vertical"
                                        legends={[
                                            {
                                                anchor: 'bottom',
                                                direction: 'row',
                                                itemCount: 4,
                                                itemWidth: 42,
                                                itemHeight: 36,
                                                itemsSpacing: 10,
                                                itemDirection: 'right-to-left',
                                                translateY: (-30),
                                                symbolSize: 20,
                                                symbolShape: "square" //Could try making this a custom shape with rounded edges
                                            }
                                        ]}
                                    />
                                </div>
                                {/* <ActivitySummaryCard summary={"AI summary of the week"}/> */}
                            </div>
                        </Tab>
                        <Tab key={"month"} title="Month">
                            <div className="flex flex-col gap-4 w-full h-fit">
                                <div className="flex flex-col place-center" style={{width: "400px", height: "370px"}}>
                                    <ResponsiveTimeRange 
                                        from={monthData.from} 
                                        to={monthData.to} 
                                        data={monthData.data}
                                        emptyColor={emptyElementColor}
                                        colors={[firstElementColor, secondElementColor, thirdElementColor, fourthElementColor]}
                                        margin={{ top: 25, bottom: 20 }}
                                        dayBorderWidth={2}
                                        dayBorderColor={borderColor}
                                        weekdayTicks={[0, 1, 2, 3, 4, 5, 6]}
                                        weekdayLegendOffset={10}
                                        weekdays={["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]}
                                        dayRadius={5}
                                        daySpacing={8}
                                        direction="vertical"
                                        legends={[
                                            {
                                                anchor: 'bottom',
                                                direction: 'row',
                                                itemCount: 4,
                                                itemWidth: 42,
                                                itemHeight: 36,
                                                itemsSpacing: 14,
                                                itemDirection: 'right-to-left',
                                                translateY: (-20),
                                                symbolSize: 20,
                                                symbolShape: "square" //Could try making this a custom shape with rounded edges
                                            }
                                        ]}
                                    />
                                </div>
                                {/* <ActivitySummaryCard summary={"AI summary of the month"}/> */}
                            </div>
                        </Tab>
                        {/* FIX_ME - Need to make the calendar adjust to fill the width and height of ots parent */}
                        <Tab className="flex flex-col w-full h-fit" key={"lifetime"} title="Lifetime">
                            <div className="flex flex-col gap-4 w-full h-fit">
                                <div className="flex flex-col" style={{width: "700px", height: "150px"}}>
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
                                                anchor: 'bottom',
                                                direction: 'row',
                                                itemCount: 4,
                                                itemWidth: 42,
                                                itemHeight: 36,
                                                itemsSpacing: 14,
                                                itemDirection: 'right-to-left',
                                                translateY: 10,
                                                symbolSize: 20,
                                                symbolShape: "square" //Could try making this a custom shape with rounded edges
                                            }
                                        ]}
                                    />
                                </div>
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