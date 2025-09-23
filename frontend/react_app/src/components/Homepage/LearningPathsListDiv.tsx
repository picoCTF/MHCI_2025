// import { Pagination, PaginationItem } from "@heroui/react";
import { Link } from "@heroui/react";
import LearningPathCard, { type LearningPathCardProps } from "../learning-paths/LearningPathCard";
import type { FocusWrapperCardProps } from "./FocusWrapperCard";
import FocusWrapperCard from "./FocusWrapperCard";

export interface LearningPathsListDivProps {
    isFocused: FocusWrapperCardProps["isFocused"];
    list: LearningPathCardProps[];
}

// This needs a pagination component when it is being used on desktop
const LearningPathsListDiv: React.FC<LearningPathsListDivProps> = ({ isFocused, list }) => {
    return (
        <div className="w-[811px] h-fit">
            <div className="flex flex-col w-full min-w-full items-start gap-4">
                <div className="flex flex-row w-full min-w-full items-start justify-between">
                    <h3>Try a new learning path</h3>
                    <Link className="flex flex-row" href="/practice/learning-paths">Open All Paths</Link>
                </div>
                <FocusWrapperCard isFocused={isFocused}>
                    <div className="flex flex-row w-full overflow-scroll gap-6">
                        {list.map((item) => (<LearningPathCard key={item.id} description={item.description} difficulty={item.difficulty} hasProgress={item.hasProgress} id={item.id} link={item.link} name={item.link} numCompletedChallenges={item.numCompletedChallenges} numSolves={item.numSolves} numTotalChallenges={item.numTotalChallenges}/>))}
                    </div>
                </FocusWrapperCard>
            </div>
        </div>
    );
}

export default LearningPathsListDiv;