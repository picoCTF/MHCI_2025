import ChallengeDiv from "../general/ChallengeDiv";

interface LearningPathChallengeContentDivProps {
    challengeID: number;
}

// FIX_ME - This component is probably not needed. The code can be refactored
const LearningPathChallengeContentDiv: React.FC<LearningPathChallengeContentDivProps> = ({ challengeID }) => {
    
    return (
        <ChallengeDiv challengeID={challengeID}/>
    );
}

export default LearningPathChallengeContentDiv;