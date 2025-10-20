import type { TeamResponse } from "./TeamResponse";

export interface EverntRegistrationResponse {
    id: number;
    team: TeamResponse;
    team_membership_pending: boolean;
    team_leader: boolean;
    score: number;
    is_disqualified: boolean;
    disqualification_reason: string | null;
}