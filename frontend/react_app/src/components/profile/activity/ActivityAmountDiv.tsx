interface ActivityAmountDivProps {
    todaysActivity: number;
    size: "sm" | "md" | "lg";

    highestRecordedDailyActivity?: number;
}

const ActivityAmountDiv: React.FC<ActivityAmountDivProps> = ({ todaysActivity, highestRecordedDailyActivity, size }) => {

    let sizePx = "10px";

    switch (size) {
        case "sm": {
            sizePx = "8px";
            break;
        }
        case "md": {
            sizePx = "36px"
            break;
        }
        default: {
            sizePx = "50px"
            break;
        }
    }

    let colorOpacity = todaysActivity / (highestRecordedDailyActivity ? highestRecordedDailyActivity : 1);

    //TODO - possibly change this to use value rather than opacity
    let divColor = "rgba(58, 127, 237, " + colorOpacity + ")";

    if(colorOpacity == 0) 
    {
        divColor = "#EBEDF0";
    }

    return (
        <div className={"w-[" + sizePx + "] h-[" + sizePx + "] bg-[" + divColor + "]"}/>
    );
}

export default ActivityAmountDiv;