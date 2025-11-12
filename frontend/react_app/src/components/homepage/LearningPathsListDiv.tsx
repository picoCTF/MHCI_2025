import { Link } from "@heroui/react";
import LearningPathCard, { type LearningPathCardProps } from "../general/LearningPathCard";
import type { FocusWrapperCardProps } from "../general/FocusWrapperCard";
import FocusWrapperCard from "../general/FocusWrapperCard";
// import HorizontalScrollDiv from "../general/HorizontalScrollDiv";

export interface LearningPathsListDivProps {
    isFocused: FocusWrapperCardProps["isFocused"];
    list: LearningPathCardProps[];
}

// This needs a pagination component when it is being used on desktop
const LearningPathsListDiv: React.FC<LearningPathsListDivProps> = ({ isFocused, list }) => {
    return (
        <div className="flex w-full h-fit">
            {/* <HorizontalScrollDiv isFocused={isFocused} title={"Try a new learning path"}>
                {list.map((item) => (<LearningPathCard key={item.id} description={item.description} difficulty={item.difficulty} hasProgress={item.hasProgress} id={item.id} link={item.link} name={item.name} numCompletedChallenges={item.numCompletedChallenges} numSolves={item.numSolves} numTotalChallenges={item.numTotalChallenges}/>))}
            </HorizontalScrollDiv> */}
            <div className="flex flex-col w-full min-w-full items-start gap-4">
                <div className="flex flex-row w-full min-w-full items-start justify-between">
                    <h3>Try a new learning path</h3>
                    <Link className="flex flex-row" href="/practice/learning-paths">Open All Paths</Link>
                </div>
                <FocusWrapperCard isFocused={isFocused} orientation="row">
                    {list.map((item) => (<LearningPathCard key={item.id} description={item.description} difficulty={item.difficulty} hasProgress={item.hasProgress} id={item.id} link={item.link} name={item.name} numCompletedChallenges={item.numCompletedChallenges} numSolves={item.numSolves} numTotalChallenges={item.numTotalChallenges} variant={"standard"}/>))}
                </FocusWrapperCard>
            </div>
        </div>
    );
}

export default LearningPathsListDiv;