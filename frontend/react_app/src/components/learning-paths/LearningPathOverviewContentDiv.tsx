import { Divider, Chip, Skeleton } from "@heroui/react";
import DifficultyChip, { type DifficultyProp } from "../general/DifficultyChip";
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
                <Skeleton className="flex flex-row gap-3">
                    {/* API_NEEDED - Get the difficulty by averaging the difficulty of its challenges. Get the title of the learning path */}
                    <h2>{name}</h2>
                    <DifficultyChip difficultyLvl={difficulty}/>
                </Skeleton>
                {description ? <p>{description}</p> : <div/>}
                <div className="flex flex-row gap-4">
                    <div className="flex row gap-2">
                        <Icon icon={"material-symbols:extension-outline"} width={20} height={20} className={"text-default"}/>
                        <Skeleton className="flex row gap-1 text-xs">
                            <p>{numChallenges + " challenges"}</p>
                        </Skeleton>
                    </div>
                    <div className="flex row gap-2">
                        <Icon icon={"material-symbols:flag-outline"} width={20} height={20} className={"text-default"}/>
                        <Skeleton className="flex row gap-1 text-xs">
                            <p>{numSolves + " solves"}</p>
                        </Skeleton>
                    </div>
                </div>
            </div>
            <Divider/>
            <div className="flex flex-col items-start text-start gap-4">
                <Skeleton>
                    <h2>Prerequisites</h2>
                </Skeleton>
                <div className="flex flex-row overflow-scroll gap-2">
                    {prereqs.map((prereqName) => 
                    <Skeleton>
                        <Chip key={prereqName} variant="bordered">{prereqName}</Chip>
                    </Skeleton>)}
                </div>
            </div>
            <div className="flex flex-col items-start text-start gap-4">
                <Skeleton>
                    <h2>Key skills learned</h2>
                </Skeleton>
                <div className="flex flex-row overflow-scroll gap-2">
                    {skills.map((skillName) => 
                    <Skeleton>
                        <Chip key={skillName} variant="bordered">{skillName}</Chip>
                    </Skeleton>)}
                </div>
            </div>
        </div>
    );
}

export default LearningPathOverviewContentDiv;