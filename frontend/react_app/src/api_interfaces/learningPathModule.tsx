export interface LPModule {
    count: number; // Number of elements inside the module
    next?: string | null; // Pointer to the next module
    previous?: string | null; //Pointer to the previous module
    results: []; // Array of the elements inside the module. Elements can be challenges or resources
}