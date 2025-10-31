import { Avatar, Card } from "@heroui/react";

export interface TeamMemberCardProps {
    isLeader: boolean;
    username: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ isLeader, username }) => {

    //API_NEEDED get the ParticipantTeamInfo response using the participant's ID
    let roleName = "Member";
    if(isLeader) {
        roleName = "Leader";
    }

    return (
        <Card className="flex flex-row w-fit h-fit p-4 m-0 gap-5 bg-content2-base border-small border-default-300" radius="sm" shadow="none">
            <Avatar/>
            <div className="flex flex-col">
                <p className="font-semibold">{username}</p>
                <p className="text-default-500">{roleName}</p>
            </div>
        </Card>
    );
}

export default TeamMemberCard;