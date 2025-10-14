// import { semanticColors } from "@heroui/react";
import { ResponsiveBar } from "@nivo/bar";

export interface ChallengeCompletionDivProps {
    numEasyChallenges: number;
    numMediumChallenges: number;
    numHardChallenges: number;
    totalNumChallenges: number;
    showAdditionalInfo: boolean;
}

// Shows the amount of challenges a user has completed
const ChallengeCompletionDiv: React.FC<ChallengeCompletionDivProps> = ({ numEasyChallenges, numMediumChallenges, numHardChallenges, totalNumChallenges, showAdditionalInfo }) => {

    // Gets the width of the underline underneath the labels for each set of challenges
    function getUnderlineWidth(numChallenges: number) {

        if(numChallenges >= 1000)
        {
            return "4rem";
        }
        else if(numChallenges >= 100)
        {
            return "3rem";
        }
        else if(numChallenges >= 10)
        {
            return "2rem";
        }
        else
        {
            return "1rem";
        }
    }

    // Only show the info if it is requested
    // function getInfoWidthAndHeight() {
    //     if(showAdditionalInfo)
    //     {
    //         return "w-full h-fit";
    //     }
    //     return "w-[0px] h-[0px]"
    // }

    return (
        <ResponsiveBar 
            axisLeft={null}
            data={[
                {
                    "Easy": numEasyChallenges,
                    "Medium": numMediumChallenges,
                    "Hard": numHardChallenges
                }
            ]}
            enableGridY={false}
            legends={[
                {
                    dataFrom: "keys",
                    anchor: "center",
                    direction: "row",
                    itemWidth: 0,
                    itemHeight: 0
                }
            ]}
        />
        // <div className="flex flex-row w-full min-w-full">
        //     <div className={"flex flex-col justify-start items-start w-[" + (numEasyChallenges / totalNumChallenges * 100) + "%] h-fit"}>
        //         <div className="bg-success-500" color={semanticColors.light.success[500]} style={{width:"100%"}}/>
        //         {showAdditionalInfo ? (
        //             <div className= "w-full h-fit">
        //                 <p>{numEasyChallenges}</p>
        //                 <div className={"w-[" + getUnderlineWidth(numEasyChallenges) + "] h-[5px] radius-full"} color={semanticColors.light.success[500]}/>
        //                 <p>Easy</p>
        //             </div>
        //         ) : null}
        //     </div>
        //     <div className={"flex flex-col justify-start items-start w-[" + (numMediumChallenges / totalNumChallenges * 100) + "%] h-fit"}>
        //         <div className="w-full min-w-full bg-warning-500" color={semanticColors.light.warning[500]}/>
        //         {showAdditionalInfo ? (
        //             <div className= "w-full h-fit">
        //                 <p>{numMediumChallenges}</p>
        //                 <div className={"w-[" + getUnderlineWidth(numMediumChallenges) + "] h-[5px] radius-full"} color={semanticColors.light.success[500]}/>
        //                 <p>Medium</p>
        //             </div>
        //         ) : null}
        //     </div>
        //     <div className={"flex flex-col justify-start items-start w-[" + (numHardChallenges / totalNumChallenges * 100) + "%] h-fit"}>
        //         <div className="w-full min-w-full bg-danger-500" color={semanticColors.light.danger[500]}/>
        //         {showAdditionalInfo ? (
        //             <div className= "w-full h-fit">
        //                 <p>{numHardChallenges}</p>
        //                 <div className={"w-[" + getUnderlineWidth(numHardChallenges) + "] h-[5px] radius-full"} color={semanticColors.light.success[500]}/>
        //                 <p>Hard</p>
        //             </div>
        //         ) : null}
        //     </div>
        // </div>
    );
}

export default ChallengeCompletionDiv;