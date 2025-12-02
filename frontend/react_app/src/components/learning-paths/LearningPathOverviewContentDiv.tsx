import { Divider, Chip, Skeleton } from "@heroui/react";
import DifficultyChip, { DifficultyChipSkeleton, type DifficultyProp } from "../general/DifficultyChip";
import { Icon } from "@iconify/react";

interface LearningPathOverviewDivProps {
    description?: string;
    difficulty: DifficultyProp["difficultyLvl"];
    name: string;
    numChallenges: number;
    numSolves: number;
    prereqs: string[];
    skills: string[];
}

const LearningPathOverviewContentDiv: React.FC<LearningPathOverviewDivProps> = ({ description, difficulty, name, numChallenges, numSolves, prereqs, skills }) => {
    return (
        <div className="flex flex-col w-full h-full min-h-fit gap-10">
            <div className="flex flex-col text-start gap-4">
                <div className="flex flex-row gap-3 items-center">
                    {/* API_NEEDED - Get the difficulty by averaging the difficulty of its challenges. Get the title of the learning path */}
                    <h2>{name}</h2>
                    <DifficultyChip difficultyLvl={difficulty}/>
                </div>
                {description ? 
                        <p>{description}</p> : null}
                <div className="flex flex-row gap-4">
                    <div className="flex row gap-2">
                        <Icon icon={"material-symbols:extension-outline"} width={20} height={20} className={"text-default-500"}/>
                        <p className={"flex font-mono text-default-500"}>{numChallenges + " challenges"}</p>
                    </div>
                    <div className="flex row gap-2">
                        <Icon icon={"material-symbols:flag-outline"} width={20} height={20} className={"text-default-500"}/>
                        <p className={"flex font-mono text-default-500"}>{numSolves + " solves"}</p>
                    </div>
                </div>
            </div>
            <Divider/>
            <div className="flex flex-col items-start text-start gap-4">
                <h2>Prerequisites</h2>
                <div className="flex flex-row flex-wrap w-full gap-2">
                    {prereqs.map((prereqName) => 
                        <Chip key={prereqName} variant="bordered">{prereqName}</Chip>
                    )}
                </div>
            </div>
            <div className="flex flex-col items-start text-start gap-4">
                <h2>Key skills learned</h2>
                <div className="flex flex-row flex-wrap w-full gap-2">
                    {skills.map((skillName) => 
                        <Chip key={skillName} variant="bordered">{skillName}</Chip>
                    )}
                </div>
            </div>
        </div>
    );
}

export const LearningPathContentOverviewDivSkeleton: React.FC<{}> = () => {
    return (
        <div className="flex flex-col w-full h-full min-h-fit gap-10">
            <div className="flex flex-col text-start gap-4">
                <div className="flex flex-row gap-3">
                    {/* API_NEEDED - Get the difficulty by averaging the difficulty of its challenges. Get the title of the learning path */}
                    <Skeleton className="flex w-fit rounded-full">
                        <h2>Path Name</h2>
                    </Skeleton>
                    <DifficultyChipSkeleton/>
                </div>
                <Skeleton className="flex w-fit rounded-xl">
                    <p>This is a description of the learning path.</p>
                </Skeleton>
                <div className="flex flex-row gap-4">
                    <div className="flex row gap-2">
                        <Skeleton className="flex w-fit h-fit rounded-full">
                            <Icon icon={"material-symbols:extension-outline"} width={20} height={20} className={"text-default"}/>
                        </Skeleton>
                        <Skeleton className="flex flex-row gap-1 text-xs rounded-full">
                            <p>XX challenges</p>
                        </Skeleton>
                    </div>
                    <div className="flex row gap-2">
                        <Skeleton className="flex w-fit h-fit rounded-full">
                            <Icon icon={"material-symbols:flag-outline"} width={20} height={20} className={"text-default"}/>
                        </Skeleton>
                        <Skeleton className="flex flex-row w-fit gap-1 text-xs rounded-full">
                            <p>XXXX solves</p>
                        </Skeleton>
                    </div>
                </div>
            </div>
            <Divider/>
            <div className="flex flex-col items-start text-start gap-4">
                <Skeleton className="flex w-fit h-fit rounded-full">
                    <h2>Prerequisites</h2>
                </Skeleton>
                <div className="flex flex-row flex-wrap w-full gap-2">
                    {Array.from({length: 5}, (_, index) => 
                        <Skeleton key={index} className="flex rounded-full">
                            <Chip variant="bordered">Prereq X</Chip>
                        </Skeleton>)}
                </div>
            </div>
            <div className="flex flex-col items-start text-start gap-4">
                <Skeleton className="flex w-fit rounded-full">
                    <h2>Key skills learned</h2>
                </Skeleton>
                <div className="flex flex-row flex-wrap w-full gap-2">
                    {Array.from({length: 5}, (_, index) => 
                        <Skeleton key={index} className="flex rounded-full">
                            <Chip variant="bordered">Skill X</Chip>
                        </Skeleton>)}
                </div>
            </div>
        </div>
    );
}

export default LearningPathOverviewContentDiv;