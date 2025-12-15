import type { LPTask } from "./learningPathTask";

export interface PagedLPTask {
    count: number;
    results: LPTask[];
}