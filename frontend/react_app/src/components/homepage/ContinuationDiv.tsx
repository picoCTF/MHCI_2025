import LearningPathCard, { type LearningPathCardProps } from "../general/LearningPathCard";
import type { FocusWrapperCardProps } from "../general/FocusWrapperCard";
import FocusWrapperCard from "../general/FocusWrapperCard";
import type { ChallengeCardProps } from "../general/ChallengeCard";
import ChallengeCard from "../general/ChallengeCard";
// import HorizontalScrollDiv from "../general/HorizontalScrollDiv";

interface PathProps {
    type: "path";
    isFocused: FocusWrapperCardProps["isFocused"];
    lastItem: LearningPathCardProps;
}

interface ChallengeProps {
    type: "challenge";
    isFocused: FocusWrapperCardProps["isFocused"];
    lastItem: ChallengeCardProps;
}

type ContinuationDivProps = PathProps | ChallengeProps;

// This needs a pagination component when it is being used on desktop
const ContinuationDiv: React.FC<ContinuationDivProps> = ( props ) => {

    let item = <></>;

    if(props.type === "path") {
        item = 
            <LearningPathCard description={props.lastItem.description}
        difficulty={props.lastItem.difficulty}
        hasProgress={props.lastItem.hasProgress}
        id={props.lastItem.id}
        link={props.lastItem.link}
        name={props.lastItem.name}
        numCompletedChallenges={props.lastItem.numCompletedChallenges}
        numSolves={props.lastItem.numSolves}
        numTotalChallenges={props.lastItem.numTotalChallenges} 
        variant={"expanded"}/>
    }
    else {
        item = <ChallengeCard author={props.lastItem.author} 
            category={props.lastItem.category} 
            description={props.lastItem.description} 
            difficulty={props.lastItem.difficulty} 
            flag={props.lastItem.flag} 
            hints={props.lastItem.hints} 
            name={props.lastItem.name} 
            numSolves={props.lastItem.numSolves} 
            tags={props.lastItem.tags}/>
    }

    return (
        <div className="flex w-full h-fit">
            {/* <HorizontalScrollDiv isFocused={isFocused} title={"Try a new learning path"}>
                {list.map((item) => (<LearningPathCard key={item.id} description={item.description} difficulty={item.difficulty} hasProgress={item.hasProgress} id={item.id} link={item.link} name={item.name} numCompletedChallenges={item.numCompletedChallenges} numSolves={item.numSolves} numTotalChallenges={item.numTotalChallenges}/>))}
            </HorizontalScrollDiv> */}
            <div className="flex flex-col w-full min-w-full items-start gap-4">
                <div className="flex flex-row w-full min-w-full items-start justify-between">
                    <h3>Continue where you left off</h3>
                </div>
                <FocusWrapperCard isFocused={props.isFocused} orientation="row">
                    {item}
                </FocusWrapperCard>
            </div>
        </div>
    );
}

export default ContinuationDiv;