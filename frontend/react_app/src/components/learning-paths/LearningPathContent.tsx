import type { LearningPath } from "../../api_interfaces/learning_path/learningPath";
import type { LPTask } from "../../api_interfaces/learning_path/learningPathTask";
import { useMockData } from "../../mock-data/utils/utils";
import LearningPathOverviewContentDiv from "./LearningPathOverviewContentDiv";
import taskMockData from "../../mock-data/learning_paths/MockLearningPathTaskResponse.json";
import ChallengeDiv, { ChallengeDivSkeleton } from "../general/ChallengeDiv";
import LearningPathResourceContentDiv from "./LearningPathResourceContentDiv";
import LearningPathGameContentDiv from "./LearningPathGameContentDiv";

export interface LearningPathContentProps {
    path: LearningPath;
    contentInfo: [number, Function] | null;
}

const LearningPathContent: React.FC<LearningPathContentProps> = ({ path, contentInfo }) => {

    //API_NEEDED - Get the module item from the API
    const { data: taskData, isLoading: taskDataLoading } = useMockData<LPTask>(taskMockData);

    if(contentInfo == null) {
        return <LearningPathOverviewContentDiv 
            description={path.description}
            difficulty={path.difficulty.difficultyLvl}
            name={path.name}
            numChallenges={path.numTasks}
            numSolves={path.numSolves}
            prereqs={path.prereqs}
            skills={path.skills}/>;
    }

    //FIX_ME - Make it so that the type controls which skeleton appears
    if(taskData && !taskDataLoading) {
        console.log(taskData.contentType);
        switch(taskData.contentType) {
            case "G": {
                return <LearningPathGameContentDiv gameID={taskData.contentID}/>;
            }
            case "H": {
                //FIX_ME - Parse the HTML string and display it
                return <h2>Parse HTML and put it here</h2>;
            }
            case "M": {
                //FIX_ME - Parse the markdown and display it
                return <h2>Parse markdown and put it here</h2>;
            }
            case "R": {
                return <LearningPathResourceContentDiv resourceGroupID={taskData.id}/>;
            }
            default: {
                //Challenge Case
                return <ChallengeDiv challengeID={taskData.contentID}/>;
            }
        }
    }
    else {
        return <ChallengeDivSkeleton/>;
    }
}

export default LearningPathContent;