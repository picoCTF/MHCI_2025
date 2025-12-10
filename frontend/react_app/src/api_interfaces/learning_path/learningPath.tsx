import type { DifficultyProp } from "../../components/general/DifficultyChip";

export interface LearningPath {
    completed: boolean; // Whether the user has completed the path
    description: string; // A description of the learning path
    difficulty: DifficultyProp; // The overall difficulty of the learning path
    id: number;
    name: string; // The name of the learning path
    numChallenges: number; // The number of mandatory tasks in the learning path
    numCompletedTasks: number; // The number of mandatory tasks the user has completed
    numSolves: number; // The number of people who have completed the path
    prereqs: string[]; // The skills/technologies you should know before starting the path
    skills: string[]; // The skills/technologies you learn by completing the path
}