import { Chip, Skeleton } from "@heroui/react";

//FIX_ME - change the difficulty prop so that it does not accept all strings. Need this to work with JSON.
export interface DifficultyProp {
    difficultyLvl: "Easy" | "Medium" | "Hard";
}

function getDifficultyChipColor(difficulty: string) {
    switch(difficulty){
        case "Easy":
            return "success-50";
        case "Medium":
            return "warning-50";
        default:
            return "danger-50";
    }
}

function getDifficultyTextColor(difficulty: string) {
    switch(difficulty){
        case "Easy":
            return "success-700";
        case "Medium":
            return "warning-700";
        default:
            return "danger-700";
    }
}

// A chip the shows the given difficulty using correct colors 
const DifficultyChip: React.FC<DifficultyProp> = ({ difficultyLvl }) => {

    return (
        <Chip className={"flex bg-" + getDifficultyChipColor(difficultyLvl) + " text-" + getDifficultyTextColor(difficultyLvl)} size="sm">
            <p className="font-medium">{difficultyLvl}</p>
        </Chip>
    );
}

export const DifficultyChipSkeleton: React.FC<{}> = ({}) => {
    return (
        <Skeleton className="flex w-fit h-fit rounded-full">
            <Chip className={"flex bg-default text-default"} size="sm">
                <p className="font-medium">Medium</p>
            </Chip>
        </Skeleton>
    );
}

export default DifficultyChip;