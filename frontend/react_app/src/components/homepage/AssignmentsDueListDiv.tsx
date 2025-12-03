import {Button, Skeleton} from "@heroui/react";
import AssignmentCard, { AssignmentCardSkeleton } from "../general/AssignmentCard";
import FocusWrapperCard, { type FocusWrapperCardProps } from "../general/FocusWrapperCard";
import assignmentsMockData from "../../mock-data/MockPagedAssignmentResponse.json";
import type { PaginatedAssignmentResponseList } from "../../api_interfaces/2023_generated_interfaces/assignment/paginatedAssignmentResponse";
import type { AssignmentResponse } from "../../api_interfaces/2023_generated_interfaces/assignment/assignmentResponse";
import { useMockData } from "../../mock-data/utils";

export interface AssignmentsDueListDivProps {
    isFocused: FocusWrapperCardProps['isFocused'];
}

// Shows the assignments that are due soon.
// These should be in the order that they are due, with the most urgent assignments closest to the front
// This needs a pagination components when it is being used on desktop
const AssignmentsDueListDiv: React.FC<AssignmentsDueListDivProps> = ({ isFocused }) => {

    function getNumCompletedChallenges(assignment: AssignmentResponse) {
        let numCompletedChallenges = 0;
        assignment.challenges.forEach(challenge => {
            if(challenge.solved_by_due_date) {
                numCompletedChallenges++;
            }
        })
        return numCompletedChallenges;
    }

    const { data: assignmentsData, isLoading: assignmentsDataLoading, refetch: refetchAssignments } = useMockData(assignmentsMockData);

    /* API_NEEDED - Get the list of assignments that are due for the user */

    // let parsedData = JSON.parse(mockJSON); //Make the API call here
    let assignments: PaginatedAssignmentResponseList;

    //Filter assignments down to those that are not completed/active
    let filteredAssignments: AssignmentResponse[];

    if(assignmentsData && !assignmentsDataLoading) {

        assignments = assignmentsData;
        filteredAssignments = [];

        assignments.results?.forEach(assignment => {
            if(assignment.active)
            {
                filteredAssignments.push(assignment);
            }
        })

        return (
            <div className="flex flex-col w-full h-fit gap-6">
                <h3>You have assignments due soon! <Button onPress={refetchAssignments}>Demo refetch assignments</Button></h3>
                <FocusWrapperCard isFocused={isFocused} orientation="row">
                    {filteredAssignments.map((assignment) => (
                        <AssignmentCard key={assignment.id} name={assignment.name}
                            classroomName={assignment.classroom.name}
                            completedChallenges={getNumCompletedChallenges(assignment)}
                            due_date={assignment.due_date} id={assignment.id}
                            totalChallenges={assignment.challenges.length}/>
                    ))}
                </FocusWrapperCard>
            </div>
        );
    }
    else {
        return (
            <div className="flex flex-col w-full h-fit gap-6">
                <Skeleton className="w-fit rounded-full">
                    <h3>You have assignments due soon!</h3>
                </Skeleton>
                <FocusWrapperCard isFocused={isFocused} orientation="row">
                    {Array.from({length: 3}, (_, index) => (
                        <AssignmentCardSkeleton key={index}/>
                    ))}
                </FocusWrapperCard>
            </div>
        );
    }
}

export default AssignmentsDueListDiv;
