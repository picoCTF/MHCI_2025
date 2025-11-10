import "../../Page.css";
import Header from "../../../components/General/PageNavbar";
import { useParams } from "react-router";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import LearningPathsContentListCard from "../../../components/learning-paths/LearningPathsAccordion";
import LearningPathOverviewDiv from "../../../components/learning-paths/LearningPathOverviewContentDiv";
import pathData from "../../../mock-data/MockLearningPathResponse.json";
import { useState } from "react";
import type { LearningPath } from "../../../api_interfaces/learning_path/learningPath";
import { isChallenge } from "../../../api_interfaces/challenge";
import LearningPathChallengeContentDiv from "../../../components/learning-paths/LearningPathChallengeContentDiv";
import LearningPathResourceContentDiv from "../../../components/learning-paths/LearningPathResourceContentDiv";

const Path: React.FC<{}> = () => {

    // API_NEEDED - Get the path information using the path's ID
    //              Need to pass the challenge and resource info of the learning path to the children as well
    let params = useParams();
    const id = params.pathID;

    let data: LearningPath = pathData as LearningPath;

    let myData = [<LearningPathOverviewDiv 
        description={data.description}
        difficulty={data.difficulty.difficultyLvl}
        name={data.name}
        numChallenges={data.numChallenges}
        numSolves={data.numSolves}
        prereqs={data.prereqs}
        skills={data.skills}/>]

    data.modules.results.forEach(module => {
        module.items.forEach(item => {
            if(isChallenge(item.content)) {
                //Add the item to the array as a challenge
                myData.push(<LearningPathChallengeContentDiv 
                    author={item.content.author} 
                    category={item.content.category} 
                    description={item.content.description} 
                    difficulty={item.content.difficulty} 
                    flag={item.content.flag} 
                    hints={item.content.hints} 
                    name={item.content.name} 
                    numSolves={item.content.users_solved} 
                    tags={item.content.tags}/>)
            }
            else {
                myData.push(<LearningPathResourceContentDiv 
                    resourceList={item.content}/>);
            }
        })
    })

    let [mainContent, setMainContent] = useState(myData[0]);

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
        </div>
    );
}

export default Path;