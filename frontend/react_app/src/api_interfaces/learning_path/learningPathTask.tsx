import type { ModuleTypeEnum } from "./moduleTypeEnum";

export interface LPTask {
    contentID: number; //The id of the ResourceGroup/Challenge/other content
    contentType: "C" | "G" | "H" | "M" | "R"; // The type of the content
    id: number; //The ID of this item
    name: string;
    status: "Complete" | "Incomplete";
}