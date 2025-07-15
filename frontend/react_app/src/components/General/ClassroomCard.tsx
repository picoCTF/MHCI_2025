import { Card, CardBody, CardHeader } from "@heroui/react";
import RecentAssignmentsCard from "./RecentAssignmentsCard";
import PendingMemberRequestsCard from "../Homepage/PendingMemberRequestsCard";

interface ClassroomCardProps {
    classroomID: string;
}

const ClassroomCard: React.FC<ClassroomCardProps> = ({ classroomID }) => {
    return (
        <Card className="w-fill h-fit]">
            <CardHeader className="flex flex-col items-start">
                {/* API_NEEDED - Get the classroom name and number of members */}
                <h2>Classroom Name</h2>
                <p>24 Members</p>
            </CardHeader>
            <CardBody>
                {/* API_NEEDED - Get the usernames of the people that want to join this classroom */}
                <PendingMemberRequestsCard usernames={["Username 1", "Username 2", "Username 3"]}/>
                {/* API_NEEDED - Get the IDs of assignments the user recently viewed in this classroom */}
                <RecentAssignmentsCard assignmentIDs={["1", "2"]}/>
            </CardBody>
        </Card>
    );
}

export default ClassroomCard;