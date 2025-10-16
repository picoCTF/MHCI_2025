import type { Badge } from "./Badge";

export interface BadgeList {
    count: number; // Number of badges in the list
    results: Badge[]; // Array of Bagde objects
}