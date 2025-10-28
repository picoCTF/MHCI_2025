import type { IconName } from "../components/general/IconTypes";

export type BadgeColors = "green" | "yellow" | "purple";
export type BadgeShapes = "pointed" | "rounded";

export interface Badge {
    shape: BadgeShapes;
    bgColor: BadgeColors;
    strokeColor: BadgeColors;
    textColor: BadgeColors;
    icon: IconName;
    id: number;
    isSelected: boolean; // Did the user choose to highlight this badge on their profile?
    isUnlocked: boolean; // Has the user unlocked this badge?
    title: string;

    width?: number;
    height?: number;
}