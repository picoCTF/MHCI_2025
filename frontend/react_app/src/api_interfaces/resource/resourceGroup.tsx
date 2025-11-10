import type { Resource } from "./resource";

export interface ResourceGroup {
    count: number;
    description: string;
    id: number;
    name: string;
    resources: Resource[];
}