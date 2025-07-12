import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";

import DifficultyChip from "./General/DifficultyChip";
import NumberDisplayDiv from "./NumberDisplayChip";
// import NumSolves from "./NumSolves";

interface LearningPathCardProps {
    title: string;
    description: string;
    numChallenges: number;
    numSolves: number;

    link?: string;
}

function getLearningPathLink(resource: string) {
    switch(resource) {
        case "Community":
        {
            return "/resources/community";
        }
        case "External Resources":
        {
            return "/resources/community";
        }
        case "Learning Guides":
        {
            return "/resources/learning-guides";
        }
        case "Videos":
        {
            return "/resources/videos";
        }
        default:
        {
            return "/resources/primer";
        }
    }
}

//Calculate the difficulty of the Learning Path based on the difficulty of the challenges inside it
function getLearningPathDifficulty() {
    return 1;
}

//Should make this a script or something that's consistent across all card components that can be pressed
const onLearningPathCardPress = ((link: string) => {
    // navigate(link);
})

const LearningPathCard: React.FC<LearningPathCardProps> = ({ title, description, numChallenges, numSolves, link }) => {

    return (
        <Card className="w-fit h-fit" isPressable isHoverable onPress={() => onLearningPathCardPress(link ? link : getLearningPathLink(title))}>
            <CardHeader className="justify-between">
                <h2>{title}</h2>
                <DifficultyChip Enum={/*getLearningPathDifficulty()*/ 1}/>
            </CardHeader>
            <CardBody>
                {description}
            </CardBody>
            <CardFooter className="gap-4">
                <NumberDisplayDiv number={numChallenges} label={"challenges"} leadingIcon={"ICON"}/>
                <NumberDisplayDiv number={numSolves} label={"solves"} leadingIcon={"ICON"}/>
            </CardFooter>
        </Card>
    );
}

export default LearningPathCard;