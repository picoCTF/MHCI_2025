import { Divider, Chip } from "@heroui/react";
import DifficultyChip, { type DifficultyProp } from "../general/DifficultyChip";
import Icon from "../general/Icon";

interface LearningPathOverviewDivProps {
    description?: string;
    difficulty: DifficultyProp["difficultyLvl"];
    name: string;
    numChallenges: number;
    numSolves: number;
    prereqs: string[];
    skills: string[];
}

const LearningPathOverviewDiv: React.FC<LearningPathOverviewDivProps> = ({ description, difficulty, name, numChallenges, numSolves, prereqs, skills }) => {
    return (
        <div className="flex flex-col w-full h-full min-h-fit gap-10">
            <div className="flex flex-col text-start gap-4">
                <div className="flex flex-row gap-3">
                    {/* API_NEEDED - Get the difficulty by averaging the difficulty of its challenges. Get the title of the learning path */}
                    <h2>{name}</h2>
                    <DifficultyChip difficultyLvl={difficulty}/>
                </div>
                {description ? <p>{description}</p> : <div/>}
                <div className="flex flex-row gap-4">
                    <div className="flex row gap-2">
                        <Icon name={"extension"} size={"sm"} weight={"normal"} color={"default"}/>
                        <div className="flex row gap-1 text-xs">
                            <p>{numChallenges + " challenges"}</p>
                        </div>
                    </div>
                    <div className="flex row gap-2">
                        <Icon name={"flag"} size={"sm"} weight={"normal"} color={"default"}/>
                        <div className="flex row gap-1 text-xs">
                            <p>{numSolves + " solves"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Divider/>
            <div className="flex flex-col items-start text-start gap-4">
                <h2>Prerequisites</h2>
                <div className="flex flex-row overflow-scroll gap-2">
                    {prereqs.map((prereqName) => <Chip variant="bordered">{prereqName}</Chip>)}
                </div>
            </div>
            <div className="flex flex-col items-start text-start gap-4">
                <h2>Key skills learned</h2>
                <div className="flex flex-row overflow-scroll gap-2">
                    {skills.map((skillName) => <Chip variant="bordered">{skillName}</Chip>)}
                </div>
            </div>
        </div>
    );
}

export default LearningPathOverviewDiv;