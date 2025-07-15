import { Card, CardHeader, CardBody, CardFooter, Button, Divider, Chip } from "@heroui/react";
import DifficultyChip from "../General/DifficultyChip";
import NumberDisplayChip from "../General/NumberDisplayChip";

interface LearningPathOverviewCardProps {
}

const LearningPathOverviewCard: React.FC<LearningPathOverviewCardProps> = ({}) => {
    return (
        <Card className="w-[706px] min-w-[706px] h-fit min-h-fit">
            <CardHeader className="flex flex-row">
                {/* API_NEEDED - Get the difficulty by averaging the difficulty of its challenges. Get the title of the learning path */}
                <h2>Learning Path Title</h2>
                <DifficultyChip Enum={1}/>
            </CardHeader>
            <CardBody className="h-fit min-h-fit">
                <p>Learning path description here</p>
                <div className="flex flex-row">
                    <NumberDisplayChip leadingIcon="ICON" number={123} label={"challenges"}/>
                    <NumberDisplayChip leadingIcon="ICON" number={123} label={"solves"}/>
                </div>
                <Divider/>
            </CardBody>
            <CardFooter className="flex flex-col items-start text-start">
                <div>
                    <h2>Prerequisites</h2>
                    <div className="flex flex-row overflow-scroll">
                        <Chip>Prereq 1</Chip>
                        <Chip>Prereq 2</Chip>
                    </div>
                </div>
                <div>
                    <h2>Key Skills</h2>
                    <div className="flex flex-row overflow-scroll">
                        <Chip>Skill 1</Chip>
                        <Chip>Skill 2</Chip>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

export default LearningPathOverviewCard;