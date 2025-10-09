import AssignmentCard from "../general/AssignmentCard";
import FocusWrapperCard, { type FocusWrapperCardProps } from "../general/FocusWrapperCard";
import data from "../../mock-data/MockPagedAssignmentResponse.json";
import type { PaginatedAssignmentResponseList } from "../../api_interfaces/2023_generated_interfaces/paginatedAssignmentResponse";
import type { AssignmentResponse } from "../../api_interfaces/2023_generated_interfaces/assignmentResponse";

export interface AssignmentsDueListDivProps {
    isFocused: FocusWrapperCardProps['isFocused'];
}

// Shows the assignments that are due soon.
// These should be in the order that they are due, with the most urgent assignments closest to the front
// This needs a pagination components when it is being used on desktop
const AssignmentsDueListDiv: React.FC<AssignmentsDueListDivProps> = ({ isFocused }) => {

    /* API_NEEDED - Get the list of assignments that are due for the user */
    
    // let parsedData = JSON.parse(mockJSON); //Make the API call here
    let assignments: PaginatedAssignmentResponseList = data;

    //Filter assignments down to those that are not completed/active
    let filteredAssignments: AssignmentResponse[] = [];

    assignments.results?.forEach(assignment => {
        if(assignment.active)
        {
            filteredAssignments.push(assignment);
        }
    })

    function getNumCompletedChallenges(assignment: AssignmentResponse) {
        let numCompletedChallenges = 0;
        assignment.challenges.forEach(challenge => {
            if(challenge.solved_by_due_date) {
                numCompletedChallenges++;
            }
        })
        return numCompletedChallenges;
    }

    return (
        <div className="flex flex-col w-[811px] h-fit gap-6">
            <div className="flex flex-col items-start">
                <h3>You have assignments due soon!</h3>
            </div>
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

export default AssignmentsDueListDiv;