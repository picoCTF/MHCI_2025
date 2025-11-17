import { Skeleton } from "@heroui/react";
import { Link } from "@heroui/react";
import data from "../../mock-data/MockPagedClassroomResponse.json";
import ClassroomCard from "../general/ClassroomCard";
import type { FocusWrapperCardProps } from "../general/FocusWrapperCard";
import FocusWrapperCard from "../general/FocusWrapperCard";

import { mockClassrooms } from "../../mock-data/ClassroomData";
import type { PaginatedClassroomList } from "../../api_interfaces/2023_generated_interfaces/classroom/paginatedClassroomList";
import type { Classroom } from "../../api_interfaces/2023_generated_interfaces/classroom/classroom";
import type { PaginatedClassroomMemberList } from "../../api_interfaces/2023_generated_interfaces/classroom/paginatedClassroomMemberList";

export interface ClassroomListDivProps {
    isFocused: FocusWrapperCardProps['isFocused'];
}

// This needs a pagination components when it is being used on desktop
const ClassroomListDiv: React.FC<ClassroomListDivProps> = ({ isFocused }) => {

    // API_NEEDED - get the classrooms the user is in charge of
    let classrooms: PaginatedClassroomList = data;

    let classroomsLeading: Classroom[] = []; //The classrooms led by the user

    classrooms.results?.forEach(classroom => {
        if(classroom.leader) {
            classroomsLeading.push(classroom);
        }
    });

    // API_NEEDED - get the members of the classrooms
    let classroomMembers: PaginatedClassroomMemberList;

    return (
        <div className="flex flex-col w-full min-w-full h-fit items-start gap-4 bg-transparent">
            <div className="flex flex-row w-full min-w-full justify-between">
                <Skeleton className="flex w-fit rounded-full">
                    <h3>Manage your classrooms</h3>
                </Skeleton>
                <Skeleton className="flex w-fit rounded-full">
                    <Link href="/classroom">Open Classrooms</Link>
                </Skeleton>
            </div>
            <Skeleton>
                <FocusWrapperCard isFocused={isFocused} orientation="col">
                    {mockClassrooms.map((classroom) => <ClassroomCard key={classroom.id} id={classroom.id} 
                        name={classroom.name} numMembers={classroom.numMembers} recentAssignments={classroom.recentAssignments} 
                        pendingMemberUsernames={classroom.pendingMemberUsernames}/>)}
                </FocusWrapperCard>
            </Skeleton>
        </div>
    );
}

export default ClassroomListDiv;