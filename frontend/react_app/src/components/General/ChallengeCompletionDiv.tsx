import { semanticColors } from "@heroui/react";

export interface ChallengeCompletionDivProps {
    numEasyChallenges: number;
    numMediumChallenges: number;
    numHardChallenges: number;
    totalNumChallenges: number;
    showAdditionalInfo: boolean;
}

const ChallengeCompletionDiv: React.FC<ChallengeCompletionDivProps> = ({ numEasyChallenges, numMediumChallenges, numHardChallenges, totalNumChallenges, showAdditionalInfo }) => {

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

    function getInfoWidthAndHeight() {
        if(showAdditionalInfo)
        {
            return "w-full h-fit";
        }
        return "w-[0px] h-[0px]"
    }

    return (
        <div className="flex flex-row w-full min-w-full">
            <div className={"flex flex-col justify-start items-start w-[" + (numEasyChallenges / totalNumChallenges * 100) + "%] h-fit"}>
                <div className="w-full min-w-full bg-success-500" color={semanticColors.light.success[500]}/>
                <div className={getInfoWidthAndHeight()}>
                    <p>{numEasyChallenges}</p>
                    <div className={"w-[" + getUnderlineWidth(numEasyChallenges) + "] h-[5px] radius-full"} color={semanticColors.light.success[500]}/>
                    <p>Easy</p>
                </div>
            </div>
            <div className={"flex flex-col justify-start items-start w-[" + (numMediumChallenges / totalNumChallenges * 100) + "%] h-fit"}>
                <div className="w-full min-w-full bg-warning-500" color={semanticColors.light.warning[500]}/>
                <div className={getInfoWidthAndHeight()}>
                    <p>{numMediumChallenges}</p>
                    <div className={"w-[" + getUnderlineWidth(numMediumChallenges) + "] h-[5px] radius-full"} color={semanticColors.light.success[500]}/>
                    <p>Medium</p>
                </div>
            </div>
            <div className={"flex flex-col justify-start items-start w-[" + (numHardChallenges / totalNumChallenges * 100) + "%] h-fit"}>
                <div className="w-full min-w-full bg-danger-500" color={semanticColors.light.danger[500]}/>
                <div className={getInfoWidthAndHeight()}>
                    <p>{numHardChallenges}</p>
                    <div className={"w-[" + getUnderlineWidth(numHardChallenges) + "] h-[5px] radius-full"} color={semanticColors.light.success[500]}/>
                    <p>Hard</p>
                </div>
            </div>
        </div>
    );
}

export default ChallengeCompletionDiv;