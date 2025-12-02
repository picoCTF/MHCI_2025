import "../../Page.css";
import Header from "../../../components/general/PageNavbar";
// import { useParams } from "react-router";
import { BreadcrumbItem, Breadcrumbs, Skeleton } from "@heroui/react";
import LearningPathsContentListCard, { LearningPathsContentListCardSkeleton } from "../../../components/learning-paths/LearningPathsContentListCard";
import LearningPathOverviewDiv, { LearningPathContentOverviewDivSkeleton } from "../../../components/learning-paths/LearningPathOverviewContentDiv";
import pathMockData from "../../../mock-data/MockLearningPathResponse.json";
import { useState, type ReactNode } from "react";
import { isChallenge, type Challenge } from "../../../api_interfaces/challenge";
import LearningPathChallengeContentDiv from "../../../components/learning-paths/LearningPathChallengeContentDiv";
import LearningPathResourceContentDiv from "../../../components/learning-paths/LearningPathResourceContentDiv";
import { isResourceGroup } from "../../../api_interfaces/resource/resourceGroup";
import LearningPathGameContentDiv from "../../../components/learning-paths/LearningPathGameContentDiv";
import { isGame } from "../../../api_interfaces/2023_generated_interfaces/game/game";
import { useMockData } from "../../../mock-data/utils";
import type { DifficultyProp } from "../../../components/general/DifficultyChip";
import type { LPModuleList } from "../../../api_interfaces/learning_path/learningPathModuleList";

const Path: React.FC<{}> = () => {

    // API_NEEDED - Get the path information using the path's ID
    //              Need to pass the challenge and resource info of the learning path to the children as well
    // let params = useParams();
    // const id = params.pathID;

    //let data: LearningPath = pathData as LearningPath;

    function refreshPath() {
        //Update everything in the path to reflect the completed items
        
    }

    let [mainContent, setMainContent] = useState<ReactNode>(null);

    //API_NEEDED - get refreshData function from API
    const { data: pathData, isLoading: pathDataLoading } = useMockData(pathMockData);

    if(pathData && !pathDataLoading) {
        let myContent = [<LearningPathOverviewDiv 
            description={pathData.description}
            difficulty={pathData.difficulty.difficultyLvl as DifficultyProp["difficultyLvl"]}
            name={pathData.name}
            numChallenges={pathData.numChallenges}
            numSolves={pathData.numSolves}
            prereqs={pathData.prereqs}
            skills={pathData.skills}/>];

        pathData.modules.results.forEach(module => {
            module.items.forEach(item => {
                if(isChallenge(item.content)) {
                    //Add the item to the array as a challenge
                    myContent.push(<LearningPathChallengeContentDiv 
                        author={(item.content as Challenge).author} 
                        category={(item.content as Challenge).category} 
                        description={(item.content as Challenge).description} 
                        difficulty={(item.content as Challenge).difficulty} 
                        flag={(item.content as Challenge).flag} 
                        hints={(item.content as Challenge).hints} 
                        name={(item.content as Challenge).name} 
                        numSolves={(item.content as Challenge).users_solved} 
                        tags={(item.content as Challenge).tags}/>);
                }
                else if(isResourceGroup(item.content)) {
                    myContent.push(<LearningPathResourceContentDiv 
                        resourceGroupID={item.id}/>);
                }
                else if(isGame(item.content)) {
                    myContent.push(<LearningPathGameContentDiv game={item.content}/>);
                }
                else {
                    myContent.push(<>{item.content}</>); //Fix the type issue here
                }
            })
        })

        if(mainContent == null) {
            setMainContent(myContent[0]);
        }

        return (
            <div className="Page">
                <Header/>
                <div className="flex flex-col w-full px-32 py-10 gap-6 items-left">
                    <Breadcrumbs>
                        <BreadcrumbItem isDisabled>Practice</BreadcrumbItem>
                        <BreadcrumbItem href="/practice/learning-paths">Learning Paths</BreadcrumbItem>
                        <BreadcrumbItem href="/practice/learning-paths/page">Learning Path Page</BreadcrumbItem>
                    </Breadcrumbs>

                    <div className="flex flex-row w-full h-fit gap-16">
                        {mainContent}
                        <LearningPathsContentListCard 
                            updateFunction={setMainContent}
                            name={pathData.name} 
                            progress={{
                                color:"primary", 
                                ariaLabel: pathData.numCompletedTasks + "% complete", 
                                value: (pathData.numCompletedTasks), 
                                endingText: pathData.numCompletedTasks + "%"
                            }} 
                            list={pathData.modules as LPModuleList}
                        />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="Page">
                <Header/>
                <div className="flex flex-col w-full px-32 py-10 gap-6 items-left">
                    <Skeleton className="flex w-fit rounded-full">
                        <Breadcrumbs>
                            <BreadcrumbItem isDisabled>Practice</BreadcrumbItem>
                            <BreadcrumbItem href="/practice/learning-paths">Learning Paths</BreadcrumbItem>
                            <BreadcrumbItem href="/practice/learning-paths/page">Learning Path Page</BreadcrumbItem>
                        </Breadcrumbs>
                    </Skeleton>

                    <div className="flex flex-row w-full h-fit gap-16">
                        <LearningPathContentOverviewDivSkeleton/>
                        <LearningPathsContentListCardSkeleton/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Path;