import type { Team } from "../2023_generated_interfaces/team/team";

export interface EventRegistrationResponse {
    id: number;
    team: Team;
    team_membership_pending: boolean;
    team_leader: boolean;
    score: number;
    is_disqualified: boolean;
    disqualification_reason: string | null;
}