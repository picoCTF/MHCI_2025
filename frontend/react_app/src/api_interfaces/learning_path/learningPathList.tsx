import type { LearningPath } from "./learningPath";

export interface LearningPathList {
    count: number; // Number of learning paths in the list
    results: LearningPath[]; // Array of LearningPath objects
}