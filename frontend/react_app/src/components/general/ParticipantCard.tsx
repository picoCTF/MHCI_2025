import { Avatar, Card } from "@heroui/react";

const ParticipantCard: React.FC<{}> = () => {

    //API_NEEDED get the ParticipantTeamInfo response using the participant's ID

    return (
        <Card className="flex flex-row w-fit h-fit p-4 m-0 gap-5 bg-content2-base border-small border-default-300" radius="sm" shadow="none">
            <Avatar/>
            <div className="flex flex-col">
                <p className="font-semibold">Username1</p>
                <p className="text-default-500">Team Role</p>
            </div>
        </Card>
    );
}

export default ParticipantCard;