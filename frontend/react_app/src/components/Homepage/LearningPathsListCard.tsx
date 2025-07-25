// import { Pagination, PaginationItem } from "@heroui/react";
import { Link } from "@heroui/react";
import LearningPathCard, { type LearningPathCardProps } from "../LearningPaths/LearningPathCard";

interface LearningPathsListCardProps {
    list: LearningPathCardProps[];
}

const LearningPathsListCard: React.FC<LearningPathsListCardProps> = ({ list }) => {
    return (
        <div className="w-[811px] h-fit">
            <div className="flex flex-col w-full min-w-full items-start gap-4">
                <div className="flex flex-row w-full min-w-full items-start justify-between">
                    <h2 className="flex">Try a new learning path</h2>
                    <Link className="flex flex-row" href="/practice/learning-paths">Open All Paths</Link>
                </div>
                <div className="flex flex-row w-full overflow-scroll gap-6">
                    <LearningPathCard description={""} difficulty={undefined} hasProgress={false} link={""} name={""} numCompletedChallenges={0} numSolves={0} numTotalChallenges={0}/>
                    {list.map((item) => (<LearningPathCard description={item["description"]} difficulty={undefined} hasProgress={false} link={""} name={""} numCompletedChallenges={0} numSolves={0} numTotalChallenges={0}/>))}
                </div>
            </div>
        </div>
    );
}

export default LearningPathsListCard;