import { Chip } from "@heroui/react";

export interface DifficultyProp {
    Enum: 1 | 2 | 3;
}

function getDifficultyChipColor(difficulty: number) {
    switch(difficulty){
        case 1:
            return "success-50";
        case 2:
            return "warning-50";
        default:
            return "danger-50";
    }
}

function getDifficultyTextColor(difficulty: number) {
    switch(difficulty){
        case 1:
            return "success-700";
        case 2:
            return "warning-700";
        default:
            return "danger-700";
    }
}

function getDifficultyChipName(difficulty: number) {
    switch(difficulty){
        case 1:
            return "Easy";
        case 2:
            return "Medium";
        default:
            return "Hard";
    }
}

const DifficultyChip: React.FC<DifficultyProp> = ({ Enum }) => {

    return (
        <Chip className={"flex bg-" + getDifficultyChipColor(Enum) + " text-" + getDifficultyTextColor(Enum)} size="sm">
            <p className="text-xs">{getDifficultyChipName(Enum)}</p>
        </Chip>
    );
}

export default DifficultyChip;