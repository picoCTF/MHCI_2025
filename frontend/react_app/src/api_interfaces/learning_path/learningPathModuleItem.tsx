import type { ReactElement } from "react";
import type { Game } from "../2023_generated_interfaces/game/game";
import type { Challenge } from "../challenge";
import type { ResourceGroup } from "../resource/resourceGroup";

export interface LPModuleItem {
    content: Challenge | ResourceGroup | Game | ReactElement; // The item content
    id: number;
    name: string;
    status: "Complete" | "Incomplete";
    //Refer to playlist interface for type enum and rendering info
}