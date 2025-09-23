import { Chip } from "@heroui/react";

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

// function getDifficultyChipName(difficulty: string) {
//     switch(difficulty){
//         case 1:
//             return "Easy";
//         case 2:
//             return "Medium";
//         default:
//             return "Hard";
//     }
// }

// A chip the shows the given difficulty using correct colors 
const DifficultyChip: React.FC<DifficultyProp> = ({ difficultyLvl }) => {

    return (
        <Chip className={"flex bg-" + getDifficultyChipColor(difficultyLvl) + " text-" + getDifficultyTextColor(difficultyLvl)} size="sm">
            <p className="font-medium">{difficultyLvl}</p>
        </Chip>
    );
}

export default DifficultyChip;