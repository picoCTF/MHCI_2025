import { Link } from "@heroui/react";
import ClassroomCard, { type ClassroomCardProps } from "../general/ClassroomCard";
import type { FocusWrapperCardProps } from "../general/FocusWrapperCard";
import FocusWrapperCard from "../general/FocusWrapperCard";

export interface ClassroomListDivProps {
    isFocused: FocusWrapperCardProps['isFocused'];
    list: ClassroomCardProps[];
}

// This needs a pagination components when it is being used on desktop
const ClassroomListDiv: React.FC<ClassroomListDivProps> = ({ isFocused, list }) => {
    return (
        <div className="flex flex-col w-[811px] min-w-[811px] h-fit items-start gap-4 bg-transparent">
            <div className="flex flex-row w-full min-w-full justify-between">
                {/* API_NEEDED - Get the classroom name and number of members */}
                <h3>Manage your classrooms</h3>
                <Link href="/classroom">Open Classrooms</Link>
            </div>
            <FocusWrapperCard isFocused={isFocused}>
                {list.map((item) => <ClassroomCard key={item.id} id={item.id} name={item.name} numMembers={item.numMembers} recentAssignments={item.recentAssignments} pendingMemberUsernames={item.pendingMemberUsernames}/>)}
            </FocusWrapperCard>
        </div>
    );
}

export default ClassroomListDiv;