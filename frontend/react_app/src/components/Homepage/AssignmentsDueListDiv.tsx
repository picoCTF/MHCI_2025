import AssignmentCard, { type AssignmentCardProps } from "../general/AssignmentCard";

export interface AssignmentsDueListDivProps {
    list: AssignmentCardProps[];
}

const AssignmentsDueListDiv: React.FC<AssignmentsDueListDivProps> = ({ list }) => {
    return (
        <div className="flex flex-col w-[811px] h-fit gap-6">
            <div className="flex flex-col items-start">
                <h3>You have assignments due soon!</h3>
            </div>
            <div className="flex flex-row w-full overflow-scroll gap-6">
                {list.map((item) => (<AssignmentCard key={item.id} name={item.name} classroomName={item.classroomName} completedChallenges={item.completedChallenges} id={item.id} totalChallenges={item.totalChallenges} time={item.time}/>))}
            </div>
        </div>
    );
}

export default AssignmentsDueListDiv;