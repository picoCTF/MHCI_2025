// import { Pagination, PaginationItem } from "@heroui/react";
import { Link } from "@heroui/react";
import LearningPathCard, { type LearningPathCardProps } from "../LearningPaths/LearningPathCard";

export interface LearningPathsListDivProps {
    list: LearningPathCardProps[];
}

const LearningPathsListDiv: React.FC<LearningPathsListDivProps> = ({ list }) => {
    return (
        <div className="w-[811px] h-fit">
            <div className="flex flex-col w-full min-w-full items-start gap-4">
                <div className="flex flex-row w-full min-w-full items-start justify-between">
                    <h2 className="flex">Try a new learning path</h2>
                    <Link className="flex flex-row" href="/practice/learning-paths">Open All Paths</Link>
                </div>
                <div className="flex flex-row w-full overflow-scroll gap-6">
                    {list.map((item) => (<LearningPathCard description={item.description} difficulty={item.difficulty} hasProgress={item.hasProgress} id={item.id} link={item.link} name={item.link} numCompletedChallenges={item.numCompletedChallenges} numSolves={item.numSolves} numTotalChallenges={item.numTotalChallenges}/>))}
                </div>
            </div>
        </div>
    );
}

export default LearningPathsListDiv;