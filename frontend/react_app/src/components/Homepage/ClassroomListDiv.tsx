import { Link } from "@heroui/react";
import ClassroomCard, { type ClassroomCardProps } from "../general/ClassroomCard";

export interface ClassroomListDivProps {
    list: ClassroomCardProps[];
}

const ClassroomListDiv: React.FC<ClassroomListDivProps> = ({ list }) => {
    return (
        <div className="flex flex-col w-[811px] min-w-[811px] h-fit items-start gap-4">
            <div className="flex flex-row w-full min-w-full justify-between">
                {/* API_NEEDED - Get the classroom name and number of members */}
                <h3>Manage your classrooms</h3>
                <Link href="/classroom">Open Classrooms</Link>
            </div>
            <div className="flex flex-col w-full min-w-full">
                {list.map((item) => <ClassroomCard key={item.id} id={item.id} name={item.name} numMembers={item.numMembers} recentAssignments={item.recentAssignments} pendingMemberUsernames={item.pendingMemberUsernames}/>)}
            </div>
        </div>
    );
}

export default ClassroomListDiv;