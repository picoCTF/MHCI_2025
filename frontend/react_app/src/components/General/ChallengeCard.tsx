import { Card, CardBody, CardHeader, CardFooter, Modal, ModalHeader, ModalBody } from "@heroui/react";
// import { useNavigate } from "react-router-dom";
import DifficultyChip from "./DifficultyChip";
import NumberDisplayChip from "./NumberDisplayChip";
import HintAccordion from "./HintAccordian";
import FlagSubmissionCard from "./FlagSubmissionCard";

interface ChallengeCardProps {
    id: string;
    name: string;
    difficulty: 1 | 2 | 3;
    category: string;
    points: number;
    numSolves: number;

    tags: string[];
    description: string;
    author: string;
    hints: string[];
    flag: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ id, name, author, difficulty, category, points, numSolves /*title, description, difficulty, author, numSolves, hints, flag */}) => {
    return (
        <Card className="w-[400px] h-[288px]">
            <CardHeader className="flex flex-col w-fill h-fit justify-left">
                <h2>{name}</h2>
                <div className="flex flex-row">
                    <DifficultyChip Enum={difficulty}/>
                </div>
            </CardHeader>
            <CardBody>
                <p>Challenge description here</p>
                <div className="flex-row">
                    <p>Author: {author}</p>
                    <NumberDisplayChip number={numSolves} label={"solves"}/>
                </div>
                <HintAccordion/>
            </CardBody>
            <CardFooter>
                <FlagSubmissionCard flag={"ReplaceMe"}/>
            </CardFooter>
        </Card>
    );
}

export default ChallengeCard;