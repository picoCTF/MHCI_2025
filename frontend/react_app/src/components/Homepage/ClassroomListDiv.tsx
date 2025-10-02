import { Link } from "@heroui/react";
import ClassroomCard from "../general/ClassroomCard";
import type { FocusWrapperCardProps } from "../general/FocusWrapperCard";
import FocusWrapperCard from "../general/FocusWrapperCard";

import { mockClassrooms } from "../../mock-data/ClassroomData";

export interface ClassroomListDivProps {
    isFocused: FocusWrapperCardProps['isFocused'];
}

// This needs a pagination components when it is being used on desktop
const ClassroomListDiv: React.FC<ClassroomListDivProps> = ({ isFocused }) => {

    // API_NEEDED - get the classrooms the user is in
    let classrooms = mockClassrooms;
    //Put classrooms where list is

    return (
        <div className="flex flex-col w-full min-w-full h-fit items-start gap-4 bg-transparent">
            <div className="flex flex-row w-full min-w-full justify-between">
                {/* API_NEEDED - Get the classroom name and number of members */}
                <h3>Manage your classrooms</h3>
                <Link href="/classroom">Open Classrooms</Link>
            </div>
            <FocusWrapperCard isFocused={isFocused}>
                {classrooms.map((item) => <ClassroomCard key={item.id} id={item.id} name={item.name} numMembers={item.numMembers} recentAssignments={item.recentAssignments} pendingMemberUsernames={item.pendingMemberUsernames}/>)}
            </FocusWrapperCard>
        </div>
    );
}

export default ClassroomListDiv;