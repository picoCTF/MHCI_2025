import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";

import DifficultyChip from "./DifficultyChip";
import NumChallenges from "./NumChallenges";
// import NumSolves from "./NumSolves";

interface LearningPathCardProps {
    title: string;
    difficulty: "Easy" | "Medium" | "Hard";
    description: string;
    numChallenges: number;
    numSolves: number;
}

const LearningPathCard: React.FC<LearningPathCardProps> = ({ title, difficulty, description, numChallenges, numSolves }) => {

    return (
        <Card className="w-fit h-fit">
            <CardHeader className="justify-between">
                <h2>{title}</h2>
                <DifficultyChip difficulty={difficulty}/>
            </CardHeader>
            <CardBody>
                {description}
            </CardBody>
            <CardFooter className="justify-between">
                <NumChallenges numChallenges={numChallenges}/>
                {/* <NumSolves/> */}
            </CardFooter>
        </Card>
    );
}

export default LearningPathCard;