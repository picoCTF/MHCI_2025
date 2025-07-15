import { Card, CardBody, CardHeader } from "@heroui/react";
import ClassroomCard from "../General/ClassroomCard";

interface ClassroomManagementCardProps {
    classroomIDs: string[];
}

const ClassroomManagementCard: React.FC<ClassroomManagementCardProps> = ({ classroomIDs }) => {
    return (
        <Card className="w-[811px] h-fit]">
            <CardHeader className="flex flex-col items-start">
                {/* API_NEEDED - Get the classroom name and number of members */}
                <h2>Manage your classrooms</h2>
            </CardHeader>
            <CardBody>
                <ClassroomCard classroomID={classroomIDs[0]}/>
                <ClassroomCard classroomID={classroomIDs[1]}/>
            </CardBody>
        </Card>
    );
}

export default ClassroomManagementCard;