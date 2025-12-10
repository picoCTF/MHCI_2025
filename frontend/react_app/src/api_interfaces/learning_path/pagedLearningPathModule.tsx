import type { LPModule } from "./learningPathModule";

export interface PagedLPModule {
    count: number;
    results: LPModule[];
}