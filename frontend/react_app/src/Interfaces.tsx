export interface SemanticColorProps {
    color: "primary" | "secondary" | "default" | "success" | "warning" | "danger";
    colorValue: "base" | "foreground" | "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
}

interface AssignmentChallengeResponse {
    id: number;
    name: string;
    difficulty: number;
    solved_by_due_date: boolean;
    solve_time: string | null;
}

interface AssignmentNestedClassroomResponse {
    id: number;
    name: string;
}

export interface AssignmentResponse {
    id: number;
    classroom: AssignmentNestedClassroomResponse;
    name: string;
    due_date: string;
    active: boolean;
    created: boolean;
    challenges: AssignmentChallengeResponse[];
}