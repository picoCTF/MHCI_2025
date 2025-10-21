import "../../Page.css";
import Header from "../../../components/General/PageNavbar";
import { useParams } from "react-router";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import LearningPathsContentListCard from "../../../components/learning-paths/LearningPathsAccordion";
import LearningPathOverviewDiv from "../../../components/learning-paths/LearningPathOverviewDiv";

export interface PathDetailProps {
}

const PathDetail: React.FC<PathDetailProps> = ({  }) => {

    // API_NEEDED - Get the path detail information using the path's ID
    let params = useParams();
    const id = params.pathID;

    return (
        <div className="Page">
            <Header/>
            <div className="flex flex-col w-full px-32 py-10 gap-6 items-center">
                <Breadcrumbs>
                    <BreadcrumbItem href="/practice/learning-paths">Practice</BreadcrumbItem>
                    <BreadcrumbItem href="/practice/learning-paths">Learning Paths</BreadcrumbItem>
                    <BreadcrumbItem href="/practice/learning-paths/page">Learning Path Page</BreadcrumbItem>
                </Breadcrumbs>

                <div className="flex flex-row w-full h-fit gap-64">
                    <LearningPathOverviewDiv 
                        difficulty={"Easy"} 
                        name={"My Path"} 
                        numChallenges={0} 
                        numSolves={0} 
                        prereqs={[]} 
                        skills={[]}
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

export default PathDetail;