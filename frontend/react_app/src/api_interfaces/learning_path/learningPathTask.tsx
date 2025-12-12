//import type { ModuleTypeEnum } from "./moduleTypeEnum";

export interface LPTask {
    contentID: number; //The id of the ResourceGroup/Challenge/other content
    contentType: "C" | "G" | "H" | "M" | "R" | string; // FIX_ME - Replace this with a ModuleTypeEnum and fix the JSON type checking issues
    id: number; //The ID of this item
    name: string;
    status: "Complete" | "Incomplete" | string; // FIX_ME - Remove the string type and fix the JSON type checking issues
}