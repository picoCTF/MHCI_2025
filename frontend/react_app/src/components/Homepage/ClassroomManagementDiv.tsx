import { Link } from "@heroui/react";
import ClassroomCard, { type ClassroomCardProps } from "../General/ClassroomCard";

interface ClassroomManagementDivProps {
    classrooms: ClassroomCardProps[];
}

const ClassroomManagementDiv: React.FC<ClassroomManagementDivProps> = ({ classrooms }) => {
    return (
        <div className="flex flex-col w-[811px] min-w-[811px] h-fit items-start gap-4">
            <div className="flex flex-row w-full min-w-full justify-between">
                {/* API_NEEDED - Get the classroom name and number of members */}
                <h2>Manage your classrooms</h2>
                <Link href="/classroom">Open Classrooms</Link>
            </div>
            <div className="flex flex-col w-full min-w-full">
                {classrooms.map((item) => <ClassroomCard name={item.name} numMembers={item.numMembers} recentAssignments={item.recentAssignments} pendingMemberUsernames={item.pendingMemberUsernames}/>)}
            </div>
        </div>
    );
}

export default ClassroomManagementDiv;