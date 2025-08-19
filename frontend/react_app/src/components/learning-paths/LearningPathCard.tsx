import { Card, CardBody } from "@heroui/react";

import DifficultyChip, { type DifficultyProp } from "../general/DifficultyChip";
import IconCard from "../general/IconCard";
import ProgressWithTextDiv from "../general/ProgressWithTextDiv";
import Icon from "../general/Icon";

export interface LearningPathCardProps {
    description: string;
    difficulty: DifficultyProp;
    hasProgress: boolean;
    id: number;
    link: string;
    name: string;
    numCompletedChallenges: number;
    numSolves: number;
    numTotalChallenges: number;
}

function getBottomContent(hasProgress: boolean, numCompletedChallenges: number, numSolves: number, numTotalChallenges: number) {
    if(hasProgress) {
        return (
            <ProgressWithTextDiv color="primary" ariaLabel={"Amount Completed"} value={numCompletedChallenges/numTotalChallenges*100} endingText={numCompletedChallenges + "/" + numTotalChallenges + " challenges"}/>
        );
    }

    return (
        /* API_NEEDED - Get the number of challenges and number of solves of the learning path.
            The number of solves should be based on the number of users that solved all of the challenges*/
        <div className="flex flex-row items-start w-full gap-4">
            <div className="flex flex-row gap-2 text-center">
                <Icon name={"extension"} size={"xs"} weight={"normal"} color={"default"} colorValue="500"/>
                <div className="flex flex-row gap-1 text-xs text-center">
                    <p className="text-default-500 text-center">{numTotalChallenges + " challenges"}</p>
                </div>
            </div>
            <div className="flex flex-row gap-2 text-center">
                <Icon name={"flag"} size={"xs"} weight={"normal"} color={"default"} colorValue="500"/>
                <div className="flex flex-row gap-1 text-xs text-center">
                    <p className="text-default-500 text-center">{numSolves + " solves"}</p>
                </div>
            </div>
        </div>
    );
}

//Should make this a script or something that's consistent across all card components that can be pressed
// const onLearningPathCardPress = ((link: string) => {
    
// })

const LearningPathCard: React.FC<LearningPathCardProps> = ({ description, difficulty, hasProgress, link, name, numCompletedChallenges, numSolves, numTotalChallenges }) => {

    return (
        /* API_NEEDED - Get the link to the learning path and navigate there on press */
        <Card className="flex w-full min-w-[384px] max-w-[400px] h-[288px] border-small p-6" radius="md" shadow="none" isPressable isHoverable /*onPress={() => onLearningPathCardPress()}*/>
            <CardBody className="flex flex-col w-full h-full justify-between p-0 m-0">
                <div className="flex flex-col w-full h-fit gap-6">
                    <div className="flex flex-row w-full justify-between">
                        <IconCard background={"primary"} icon={"book"}/>
                        <DifficultyChip Enum={difficulty["Enum"]}/>
                    </div>
                    <div className="flex flex-col w-full h-fit items-start gap-2">
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="flex flex-col w-full h-fit items-start">
                    {getBottomContent(hasProgress, numCompletedChallenges, numSolves, numTotalChallenges)}                  
                </div>
            </CardBody>
        </Card>
    );
}

export default LearningPathCard;