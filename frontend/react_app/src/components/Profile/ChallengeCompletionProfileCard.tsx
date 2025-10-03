import { Card, CardHeader, CardBody } from "@heroui/react";

import ChallengeCompletionDiv from "../general/ChallengeCompletionDiv";

export interface ChallengeCompletionProfileCardProps {
    numEasyChallenges: number;
    numMediumChallenges: number;
    numHardChallenges: number;
    totalNumChallenges: number;
}

// Shows the number of challenges the user has completed
const ChallengeCompletionProfileCard: React.FC<ChallengeCompletionProfileCardProps> = ({ numEasyChallenges, 
    numMediumChallenges, numHardChallenges, totalNumChallenges }) => {

    return (
        <Card className="flex w-full h-fit min-h-fit max-h-fit bg-content1-base border-small border-default-300 p-10" 
            radius="md" shadow="none">
            <CardHeader className="flex flex-row w-full h-fit items-start justify-between m-0 p-0">
                <h2>Challenge Completion</h2>
                <div className="flex flex-col w-fit text-end">
                    <p className="text-secondary-600 text-4xl font-bold">{totalNumChallenges}</p>
                    <p>Total</p>
                </div>
            </CardHeader>
            <CardBody className="flex flex-row w-full h-fit">
                <ChallengeCompletionDiv numEasyChallenges={numEasyChallenges} numMediumChallenges={numMediumChallenges} 
                    numHardChallenges={numHardChallenges} totalNumChallenges={totalNumChallenges} showAdditionalInfo={true}/>
            </CardBody>
        </Card>
    );
}

export default ChallengeCompletionProfileCard;