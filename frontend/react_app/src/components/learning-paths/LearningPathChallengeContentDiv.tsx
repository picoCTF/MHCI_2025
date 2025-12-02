import { Icon } from "@iconify/react";
import type { Category } from "../../api_interfaces/2023_generated_interfaces/category";
import type { Tag } from "../../api_interfaces/2023_generated_interfaces/tag";
import type { DifficultyProp } from "../general/DifficultyChip";
import DifficultyChip from "../general/DifficultyChip";
import type { HintAccordionProps } from "../general/HintAccordion";
import FlagSubmissionCard from "../general/FlagSubmissionCard";
import { Button, Chip, Tooltip } from "@heroui/react";
import HintAccordion from "../general/HintAccordion";
import { useState } from "react";

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
    
    //API_NEEDED - get whether the challenge has been bookmarked or not and use that to set the useState
    let [isBookmarked, setIsBookmarked] = useState(false);

    //API_NEEDED - get whether the challenge has been completed or not and use that to set the useState
    let [isCompleted, setIsCompleted] = useState(false);

    function updateBookmark(): void {
        setIsBookmarked(!isBookmarked);
        //API_NEEDED - add this challenge to the user's bookmarked challenges
    }

    function updateCompletion(): void {
        setIsCompleted(true);
        //API_NEEDED - update the challenge info for the user so that it is marked as completed
    }
    
    return (
        <div className="flex flex-col w-full h-full min-h-fit gap-8">
            <div className="flex flex-col text-start gap-4">
                <div className="flex flex-row gap-3 w-full items-center">
                    <h2>{name}</h2>
                    <Tooltip className="py-1 px-3" size="md" radius="sm" content={isBookmarked ? "Remove bookmark" : "Bookmark challenge"} placement="bottom" showArrow={true}>
                        <Button variant="light" isIconOnly radius="full" className="w-10 h-10" onPress={() => updateBookmark()}>
                            <Icon icon={isBookmarked ? "material-symbols:bookmark-rounded" : "material-symbols:bookmark-outline-rounded"} width={20} height={20}/>
                        </Button>
                    </Tooltip>
                </div>
                <div className="flex flex-row w-full gap-2 items-center">
                    <DifficultyChip difficultyLvl={difficulty.difficultyLvl}/>
                    <Chip>{category.name}</Chip>
                    {tags.map((tag) => (<Chip key={tag.id}>{tag.name}</Chip>))}
                </div>
                {description ? <p>{description}</p> : null}
                <div className="flex flex-row gap-4">
                    <div className="flex flex-row gap-2">
                        <Icon icon={"material-symbols:person-outline"} width={20} height={20} className={"text-default-500"}/>
                        <p className={"flex font-mono font-semibold text-default-500"}>{"Author:"}</p>
                        <p className={"flex font-mono text-default-500"}>{author}</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <Icon icon={"material-symbols:flag-outline"} width={20} height={20} className={"text-default-500"}/>
                        <p className={"flex font-mono text-default-500"}>{numSolves + " solves"}</p>
                    </div>
                </div>
                <HintAccordion list={hints}/>
            </div>
            <FlagSubmissionCard flag={flag}/>
        </div>
    );
}

export default LearningPathChallengeContentDiv;