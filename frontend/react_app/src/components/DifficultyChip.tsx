import { Chip } from "@heroui/react";

interface DifficultyChipProps {
    difficulty: "Easy" | "Medium" | "Hard";
}

function getDifficultyChipColor(difficulty: string) {
    switch(difficulty){
        case "Easy":
            return "success";
        case "Medium":
            return "warning";
        default:
            return "danger";
    }
}

const DifficultyChip: React.FC<DifficultyChipProps> = ({ difficulty }) => {

    return (
        <Chip size="sm" color={getDifficultyChipColor(difficulty)}>
            <p className="text-xs">{difficulty}</p>
        </Chip>
    );
}

export default DifficultyChip;