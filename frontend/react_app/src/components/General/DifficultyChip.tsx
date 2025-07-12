import { Chip } from "@heroui/react";

interface DifficultyChipProps {
    Enum: 1 | 2 | 3;
}

function getDifficultyChipColor(difficulty: number) {
    switch(difficulty){
        case 1:
            return "success";
        case 2:
            return "warning";
        default:
            return "danger";
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

const DifficultyChip: React.FC<DifficultyChipProps> = ({ Enum }) => {

    return (
        <Chip size="sm" color={getDifficultyChipColor(Enum)}>
            <p className="text-xs">{getDifficultyChipName(Enum)}</p>
        </Chip>
    );
}

export default DifficultyChip;