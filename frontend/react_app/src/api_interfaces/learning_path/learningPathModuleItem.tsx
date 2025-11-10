import type { Challenge } from "../challenge";
import type { ResourceGroup } from "../resource/resourceGroup";

export interface LPModuleItem {
    content: Challenge | ResourceGroup; // The item content
    id: number;
    status: "Complete" | "Incomplete";
}