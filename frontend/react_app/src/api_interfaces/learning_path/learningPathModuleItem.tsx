import type { Game } from "../2023_generated_interfaces/game/game";
import type { Challenge } from "../challenge";
import type { ResourceGroup } from "../resource/resourceGroup";

export interface LPModuleItem {
    content: Challenge | ResourceGroup | Game; // The item content
    id: number;
    status: "Complete" | "Incomplete";
}