import { Card, CardBody, CardHeader,  } from "@heroui/react";
import LearningPathCard from "../LearningPaths/LearningPathCard";

interface LearningPathsListCardProps {
    paths: string[];
}

const LearningPathsListCard: React.FC<LearningPathsListCardProps> = ({ paths }) => {
    return (
        <Card className="w-[811px] h-fit]">
            <CardHeader className="flex flex-col items-start">
                <h2>Try a new learning path</h2>
            </CardHeader>
            <CardBody className="flex flex-row w-fill h-fit overflow-scroll">
                <LearningPathCard id={paths[0]}/>
                <LearningPathCard id={paths[1]}/>
                <LearningPathCard id={paths[2]}/>
            </CardBody>
        </Card>
    );
}

export default LearningPathsListCard;