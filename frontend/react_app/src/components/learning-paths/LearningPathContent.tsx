import type { LearningPath } from "../../api_interfaces/learning_path/learningPath";
import type { LPTask } from "../../api_interfaces/learning_path/learningPathTask";
import { useMockData } from "../../mock-data/utils/utils";
import LearningPathOverviewContentDiv from "./LearningPathOverviewContentDiv";
import taskMockData from "../../mock-data/learning_paths/MockLearningPathTaskResponse.json";

export interface LearningPathContentProps {
    path: LearningPath;
    contentInfo: [number, Function] | null;
}

const LearningPathContent: React.FC<LearningPathContentProps> = ({ path, contentInfo }) => {

    if(!contentInfo) {
        return <LearningPathOverviewContentDiv 
            description={path.description}
            difficulty={path.difficulty.difficultyLvl}
            name={path.name}
            numChallenges={path.numChallenges}
            numSolves={path.numSolves}
            prereqs={path.prereqs}
            skills={path.skills}/>;
    }

    //API_NEEDED - Get the module item from the API
    const { data: taskData, isLoading: taskDataLoading, refetch: refetchTask } = useMockData<LPTask>(taskMockData);

    if(taskData && !taskDataLoading) {
        return (
            <div className="flex flex-col w-full h-full min-h-fit gap-8">
                <div className="flex flex-col text-start gap-4">
                        <h2>{"REPLACE ME"}</h2>
                        <p>{"REPLACE ME"}</p>
                        {/* {resourceList.resources.map((resource) => (
                            resource.type == "Video" ? 
                                <VideoResourceCard description={resource.description} youtubeID={resource.link}/> : 
                                <PrimerResourceCard/>
                        ))} */}
                </div>
            </div>
        );
    }
}

export default LearningPathContent;