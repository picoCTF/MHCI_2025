import { Skeleton } from "@heroui/react";
import type { ResourceGroup } from "../../api_interfaces/resource/resourceGroup";
import PrimerResourceCard from "../general/PrimerResourceCard";
import VideoResourceCard from "../general/VideoResourceCard";

interface LearningPathResourceContentDivProps {
    resourceList: ResourceGroup;
}

const LearningPathResourceContentDiv: React.FC<LearningPathResourceContentDivProps> = ({ resourceList }) => {
    return (
        <div className="flex flex-col w-full h-full min-h-fit gap-8">
            <div className="flex flex-col text-start gap-4">
                <Skeleton>
                    <h2>{resourceList.name}</h2>
                    <p>{resourceList.description}</p>
                    {resourceList.resources.map((resource) => (
                        resource.type == "Video" ? 
                            <VideoResourceCard description={resource.description} youtubeID={resource.link}/> : 
                            <PrimerResourceCard/>
                    ))}
                </Skeleton>
            </div>
        </div>
    );
}

export default LearningPathResourceContentDiv;