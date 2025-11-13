import type { Resource } from "./resource";

export interface ResourceGroup {
    count: number;
    description: string;
    id: number;
    name: string;
    resources: Resource[];
}

export function isResourceGroup(obj: any): obj is ResourceGroup {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.count === "number" &&
        typeof obj.description === "string" &&
        typeof obj.id === "number" &&
        typeof obj.name === "string" &&
        typeof obj.resources === "object"
    );
}