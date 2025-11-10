import { Button, Card, CardBody, CardHeader, Chip } from "@heroui/react";
import TeamMemberCard from "./TeamMemberCard";
import { Icon } from "@iconify/react";
import type { Event } from "../../api_interfaces/event/event";
import type { EventRegistrationResponse } from "../../api_interfaces/event/eventRegistrationResponse";
import type { PublicTeam } from "../../api_interfaces/2023_generated_interfaces/team/publicTeam";

import publicTeamData from "../../mock-data/MockPublicTeamResponse.json"

interface EventCard {
    event: Event;
    variant: "Competition" | "Experimental";
}

const EventCard: React.FC<EventCard> = ({ event, variant }) => {

    let scoreData; //The participant's score during the event, get this from the ScoreProgression request
    let registrationData: EventRegistrationResponse; //Info about participant registration
    let teamData: PublicTeam = publicTeamData; //Data for the team given the participant and event

    switch(variant) {
        case "Experimental": {
            return (
                <Card className="flex w-full h-fit min-h-fit p-8 gap-8 border-small border-default-300" radius="sm" shadow="none">
                    <CardHeader className="flex w-full h-fit p-0 m-0">
                        <div className="flex flex-row w-full h-fit justify-between">
                            <div className="flex flex-col">
                                <h3 className="font-semibold font-sans">{event.name}</h3>
                                <p className="text-default-500">{event.end_time}</p>
                            </div>
                            <div className="flex flex-row gap-8">
                                {event.has_opened && !event.has_ended ? 
                                    <Chip color="success">Registration Open</Chip> : (null)
                                }
                                <Button size="md" radius="sm" color="primary">Resume</Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="flex w-full h-fit p-0 m-0">
                        <div className="flex flex-row gap-8">
                            <div className="flex flex-row gap-3 items-center">
                                <Icon icon={"material-symbols:article-outline"} width={16} height={16} className={"text-warning-600"}/>
                                <h4 className="font-normal text-warning-600">Event Password Required</h4>
                            </div>
                            <div className="flex flex-row gap-3 items-center">
                                <Icon icon={"material-symbols:person-outline"} width={16} height={16} className={"text-default-500"}/>
                                <h4 className="font-normal text-default-500">Individual Play</h4>
                            </div>
                            <div className="flex flex-row gap-3 items-center">
                                <Icon icon={"material-symbols:article-outline"} width={16} height={16} className={"text-danger-600"}/>
                                <h4 className="font-normal text-danger-600">Event Password Required</h4>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            );
        }
        default: {
            //Competition
            return (
                <Card className="flex w-full h-fit min-h-fit p-8 gap-8 border-small border-default-300" radius="sm" shadow="none">
                    <CardHeader className="flex flex-row w-full h-fit p-0 m-0 gap-6 justify-between">
                        <div className="flex flex-row gap-6">
                            <div className="flex flex-col">
                                <h3 className="font-semibold font-sans">{event.name}</h3>
                                <p className="text-default-500">Date</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold font-sans text-secondary-600">{teamData.team_score}</h3> {/* The team's rank in the competition */}
                                <p className="text-default-500">Final Rank</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold font-sans">1234</h3> {/* The individual's rank compared to other users */}
                                <p className="text-default-500">Individual Score</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold font-sans">NumChallenges/totalChallenges</h3>
                                <p className="text-default-500">Challenges</p>
                            </div>
                        </div>
                        <Button size="md" radius="sm" color="primary">Resume</Button>
                    </CardHeader>
                    {/* {event.registered ? 
                        <CardBody className="flex w-full h-fit p-0 m-0">
                            {teamData.members.map( 
                                (member) => (<TeamMemberCard isLeader={member.team_leader} username={member.username}/>)
                            )}
                        </CardBody> : (null)
                    } */}
                    <CardBody className="flex flex-row flex-wrap w-full max-w-full h-fit p-0 m-0 gap-6">
                        {teamData.members.map( 
                            (member) => (<TeamMemberCard key={member.user_id} isLeader={member.team_leader} username={member.username}/>)
                        )}
                    </CardBody>
                </Card>
            );
        }
    }
}

export default EventCard;