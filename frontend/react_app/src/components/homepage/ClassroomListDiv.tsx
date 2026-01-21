import { Skeleton } from "@heroui/react";
import { Link } from "@heroui/react";
import classroomsMockData from "../../mock-data/MockPagedClassroomResponse.json";
import ClassroomCard, { ClassroomCardSkeleton } from "../general/ClassroomCard";
import type { FocusWrapperCardProps } from "../general/FocusWrapperCard";
import FocusWrapperCard from "../general/FocusWrapperCard";

import { mockClassrooms } from "../../mock-data/ClassroomData";
import type { PaginatedClassroomList } from "../../api_interfaces/2023_generated_interfaces/classroom/paginatedClassroomList";
import type { Classroom } from "../../api_interfaces/2023_generated_interfaces/classroom/classroom";
import { useMockData } from "../../mock-data/utils/utils";

export interface ClassroomListDivProps {
    isFocused: FocusWrapperCardProps['isFocused'];
}

// This needs a pagination component when it is being used on desktop (see HorizontalScrollDiv)
const ClassroomListDiv: React.FC<ClassroomListDivProps> = ({ isFocused }) => {

    const { data: classroomsData, isLoading: classroomsDataLoading } = useMockData(classroomsMockData);

    // API_NEEDED - get the classrooms the user is in charge of
    let classrooms: PaginatedClassroomList;

    let classroomsLeading: Classroom[]; //The classrooms led by the user

    if(classroomsData && !classroomsDataLoading) {
        classrooms = classroomsData;
        classroomsLeading = [];

        classrooms.results?.forEach(classroom => {
            if(classroom.leader) {
                classroomsLeading.push(classroom);
            }
        });

        return (
            <div className="flex flex-col w-full min-w-full h-fit items-start gap-4 bg-transparent">
                <div className="flex flex-row w-full min-w-full justify-between">
                    <h3>Manage your classrooms</h3>
                    <Link href="/classroom">Open Classrooms</Link>
                </div>
                <FocusWrapperCard isFocused={isFocused} orientation="col">
                    {mockClassrooms.map((classroom) => <ClassroomCard key={classroom.id} id={classroom.id} 
                        name={classroom.name} numMembers={classroom.numMembers} recentAssignments={classroom.recentAssignments} 
                        pendingMemberUsernames={classroom.pendingMemberUsernames}/>)}
                </FocusWrapperCard>
            </div>
        );
    }
    else {
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
                <FocusWrapperCard isFocused={isFocused} orientation="col">
                    {Array.from({length: 3}, (_, index) => <ClassroomCardSkeleton key={index}/>)}
                </FocusWrapperCard>
            </div>
        );
    }
}

export default ClassroomListDiv;