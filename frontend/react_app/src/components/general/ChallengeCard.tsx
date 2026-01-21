import { Card, CardBody, CardHeader, CardFooter } from "@heroui/react";
// import { useNavigate } from "react-router-dom";
import DifficultyChip, { type DifficultyProp } from "./DifficultyChip";
import HintAccordion, { type HintAccordionProps } from "./HintAccordion";
// import FlagSubmissionCard from "./FlagSubmissionCard";
import { Icon } from "@iconify/react";
import type { Tag } from "../../api_interfaces/2023_generated_interfaces/tag";
import type { Category } from "../../api_interfaces/2023_generated_interfaces/category";

export interface ChallengeCardProps {
    author: string;
    category: Category;
    description: string;
    difficulty: DifficultyProp;
    flag: string;
    hints: HintAccordionProps["list"];
    name: string;
    numSolves: number;
    tags: Tag[];
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ author, description, difficulty, /*flag, */hints, name, numSolves/*, tags*/}) => {
    
    return (
        <Card className="w-[400px] h-[288px]">
            {/* FIX_ME - Either update this componenet to use ChallengeDiv or remove it */}
            <CardHeader className="flex flex-col w-full h-fit justify-left">
                <h2>{name}</h2>
                <div className="flex flex-row">
                    <DifficultyChip difficultyLvl={difficulty["difficultyLvl"]}/>
                </div>
            </CardHeader>
            <CardBody>
                <p>{description}</p>
                <div className="flex-row">
                    <p>{"Author: " + author}</p>
                    <div className="flex row gap-2">
                        <Icon icon={"material-symbols:person-outline"} width={16} height={16} className={"text-default"}/>
                        <p className="text-xs">{"Author: " + author}</p>
                    </div>
                    <div className="flex row gap-2">
                        <Icon icon={"material-symbols:flag-outline"} width={16} height={16} className={"text-default"}/>
                        <div className="flex row gap-1 text-xs">
                            <p>{numSolves + " solves"}</p>
                        </div>
                    </div>
                </div>
                <HintAccordion list={hints}/>
            </CardBody>
            <CardFooter>
                {/* <FlagSubmissionCard flag={flag} setCompletion={false}/> */}
            </CardFooter>
        </Card>
    );
}

export default ChallengeCard;