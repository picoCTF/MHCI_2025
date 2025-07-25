import { Divider, Chip } from "@heroui/react";
import DifficultyChip from "../General/DifficultyChip";
import NumberDisplayChip from "../General/NumberDisplayChip";

interface LearningPathOverviewDivProps {
}

const LearningPathOverviewDiv: React.FC<LearningPathOverviewDivProps> = ({}) => {
    return (
        <div className="flex flex-col w-[706px] min-w-[706px] h-fit min-h-fit gap-10">
            <div className="flex flex-col text-start gap-4">
                <div className="flex flex-row gap-3">
                    {/* API_NEEDED - Get the difficulty by averaging the difficulty of its challenges. Get the title of the learning path */}
                    <h2>Learning Path Title</h2>
                    <DifficultyChip Enum={1}/>
                </div>
                <p>Learning path description here</p>
                <div className="flex flex-row gap-4">
                    <NumberDisplayChip leadingIcon="ICON" number={123} label={"challenges"}/>
                    <NumberDisplayChip leadingIcon="ICON" number={123} label={"solves"}/>
                </div>
            </div>
            <Divider/>
            <div className="flex flex-col items-start text-start gap-4">
                <h2>Prerequisites</h2>
                <div className="flex flex-row overflow-scroll gap-2">
                    <Chip variant="bordered">Prereq 1</Chip>
                    <Chip variant="bordered">Prereq 2</Chip>
                </div>
            </div>
            <div className="flex flex-col items-start text-start gap-4">
                <h2>Key skills learned</h2>
                <div className="flex flex-row overflow-scroll gap-2">
                    <Chip variant="bordered">Skill 1</Chip>
                    <Chip variant="bordered">Skill 2</Chip>
                </div>
            </div>
        </div>
    );
}

export default LearningPathOverviewDiv;