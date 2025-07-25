import { Card, CardBody, CardHeader, CardFooter, Modal, ModalHeader, ModalBody } from "@heroui/react";
// import { useNavigate } from "react-router-dom";
import DifficultyChip, { type DifficultyChipProps } from "./DifficultyChip";
import HintAccordion, { type HintAccordionProps } from "./HintAccordian";
import FlagSubmissionCard from "./FlagSubmissionCard";
import Icon from "./Icon";

interface ChallengeCardProps {
    author: string;
    category: ;
    description: string;
    difficulty: DifficultyChipProps;
    flag: string;
    hints: HintAccordionProps;
    name: string;
    numSolves: number;
    tags: string[];
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ author, description, difficulty, flag, hints, name, numSolves, tags}) => {
    
    return (
        <Card className="w-[400px] h-[288px]">
            <CardHeader className="flex flex-col w-full h-fit justify-left">
                <h2>{name}</h2>
                <div className="flex flex-row">
                    <DifficultyChip Enum={difficulty["Enum"]}/>
                </div>
            </CardHeader>
            <CardBody>
                <p>{description}</p>
                <div className="flex-row">
                    <p>{"Author: " + author}</p>
                    <div className="flex row gap-2">
                        <Icon name={"person"} size={"20"} weight={"normal"} color={"default"}/>
                        <p className="text-xs">{"Author: " + author}</p>
                    </div>
                    <div className="flex row gap-2">
                        <Icon name={"flag"} size={"20"} weight={"normal"} color={"default"}/>
                        <div className="flex row gap-1 text-xs">
                            <p>{numSolves + " solves"}</p>
                        </div>
                    </div>
                </div>
                <HintAccordion list={hints["list"]}/>
            </CardBody>
            <CardFooter>
                <FlagSubmissionCard flag={flag}/>
            </CardFooter>
        </Card>
    );
}

export default ChallengeCard;