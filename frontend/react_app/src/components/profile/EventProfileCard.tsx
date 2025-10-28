import { Card, CardBody, CardHeader, Dropdown, DropdownItem } from "@heroui/react";
import EventCard from "../general/EventCard";

// Show the user's profile information
const EventProfileCard: React.FC<{}> = () => {

    {/* API_NEEDED - get the events that are relevant to the person */}

    return (
        <Card className="flex w-full min-w-fit h-fit bg-content1-base border-small border-default-300 p-10 gap-6" radius="md" shadow="none">
            <CardHeader>
                <h3>Events</h3>
            </CardHeader>
            <CardBody>
                <Dropdown>
                    <DropdownItem key={""}>

                    </DropdownItem>
                    <DropdownItem key={""}>
                        
                    </DropdownItem>
                    <DropdownItem key={""}>
                        
                    </DropdownItem>
                    <DropdownItem key={""}>
                        
                    </DropdownItem>
                    <DropdownItem key={""}>
                        
                    </DropdownItem>
                </Dropdown>
            </CardBody>
        </Card>
    );
}

export default EventProfileCard;