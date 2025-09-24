import AssignmentCard, { type AssignmentCardProps } from "../general/AssignmentCard";
import FocusWrapperCard, { type FocusWrapperCardProps } from "./FocusWrapperCard";

export interface AssignmentsDueListDivProps {
    isFocused: FocusWrapperCardProps['isFocused'];
    list: AssignmentCardProps[];
}

// Shows the assignments that are due soon.
// These should be in the order that they are due, with the most urgent assignments closest to the front
// This needs a pagination components when it is being used on desktop
const AssignmentsDueListDiv: React.FC<AssignmentsDueListDivProps> = ({ isFocused, list }) => {
    return (
        <div className="flex flex-col w-[811px] h-fit gap-6">
            <div className="flex flex-col items-start">
                <h3>You have assignments due soon!</h3>
            </div>
            <FocusWrapperCard isFocused={isFocused}>
                <div className="flex flex-row w-full gap-6 overflow-scroll">
                    {list.map((item) => (<AssignmentCard key={item.id} name={item.name} classroomName={item.classroomName} 
                        completedChallenges={item.completedChallenges} id={item.id} totalChallenges={item.totalChallenges} 
                        time={item.time}/>))}
                </div>
            </FocusWrapperCard>
        </div>
    );
}

export default AssignmentsDueListDiv;