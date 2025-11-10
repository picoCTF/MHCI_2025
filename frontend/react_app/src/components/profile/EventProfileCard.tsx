import { Button, Card, CardBody, CardHeader, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@heroui/react";
import EventCard from "../general/EventCard";
import type { Event } from "../../api_interfaces/event/event";
import { useState } from "react";
import data from "../../mock-data/MockPagedEventResponse.json";
import type { EventTag } from "../../api_interfaces/event/eventTag";

interface EventModalProps {
    list: Event[];
}

const EventModal: React.FC<EventModalProps> = ({ list }) => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    let [unusedTags, setUnusedTags] = useState<EventTag[]>([
        {name: "Challenge Release"}, 
        {name: "Competition"}, 
        {name: "Research"}
    ]);
    let [curTags, setCurTags] = useState<EventTag[]>([]);
    let [renderedEvents, setRenderedEvents] = useState<Event[]>(list);

    function addTagFilter(tag: EventTag): void {
        if(!curTags.includes(tag)) {
            let unusedTemp = unusedTags;

            if(unusedTemp.includes(tag)) {
                const tagIndex = unusedTemp.indexOf(tag);
                unusedTemp.splice(tagIndex, 1);

                console.log("unusedTemp");
                unusedTemp.forEach(tag => {
                    console.log(tag.name);
                })
            }

            setUnusedTags(unusedTemp);
            setCurTags(c => [...c, tag]);

            console.log("curTags");
            curTags.forEach(tag => {
                console.log(tag.name);
            })

            console.log("unusedTags");
            unusedTags.forEach(tag => {
                console.log(tag.name);
            })

            list.forEach((event) => {
                if(event.tags.includes(tag) && !renderedEvents.includes(event)) {
                    setRenderedEvents(renderedEvents => [...renderedEvents, event]);
                }
            })
        }
    }

    function removeTagFilter(tag: EventTag): void {
        if(curTags.includes(tag)) {
            let curTemp = curTags;

            const curTagIndex = curTemp.indexOf(tag);
            curTemp.splice(curTagIndex, 1);
            if(!unusedTags.includes(tag)) {
                let unusedTemp = unusedTags.concat([tag]);
                setUnusedTags(unusedTemp);
            }
            setCurTags(curTemp);

            console.log("curTags");
            curTags.forEach(tag => {
                console.log(tag.name);
            })

            console.log("unusedTags");
            unusedTags.forEach(tag => {
                console.log(tag.name);
            })

            let tempEvents: Event[] = list;

            list.forEach(event => {
                event.tags.forEach(eventTag => {
                    if(eventTag !== tag && curTags.includes(eventTag) && !tempEvents.includes(event)) {
                        tempEvents.push(event);
                    }
                })
            })

            setRenderedEvents(tempEvents);
        }
    }

    return (
        <>
            <Button variant="bordered" color="primary" onPress={onOpen}>See more...</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" className="flex flex-col h-fit">
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <h3>Events</h3>
                            </ModalHeader>
                            <ModalBody className="flex flex-col gap-6">
                                <div className="flex flex-row gap-6">
                                    <Dropdown className="flex w-full h-fit">
                                        <DropdownTrigger className="flex w-fit max-w-fit">
                                            <Button variant="bordered">Filter By Tags</Button>
                                        </DropdownTrigger>
                                        <DropdownMenu>
                                            {unusedTags.map((tag) => 
                                                <DropdownItem key={tag.name} onPress={() => (addTagFilter(tag))}>
                                                    {tag.name}
                                                </DropdownItem>
                                            )}
                                        </DropdownMenu>
                                    </Dropdown>
                                    {curTags.map((tag) =>
                                        <Chip key={tag.name} onClose={() => (removeTagFilter(tag))}>
                                            {tag.name}
                                        </Chip>
                                    )}
                                </div>
                                <div className="flex flex-col w-full h-[450px] overflow-scroll gap-6">
                                    {renderedEvents.map(curEvent =>
                                        <EventCard event={curEvent} key={curEvent.id} variant={"Competition"}/>
                                    )}
                                </div>
                                <div className="flex flex-col place-items-center">
                                    <h5 className="font-bold text-base text-default-500">More coming soon</h5>
                                    <p className="text-xs text-default-500">Stay tuned for updates</p>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

// Show the user's profile information
const EventProfileCard: React.FC<{}> = () => {

    {/* API_NEEDED - get the events that are relevant to the person in chronological order, with most recent on top*/}
    let events: Event[] = data.results as Event[];
    let highlightedEvents: Event[] = [];

    for(let i = 0; i < 3; i++) {
        if(events[i]) {
            highlightedEvents.push(events[i]);
        }
        else {
            break;
        }
    }

    return (
        <Card className="flex w-full min-w-fit h-fit bg-content1-base border-small border-default-300 p-10 gap-6" radius="md" shadow="none">
            <CardHeader className="flex flex-row w-full h-fit justify-between p-0 m-0">
                <h3>Events</h3>
                <EventModal list={events}/>
            </CardHeader>
            <CardBody className="flex flex-col flex-wrap w-full max-w-full h-fit p-0 m-0 gap-6">
                
                {/* Put the top 3 most recent events here */}
                {highlightedEvents.map(curEvent =>
                    <EventCard event={curEvent} key={curEvent.id} variant={"Competition"}/>
                )}
            </CardBody>
        </Card>
    );
}

export default EventProfileCard;