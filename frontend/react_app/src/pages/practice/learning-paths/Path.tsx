import "../../Page.css";
import Header from "../../../components/General/PageNavbar";
import { useParams } from "react-router";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import LearningPathsContentListCard from "../../../components/learning-paths/LearningPathsAccordion";
import LearningPathOverviewDiv from "../../../components/learning-paths/LearningPathOverviewDiv";
import type { ReactNode } from "react";

const Path: React.FC<{}> = () => {

    // API_NEEDED - Get the path information using the path's ID
    //              Need to pass the challenge and resource info of the learning path to the children as well
    let params = useParams();
    const id = params.pathID;

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
                    <LearningPathOverviewDiv 
                        description="This is a test description. I'm typing a long string to see how text wrapping looks: aaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaa aa aa."   
                        difficulty={"Easy"} 
                        name={"My Path"} 
                        numChallenges={0} 
                        numSolves={0} 
                        prereqs={["Prereq 1", "Prereq 2", "Prereq 3", "Prereq 4", "Prereq 5", "Prereq 6"]} 
                        skills={["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6"]}
                    />
                    <LearningPathsContentListCard 
                        name={"My Path"} 
                        progress={{
                            color:"primary", 
                            ariaLabel:"temp", 
                            value: 0.5, 
                            endingText: "50%"
                        }} 
                        list={[
                            {
                                item: {},
                                itemProgress: {},
                                children: []
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default Path;