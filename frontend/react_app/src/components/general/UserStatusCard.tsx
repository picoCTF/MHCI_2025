import { Avatar, Card, CardBody } from "@heroui/react";

interface ParticipantCardProps {
    id: number; //The participant's ID
    teamID: number; //The ID of the team the participant is in
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({  }) => {

    //API_NEEDED get the ParticipantTeamInfo response using the participant's ID

    return (
        <Card className="flex w-full h-fit" radius="sm" shadow="none">
            <CardBody className="flex flex-row">
                <Avatar/>
                <div className="flex flex-col">
                    
                </div>
            </CardBody>
        </Card>
    );
}

export default ParticipantCard;