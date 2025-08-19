import { Card, CardBody, CardHeader, CardFooter } from "@heroui/react";
// import { useNavigate } from "react-router-dom";
import DifficultyChip, { type DifficultyProp } from "./DifficultyChip";
import HintAccordion, { type HintAccordionProps } from "./HintAccordion";
import FlagSubmissionCard from "./FlagSubmissionCard";
import Icon from "./Icon";

interface ChallengeDivProps {
    author: string;
    category: "Binary_Exploit" | "Cryptography" | "Forensics" | "General_Skills" | "Reverse_Engineering" | "Web_Exploit";
    description: string;
    difficulty: DifficultyProp;
    flag: string;
    hints: HintAccordionProps;
    name: string;
    numSolves: number;
    tags: string[];
}

const ChallengeDiv: React.FC<ChallengeDivProps> = ({ author, description, difficulty, flag, hints, name, numSolves, tags}) => {
    
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
                        <Icon name={"person"} size={"xs"} weight={"normal"} color={"default"}/>
                        <p className="text-xs">{"Author: " + author}</p>
                    </div>
                    <div className="flex row gap-2">
                        <Icon name={"flag"} size={"xs"} weight={"normal"} color={"default"}/>
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

export default ChallengeDiv;