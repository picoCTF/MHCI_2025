import type { Score } from "../2023_generated_interfaces/scrore";
import type { PublicTeam } from "../2023_generated_interfaces/team/publicTeam";
import type { EventRegistrationResponse } from "../event/eventRegistrationResponse";

export interface EventMiddleware {
    scoreData: Score; //The participant's score during the event, get this from the ScoreProgression request
    registrationData: EventRegistrationResponse; //Info about participant registration
    teamData: PublicTeam; //Data for the team given the participant and event
}