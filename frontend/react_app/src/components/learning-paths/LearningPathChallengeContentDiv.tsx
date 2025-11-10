import { Icon } from "@iconify/react";
import type { Category } from "../../api_interfaces/2023_generated_interfaces/category";
import type { Tag } from "../../api_interfaces/2023_generated_interfaces/tag";
import type { DifficultyProp } from "../general/DifficultyChip";
import DifficultyChip from "../general/DifficultyChip";
import type { HintAccordionProps } from "../general/HintAccordion";
import FlagSubmissionCard from "../general/FlagSubmissionCard";
import { Chip } from "@heroui/react";
import HintAccordion from "../general/HintAccordion";

interface LearningPathChallengeContentDivProps {
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

const LearningPathChallengeContentDiv: React.FC<LearningPathChallengeContentDivProps> = ({ author, category, description, difficulty, flag, hints, name, numSolves, tags }) => {
    return (
        <div className="flex flex-col w-full h-full min-h-fit gap-8">
            <div className="flex flex-col text-start gap-4">
                <div className="flex flex-row gap-3">
                    <h2>{name}</h2>
                    <Icon icon={"material-symbols:bookmark-outline-rounded"}/>
                </div>
                <div className="flex flex-row gap-2">
                    <DifficultyChip difficultyLvl={difficulty.difficultyLvl}/>
                    <Chip>{category.name}</Chip>
                    {tags.map((tag) => (<Chip>{tag.name}</Chip>))}
                </div>
                {description ? <p>{description}</p> : null}
                <div className="flex flex-row gap-4">
                    <div className="flex flex-row gap-2">
                        <Icon icon={"material-symbols:extension-outline"} width={20} height={20} className={"text-default-500"}/>
                        <div className="flex flex-row gap-1">
                            <p className={"flex font-mono font-semibold text-default-500"}>{"Author:"}</p>
                            <p className={"flex font-mono text-default-500"}>{author}</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <Icon icon={"material-symbols:flag-outline"} width={20} height={20} className={"text-default"}/>
                        <div className="flex row gap-1 text-xs">
                            <p>{numSolves + " solves"}</p>
                        </div>
                    </div>
                </div>
                <HintAccordion list={hints}/>
            </div>
            <FlagSubmissionCard flag={flag}/>
        </div>
    );
}

export default LearningPathChallengeContentDiv;