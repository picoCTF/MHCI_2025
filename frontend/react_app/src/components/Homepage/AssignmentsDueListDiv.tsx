import AssignmentCard, { type AssignmentCardProps } from "../General/AssignmentCard";

export interface AssignmentsDueListDivProps {
    list: AssignmentCardProps[];
}

const AssignmentsDueListDiv: React.FC<AssignmentsDueListDivProps> = ({ list }) => {
    return (
        <div className="flex flex-col w-[811px] h-fit gap-6">
            <div className="flex flex-col items-start">
                <h2>You have assignments due soon!</h2>
            </div>
            <div className="flex flex-row overflow-scroll gap-6">
                {list.map((item) => (<AssignmentCard name={item.name} classroomName={item.classroomName} completedChallenges={item.completedChallenges} totalChallenges={item.totalChallenges} time={item.time}/>))}
            </div>
        </div>
    );
}

export default AssignmentsDueListDiv;