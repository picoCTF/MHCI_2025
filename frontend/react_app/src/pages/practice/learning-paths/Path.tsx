import "../../Page.css";
import Header from "../../../components/general/PageNavbar";
import { useParams } from "react-router";
import { BreadcrumbItem, Breadcrumbs, Skeleton } from "@heroui/react";
import LearningPathsContentListCard from "../../../components/learning-paths/LearningPathsContentListCard";
import LearningPathOverviewDiv from "../../../components/learning-paths/LearningPathOverviewContentDiv";
import pathData from "../../../mock-data/MockLearningPathResponse.json";
import { useState, type ReactElement } from "react";
import type { LearningPath } from "../../../api_interfaces/learning_path/learningPath";
import { isChallenge } from "../../../api_interfaces/challenge";
import LearningPathChallengeContentDiv from "../../../components/learning-paths/LearningPathChallengeContentDiv";
import LearningPathResourceContentDiv from "../../../components/learning-paths/LearningPathResourceContentDiv";
import { isResourceGroup } from "../../../api_interfaces/resource/resourceGroup";
import LearningPathGameContentDiv from "../../../components/learning-paths/LearningPathGameContentDiv";
import { isGame } from "../../../api_interfaces/2023_generated_interfaces/game/game";

const Path: React.FC<{}> = () => {

    // API_NEEDED - Get the path information using the path's ID
    //              Need to pass the challenge and resource info of the learning path to the children as well
    let params = useParams();
    const id = params.pathID;

    let data: LearningPath = pathData as LearningPath;

    let isComplete = data.;

    let myContent = [<LearningPathOverviewDiv 
        description={data.description}
        difficulty={data.difficulty.difficultyLvl}
        name={data.name}
        numChallenges={data.numChallenges}
        numSolves={data.numSolves}
        prereqs={data.prereqs}
        skills={data.skills}/>];

    data.modules.results.forEach(module => {
        module.items.forEach(item => {
            if(isChallenge(item.content)) {
                //Add the item to the array as a challenge
                myContent.push(<LearningPathChallengeContentDiv 
                    author={item.content.author} 
                    category={item.content.category} 
                    description={item.content.description} 
                    difficulty={item.content.difficulty} 
                    flag={item.content.flag} 
                    hints={item.content.hints} 
                    name={item.content.name} 
                    numSolves={item.content.users_solved} 
                    tags={item.content.tags}/>);
            }
            else if(isResourceGroup(item.content)) {
                myContent.push(<LearningPathResourceContentDiv 
                    resourceList={item.content}/>);
            }
            else if(isGame(item.content)) {
                myContent.push(<LearningPathGameContentDiv game={item.content}/>);
            }
            else {
                myContent.push(item.content as ReactElement);
            }
        })
    })

    let [mainContent, setMainContent] = useState(myContent[0]);

    return (
        <Skeleton className="Page">
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
                        name={data.name} 
                        progress={{
                            color:"primary", 
                            ariaLabel: data.completion + "% complete", 
                            value: data.completion, 
                            endingText: data.completion + "%"
                        }} 
                        list={data.modules}
                    />
                </div>
            </div>
        </Skeleton>
    );
}

export default Path;