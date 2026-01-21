import { Button, Card, CardBody, CardHeader, Chip, Skeleton } from "@heroui/react";
import TeamMemberCard from "./TeamMemberCard";
import { Icon } from "@iconify/react";
import type { Event } from "../../api_interfaces/event/event";
import type { EventInfoMiddleware } from "../../api_interfaces/middleware/EventInfo";

import data from "../../mock-data/MockEventInfoResponse.json";

interface EventCard {
    event: Event;
}

// FIX_ME - The EventCard may need to be adjusted to work with the tagging/sorting system in the Event modal in the profile page
const EventCard: React.FC<EventCard> = ({ event }) => {

    // Create a middleware interface that gets the data from all three of the needed interfaces 
    // (put it in a middleware folder under api)
    let info: EventInfoMiddleware = data as EventInfoMiddleware;

    switch(event.type.name) {
        case "Research": {
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
                                    <Chip className="flex w-fit h-fit h-fit bg-success-50 text-success-700 p-1">Registration Open</Chip> : (null)
                                }
                                {event.has_opened && !event.has_ended && event.registered ?
                                    <Button size="md" radius="sm" className="bg-primary-500 text-default-50">Resume</Button> :
                                    event.has_opened && !event.has_ended ?
                                    <Button size="md" radius="sm" className="bg-primary-500 text-default-50">Register</Button> : (null)
                                }
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
        case "Challenge Release": {
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
                                    <Chip className="flex w-fit h-fit bg-success-50 text-success-700 p-1">Registration Open</Chip> : (null)
                                }
                                <Button size="md" radius="sm" className="bg-primary-500 text-default-50">Resume</Button>
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
                                <h3 className="font-semibold font-sans text-secondary-600">{info.teamData.team_score}</h3> {/* The team's rank in the competition */}
                                <p className="text-default-500">Final Rank</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold font-sans">1234</h3> {/* The individual's rank compared to other users */}
                                <p className="text-default-500">Individual Score</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold font-sans">{info.completedChallenges + "/" + info.totalChallenges}</h3>
                                <p className="text-default-500">Challenges</p>
                            </div>
                        </div>
                        <Button size="md" radius="sm" className="bg-primary-500 text-default-50">Resume</Button>
                    </CardHeader>
                    <CardBody className="flex flex-row flex-wrap w-full max-w-full h-fit p-0 m-0 gap-6">
                        {info.teamData.members.map( 
                            (member) => (<TeamMemberCard key={member.user_id} isLeader={member.team_leader} username={member.username}/>)
                        )}
                    </CardBody>
                </Card>
            );
        }
    }
}

export const EventCardSkeleton: React.FC<{}> = ({}) => {
    return (
        <Card className="flex w-full h-fit min-h-fit p-8 gap-8 border-small border-default-300" radius="sm" shadow="none">
            <CardHeader className="flex w-full h-fit p-0 m-0">
                <div className="flex flex-row w-full h-fit justify-between">
                    <div className="flex flex-col">
                        <Skeleton className="w-fit h-fit rounded-full">
                            <h3 className="font-semibold font-sans">Event Name</h3>
                        </Skeleton>
                    </div>
                    <div className="flex flex-row gap-8">
                        <Skeleton className="rounded-full">
                            <Chip color="success">Registration Open</Chip>
                        </Skeleton>
                        <Skeleton className="rounded-xl">
                            <Button size="md" radius="sm" color="primary">Resume</Button>
                        </Skeleton>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="flex w-full h-fit p-0 m-0">
                <div className="flex flex-row gap-8">
                    {Array.from({length: 3},(_, index) => (
                        <div className="flex flex-row gap-3 items-center" key={index}>
                            <Skeleton className="rounded-full">
                                <Icon icon={"material-symbols:article-outline"} width={16} height={16} className={"text-warning-600"}/>
                            </Skeleton>
                            <Skeleton className="rounded-full w-[120px] h-[24px]"/>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
}

export default EventCard;