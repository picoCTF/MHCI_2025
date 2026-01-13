import { Button, Card, CardBody, Progress, Skeleton } from "@heroui/react";

import DifficultyChip, { DifficultyChipSkeleton, type DifficultyProp } from "./DifficultyChip";
import IconCard, { IconCardSkeleton } from "./IconCard";
import ProgressWithTextDiv, { ProgressWithTextDivSkeleton } from "./ProgressWithTextDiv";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

export interface LearningPathCardProps {
    completed: boolean;
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
                <Icon icon={"material-symbols:extension-outline"} width={16} height={16} className={"text-default-500"}/>
                <p className="text-default-500 text-center">{numTotalChallenges + " challenges"}</p>
            </div>
            <div className="flex flex-row gap-2 text-center">
                <Icon icon={"material-symbols:flag-outline"} width={16} height={16} className={"text-default-500"}/>
                <p className="text-default-500 text-center">{numSolves + " solves"}</p>
            </div>
        </div>
    );
}

const LearningPathCard: React.FC<LearningPathCardProps> = ({ completed, description, difficulty, hasProgress, id, name, numCompletedChallenges, numSolves, numTotalChallenges, variant }) => {
    
    const navigate = useNavigate();
    
    //Return a variant if that was specified
    switch (variant) {
        case "compact": {
            return (
                <Card className="flex flex-col w-full h-fit border-small border-default-300 p-4 gap-4 bg-content1-base" radius="md" shadow="none" isPressable isHoverable onPress={() => navigate("/practice/learning-paths/" + id)}>
                    <div className="flex flex-row w-full h-fit gap-2 justify-between items-center">
                        <div className="flex flex-row w-fit gap-4 items-center">
                            <IconCard background={"primary"} icon={"material-symbols:book-outline"} size={"lg"}/>
                            <h3>{name}</h3>
                        </div>
                        <p className="font-mono text-md text-default-500"><b>{numCompletedChallenges}</b>{"/" + numTotalChallenges}</p>
                    </div>
                    <Progress className="flex w-full self-center" size="md" color={"primary"} aria-label={"Learning Path Progress"} value={numCompletedChallenges/numTotalChallenges*100}/>
                </Card>
            );
        }
        case "expanded": {
            return (
                <Card className="flex flex-col w-full h-fit border-small border-default-300 p-6 gap-6 bg-content1-base" radius="md" shadow="none">
                    <div className="flex flex-row w-full justify-between">
                        <IconCard background={"primary"} icon={"material-symbols:book-outline"} size={"lg"}/>
                        <DifficultyChip difficultyLvl={difficulty["difficultyLvl"]}/>
                    </div>
                    <div className="flex flex-col w-full h-fit items-start gap-2">
                        <h3>{name}</h3>
                        <div className="flex flex-row items-start w-full gap-4">
                            <div className="flex flex-row gap-2 text-center items-center">
                                <Icon icon={"material-symbols:extension-outline"} width={16} height={16} className="text-default-500"/>
                                <p className="text-default-500 text-center">{numTotalChallenges + " challenges"}</p>
                            </div>
                            <div className="flex flex-row gap-2 text-center items-center">
                                <Icon icon={"material-symbols:flag-outline"} width={16} height={16} className="text-default-500"/>
                                <p className="text-default-500 text-center">{numSolves + " solves"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-full h-fit items-center gap-6">
                        <ProgressWithTextDiv color="primary" ariaLabel={"Amount Completed"} value={numCompletedChallenges/numTotalChallenges*100} endingText={numCompletedChallenges + "/" + numTotalChallenges + " challenges"}/>
                        {hasProgress && !completed ? <Button variant="solid" color="primary" size="md" radius="sm">Resume</Button> : null}
                    </div>
                </Card>
            );
        }
        default: {
            return (
                <Card className="flex w-[400px] max-w-[400px] min-w-[400px] h-[288px] border-small border-default-300 p-6 bg-content1-base" radius="md" shadow="none" isPressable isHoverable onPress={() => navigate("/practice/learning-paths/" + id)}>
                    <CardBody className="flex flex-col w-full h-full justify-between p-0 m-0">
                        <div className="flex flex-col w-full h-fit gap-6">
                            <div className="flex flex-row w-full justify-between">
                                <IconCard background={"primary"} icon={"material-symbols:book-outline"} size={"lg"}/>
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

interface LearningPathCardSkeletonProps {
    variant: "compact" | "standard" | "expanded";
}

export const LearningPathCardSkeleton: React.FC<LearningPathCardSkeletonProps> = ({ variant }) => {
    switch (variant) {
        case "compact": {
            return (
                <Card className="flex flex-col w-full h-fit border-small border-default-300 p-4 gap-4 bg-content1-base" radius="md" shadow="none" isHoverable>
                    <div className="flex flex-row w-full h-fit gap-2 justify-between items-center">
                        <div className="flex flex-row w-fit gap-4 items-center">
                            <IconCard background={"primary"} icon={"material-symbols:book-outline"} size={"lg"}/>
                            <Skeleton className="flex w-fit rounded-full">
                                <h3>Name Here</h3>
                            </Skeleton>
                        </div>
                        <Skeleton className="flex w-fit rounded-full">
                            <p className="font-mono text-md text-default-500"><b>XXXX</b>/XXXX</p>
                        </Skeleton>
                    </div>
                    <Progress className="flex w-full self-center" size="md" color={"primary"} aria-label={"Learning Path Progress"} value={0}/>
                </Card>
            );
        }
        case "expanded": {
            return (
                <Card className="flex flex-col w-full h-fit border-small border-default-300 p-6 gap-6 bg-content1-base" radius="md" shadow="none">
                    <div className="flex flex-row w-full justify-between">
                        <IconCard background={"primary"} icon={"material-symbols:book-outline"} size={"lg"}/>
                        <DifficultyChipSkeleton/>
                    </div>
                    <div className="flex flex-col w-full h-fit items-start gap-2">
                        <Skeleton><h3>Name Here</h3></Skeleton>
                        <div className="flex flex-row items-start w-full gap-4">
                            <div className="flex flex-row gap-2 text-center items-center">
                                <Skeleton className="flex rounded-full w-4 h-4"/>
                                <Skeleton className="rounded-full">
                                    <p className="text-default-500 text-center">XXXX challenges</p>
                                </Skeleton>
                            </div>
                            <div className="flex flex-row gap-2 text-center items-center">
                                <Skeleton className="flex rounded-full w-4 h-4"/>
                                <Skeleton className="flex rounded-full">
                                    <p className="text-default-500 text-center">XXXX solves</p>
                                </Skeleton>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-full h-fit items-center gap-6">
                        <ProgressWithTextDivSkeleton/>
                        <Skeleton className="rounded-md">
                            <Button variant="solid" color="primary" size="md" radius="sm">Resume</Button>
                        </Skeleton>
                    </div>
                </Card>
            );
        }
        default: {
            return (
                <Card className="flex w-[400px] max-w-[400px] min-w-[400px] h-[288px] border-small border-default-300 p-6 bg-content1-base" radius="md" shadow="none" isHoverable>
                    <CardBody className="flex flex-col w-full h-full justify-between p-0 m-0">
                        <div className="flex flex-col w-full h-fit gap-6">
                            <div className="flex flex-row w-full justify-between">
                                <IconCardSkeleton/>
                                <DifficultyChipSkeleton/>
                            </div>
                            <div className="flex flex-col w-full h-fit items-start gap-2">
                                <Skeleton className="flex rounded-full">
                                    <h3>Name Here</h3>
                                </Skeleton>
                                <Skeleton className="flex rounded-full">
                                    <p>This is a learning path description.</p>
                                </Skeleton>
                            </div>
                        </div>
                        <div className="flex flex-col w-full h-fit items-start">
                            <ProgressWithTextDivSkeleton/>
                        </div>
                    </CardBody>
                </Card>
            );
        }
    }
}

export default LearningPathCard;