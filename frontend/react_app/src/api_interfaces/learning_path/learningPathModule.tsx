import type { LPModuleItem } from "./learningPathModuleItem";

export interface LPModule {
    count: number; // Number of elements inside the module
    name: string; // The name of the module
    completion: number; // The percentage of completion for the module, from 0 to 100
    items: LPModuleItem[]; // Array of the elements inside the module
}