import { Card, CardHeader, CardBody } from "@heroui/react";

import ChallengeCompletionDiv from "../general/ChallengeCompletionDiv";

export interface ChallengeCompletionProfileCardProps {
    numEasyChallenges: number;
    numMediumChallenges: number;
    numHardChallenges: number;
    totalNumChallenges: number;
}

// Shows the number of challenges the user has completed
const ChallengeCompletionProfileCard: React.FC<ChallengeCompletionProfileCardProps> = ({ numEasyChallenges, numMediumChallenges, numHardChallenges, totalNumChallenges }) => {

    return (
        <Card className="flex w-[825px] min-w-[825px] max-w-[825px] h-fit min-h-fit max-h-fit">
            <CardHeader className="flex flex-row w-full h-fit items-start justify-between">
                <h2>Challenge Completion</h2>
                <div className="flex flex-col w-fit text-end">
                    <p>Total</p>
                    <p>{totalNumChallenges}</p>
                </div>
            </CardHeader>
            <CardBody className="flex flex-row w-full h-fit">
                <ChallengeCompletionDiv numEasyChallenges={numEasyChallenges} numMediumChallenges={numMediumChallenges} numHardChallenges={numHardChallenges} totalNumChallenges={totalNumChallenges} showAdditionalInfo={true}/>
            </CardBody>
        </Card>
    );
}

export default ChallengeCompletionProfileCard;