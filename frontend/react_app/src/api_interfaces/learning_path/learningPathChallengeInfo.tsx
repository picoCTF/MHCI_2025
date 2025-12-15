import type { DifficultyProp } from "../../components/general/DifficultyChip";

export interface LPChallengeInfo {
    difficulty: DifficultyProp["difficultyLvl"];
    users_solved: number;
}