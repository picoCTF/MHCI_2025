import ChallengeDiv from "../general/ChallengeDiv";

interface LearningPathChallengeContentDivProps {
    challengeID: number;
}

const LearningPathChallengeContentDiv: React.FC<LearningPathChallengeContentDivProps> = ({ challengeID }) => {
    
    return (
        <ChallengeDiv challengeID={challengeID}/>
    );
}

export default LearningPathChallengeContentDiv;