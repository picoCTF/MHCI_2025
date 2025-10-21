import type { DifficultyProp } from "../components/general/DifficultyChip";
import type { LPModuleList } from "./learningPathModuleList";

export interface LearningPath {
    count: number; // The number of modules in the learning path
    completion: number; // The number of mandatory tasks the user has completed
    description: string; // A description of the learning path
    difficulty: DifficultyProp; // The overall difficulty of the learning path
    id: number;
    modules: LPModuleList; // The modules/subsections of the learning path
    name: string; // The name of the learning path
    numTasks: number; // The number of mandatory tasks in the learning path
}