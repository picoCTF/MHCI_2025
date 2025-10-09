import { Button, Card, CardBody, Progress } from "@heroui/react";

import DifficultyChip, { type DifficultyProp } from "./DifficultyChip";
import IconCard from "./IconCard";
import ProgressWithTextDiv from "./ProgressWithTextDiv";
import Icon from "./Icon";

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
    variant: "compact" | "standard" | "expanded";
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

const LearningPathCard: React.FC<LearningPathCardProps> = ({ description, difficulty, hasProgress, link, name, numCompletedChallenges, numSolves, numTotalChallenges, variant }) => {

    //Return a variant if that was specified
    switch (variant) {
        case "compact": {
            return (
                <Card className="flex w-full h-fit border-small border-default-300 p-4 bg-content1-base" radius="md" shadow="none" isPressable isHoverable /*onPress={() => onLearningPathCardPress()}*/>
                    <CardBody className="flex flex-col w-full h-fit gap-4 p-0 m-0">
                        <div className="flex flex-row w-full h-fit justify-between items-center">
                            <div className="flex flex-row w-fit gap-4 items-center">
                                <IconCard background={"primary"} icon={"book"} size={"lg"}/>
                                <h3>{name}</h3>
                            </div>
                            <p className="font-mono text-md text-default-500"><b>{numCompletedChallenges}</b>{"/" + numTotalChallenges}</p>
                        </div>
                        <Progress className="flex w-full self-center" size="md" color={"primary"} aria-label={"Learning Path Progress"} value={numCompletedChallenges/numTotalChallenges*100}/>
                    </CardBody>
                </Card>
            );
        }
        case "expanded": {
            return (
                <Card className="flex w-full h-fit border-small border-default-300 p-6 bg-content1-base" radius="md" shadow="none">
                    <CardBody className="flex flex-col w-full h-fit gap-6 p-0 m-0">
                        <div className="flex flex-row w-full justify-between">
                            <IconCard background={"primary"} icon={"book"} size={"lg"}/>
                            <DifficultyChip difficultyLvl={difficulty["difficultyLvl"]}/>
                        </div>
                        <div className="flex flex-col w-full h-fit items-start gap-2">
                            <h3>{name}</h3>
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
                        </div>
                        <div className="flex flex-row w-full h-fit items-center gap-6">
                            <ProgressWithTextDiv color="primary" ariaLabel={"Amount Completed"} value={numCompletedChallenges/numTotalChallenges*100} endingText={numCompletedChallenges + "/" + numTotalChallenges + " challenges"}/>
                            <Button variant="solid" color="primary" size="md" radius="sm">Resume</Button>
                        </div>
                    </CardBody>
                </Card>
            );
        }
        default: {
            return (
                /* API_NEEDED - Get the link to the learning path and navigate there on press */
                <Card className="flex w-[400px] max-w-[400px] min-w-[400px] h-[288px] border-small border-default-300 p-6 bg-content1-base" radius="md" shadow="none" isPressable isHoverable /*onPress={() => onLearningPathCardPress()}*/>
                    <CardBody className="flex flex-col w-full h-full justify-between p-0 m-0">
                        <div className="flex flex-col w-full h-fit gap-6">
                            <div className="flex flex-row w-full justify-between">
                                <IconCard background={"primary"} icon={"book"} size={"lg"}/>
                                <DifficultyChip difficultyLvl={difficulty["difficultyLvl"]}/>
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
    }
}

export default LearningPathCard;