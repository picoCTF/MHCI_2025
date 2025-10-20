import { Button, Card, CardBody, CardHeader, Chip } from "@heroui/react";
import Icon from "./Icon";

interface EventCard {
    variant: "Competition" | "Experimental";
}

const EventCard: React.FC<EventCard> = ({ variant }) => {

    switch(variant) {
        case "Experimental": {
            return (
                <Card className="flex w-full h-fit p-8 gap-8" shadow="none">
                    <CardHeader className="flex w-full h-fit p-0 m-0">
                        <div className="flex flex-row w-full h-fit justify-between">
                            <div className="flex flex-col">
                                <h3 className="font-semibold font-sans">Event Name</h3>
                                <p className="text-default-500">Date</p>
                            </div>
                            <div className="flex flex-row gap-8">
                                {/* Put a Chip here if registration is open */}
                                <Button size="md" radius="sm" color="primary">Resume</Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="flex w-full h-fit p-0 m-0">
                        <div className="flex flex-row gap-8">
                            <div className="flex flex-row gap-3 items-center">
                                <Icon name={"article"} size={"xs"} color={"warning"} colorValue="600"/>
                                <h4 className="font-normal text-warning-600">Event Password Required</h4>
                            </div>
                            <div className="flex flex-row gap-3 items-center">
                                <Icon name={"person"} size={"xs"} color={"default"} colorValue="500"/>
                                <h4 className="font-normal text-default-500">Individual Play</h4>
                            </div>
                            <div className="flex flex-row gap-3 items-center">
                                <Icon name={"article"} size={"xs"} color={"danger"} colorValue="600"/>
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
                <Card className="flex w-full h-fit p-8 gap-8" shadow="none">
                    <CardHeader className="flex flex-row w-full h-fit p-0 m-0 gap-6 justify-between">
                        <div className="flex flex-row gap-6">
                            <div className="flex flex-col">
                                <h3 className="font-semibold font-sans">Event Name</h3>
                                <p className="text-default-500">Date</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold font-sans text-secondary-600">#1234</h3> {/* The team's rank in the competition */}
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
                    <CardBody className="flex w-full h-fit p-0 m-0">
                        
                    </CardBody>
                </Card>
            );
        }
    }
}

export default EventCard;