import "../../Page.css";
import Header from "../../../components/general/PageNavbar";
// import { useParams } from "react-router";
import { BreadcrumbItem, Breadcrumbs, Button, Skeleton } from "@heroui/react";
import LearningPathsContentNavCard, { LearningPathsContentNavCardSkeleton } from "../../../components/learning-paths/LearningPathsContentNavCard";
import { LearningPathContentOverviewDivSkeleton } from "../../../components/learning-paths/LearningPathOverviewContentDiv";
import { useState } from "react";
import { useMockData } from "../../../mock-data/utils/utils";
import type { LPModuleList } from "../../../api_interfaces/learning_path/learningPathModuleList";
import { Icon } from "@iconify/react";
import type { LearningPath } from "../../../api_interfaces/learning_path/learningPath";

import pathMockData from "../../../mock-data/learning_paths/MockLearningPathResponse.json";
import moduleListMockData from "../../../mock-data/learning_paths/MockLearningPathModuleListResponse.json";
import LearningPathContent from "../../../components/learning-paths/LearningPathContent";
import LearningPathCard from "../../../components/general/LearningPathCard";

const Path: React.FC<{}> = () => {

    // API_NEEDED - Get the path information using the path's ID
    //              Need to pass the challenge and resource info of the learning path to the children as well
    // let params = useParams();
    // const id = params.pathID;

    //let data: LearningPath = pathData as LearningPath;

    let [mainContent, setMainContent] = useState<[number, Function] | null>(null);
    let [contentIndex, setContentIndex] = useState(0);
    let [prevButtonIsDisabled, setPrevButtonIsDisabled] = useState(true);
    let [nextButtonIsDisabled, setNextButtonIsDisabled] = useState(false);

    function updateContentIndex(x: number, totalModuleItems: number): void {
        if(x >= totalModuleItems-1) {
            setContentIndex(totalModuleItems-1);
            setNextButtonIsDisabled(true);
        }
        else if(x <= 0) {
            setContentIndex(0);
            setPrevButtonIsDisabled(true);
        }
        else {
            setContentIndex(x);
            setPrevButtonIsDisabled(false);
            setNextButtonIsDisabled(false);
        }
    }

    //API_NEEDED - Get the data for the learning path
    //API_NEEDED - Get the list of module IDs based on the learning path's ID
    const { data: pathData, isLoading: pathDataLoading } = useMockData<LearningPath>(pathMockData);
    const { data: moduleIDData, isLoading: moduleIDDataLoading } = useMockData<LPModuleList>(moduleListMockData);

    if(pathData && !pathDataLoading && moduleIDData && !moduleIDDataLoading) {

        if(pathData.completed) {
            return (
                <div className="Page">
                    <Header/>
                    <div className="flex flex-col w-full px-32 py-10 gap-6 items-left">
                        <Breadcrumbs>
                            <BreadcrumbItem isDisabled>Practice</BreadcrumbItem>
                            <BreadcrumbItem href="/practice/learning-paths">Learning Paths</BreadcrumbItem>
                            <BreadcrumbItem href="/practice/learning-paths/page">Learning Path Page</BreadcrumbItem>
                        </Breadcrumbs>

                        <main className="flex flex-row w-full h-fit gap-16">
                            <LearningPathCard description={pathData.description} difficulty={pathData.difficulty} hasProgress={true} id={pathData.id} link={"#"} name={pathData.name} numCompletedChallenges={pathData.numCompletedTasks} numSolves={pathData.numSolves} numTotalChallenges={pathData.numTasks} variant={"expanded"}/>
                        </main>
                    </div>
                </div>
            );
        }
        else {
            let contentList: number[] = [];

            moduleIDData.results.forEach(moduleID => {
                contentList.push(moduleID);
            })

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
                            <main className="flex flex-col w-full gap-20">
                                <LearningPathContent path={pathData} contentInfo={mainContent}/>
                                <div className="flex flex-row w-full justify-between">
                                    <Button variant="flat" className="bg-primary-50 gap-2" isDisabled={prevButtonIsDisabled} onPress={() => (
                                        updateContentIndex(contentIndex-1, contentList.length)
                                        )}>
                                        <Icon icon={"material-symbols:arrow-back"} className="text-primary-500"/>
                                        <p className="text-primary-500">Prev</p>
                                    </Button>
                                    <Button variant="flat" className="bg-primary-50 gap-2" isDisabled={nextButtonIsDisabled} onPress={() => (
                                        updateContentIndex(contentIndex+1, contentList.length)
                                        )}>
                                        <p className="text-primary-500">Next</p>
                                        <Icon icon={"material-symbols:arrow-forward"} className="text-primary-500"/>
                                    </Button>
                                </div>
                            </main>
                            <LearningPathsContentNavCard 
                                updateFunction={setMainContent}
                                name={pathData.name} 
                                progress={{
                                    color:"primary", 
                                    ariaLabel: pathData.numCompletedTasks + "% complete", 
                                    value: (pathData.numCompletedTasks), 
                                    endingText: pathData.numCompletedTasks + "%"
                                }} 
                                moduleIDs={moduleIDData as LPModuleList}
                            />
                        </div>
                    </div>
                </div>
            );
        }
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
                        <LearningPathsContentNavCardSkeleton/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Path;