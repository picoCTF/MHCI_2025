import "../../Page.css";
import Header from "../../../components/general/PageNavbar";
// import { useParams } from "react-router";
import { BreadcrumbItem, Breadcrumbs, Button, Chip, Skeleton } from "@heroui/react";
import LearningPathsContentNavCard, { LearningPathsContentNavCardSkeleton } from "../../../components/learning-paths/LearningPathsContentNavCard";
import { LearningPathContentOverviewDivSkeleton } from "../../../components/learning-paths/LearningPathOverviewContentDiv";
import { useState } from "react";
import { useMockData } from "../../../mock-data/utils/utils";
import type { LPModuleList } from "../../../api_interfaces/learning_path/learningPathModuleList";
import { Icon } from "@iconify/react";
import type { LearningPath } from "../../../api_interfaces/learning_path/learningPath";

import pathMockData from "../../../mock-data/learning_paths/MockLearningPathResponse.json";
import nextPathsMockData from "../../../mock-data/learning_paths/MockPagedLearningPathResponse.json";
import moduleListMockData from "../../../mock-data/learning_paths/MockLearningPathModuleListResponse.json";
import LearningPathContent from "../../../components/learning-paths/LearningPathContent";
import LearningPathCard, { LearningPathCardSkeleton } from "../../../components/general/LearningPathCard";
import BadgeSVG from "../../../components/general/BadgeSVG";
import type { LearningPathList } from "../../../api_interfaces/learning_path/learningPathList";
import { useNavigate } from "react-router-dom";

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

    let [completionIndex, setCompletionIndex] = useState<1 | 2 | 3 | 4>(1);

    const navigate = useNavigate();

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

    //API_NEEDED - Get the next 2 recommended learning paths based off of what the user has completed
    const { data: nextPathsData, isLoading: nextPathsDataLoading } = useMockData<LearningPathList>(nextPathsMockData);

    if(pathData && !pathDataLoading && moduleIDData && !moduleIDDataLoading) {

        if(pathData.completed) {

            switch(completionIndex) {
                case 2: {
                    setTimeout(() => (setCompletionIndex(3)), 3000);

                    return (
                        <div className="Page">
                            <Header/>
                            <div className="flex flex-col w-full px-32 py-10 gap-6 items-left">
                                <Breadcrumbs>
                                    <BreadcrumbItem isDisabled>Practice</BreadcrumbItem>
                                    <BreadcrumbItem href="/practice/learning-paths">Learning Paths</BreadcrumbItem>
                                    <BreadcrumbItem href="/practice/learning-paths/page">Learning Path Page</BreadcrumbItem>
                                </Breadcrumbs>

                                <main className="flex flex-col w-[600px] h-fit gap-16 place-self-center">
                                    <div className="flex flex-col gap-6 items-center">
                                        <div className={"flex w-[50px] h-[50px] justify-center items-center bg-primary-50 rounded-full"}>
                                            <Icon icon={"material-symbols:lightbulb-outline-rounded"} className="text-primary-500" width={40} height={40}/>
                                        </div>
                                        <div className="flex flex-col gap-2 items-center">
                                            <h2>You've learned new skills!</h2>
                                            <p className="text-xl font-normal">Great progress in your cybersecurity journey</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-2">
                                        {pathData.skills.map((skillName) => 
                                            <Chip key={skillName} variant="bordered">{skillName}</Chip>
                                        )}
                                    </div>
                                </main>
                            </div>
                        </div>
                    );
                }
                case 3: {
                    setTimeout(() => (setCompletionIndex(4)), 3000);

                    return (
                        <div className="Page">
                            <Header/>
                            <div className="flex flex-col w-full px-32 py-10 gap-6 items-left">
                                <Breadcrumbs>
                                    <BreadcrumbItem isDisabled>Practice</BreadcrumbItem>
                                    <BreadcrumbItem href="/practice/learning-paths">Learning Paths</BreadcrumbItem>
                                    <BreadcrumbItem href="/practice/learning-paths/page">Learning Path Page</BreadcrumbItem>
                                </Breadcrumbs>

                                <main className="flex flex-col w-[600px] h-fit gap-16 place-self-center">
                                    <div className="flex flex-col gap-6 items-center justify-center">
                                        <div className={"flex w-[50px] h-[50px] justify-center items-center bg-primary-50 rounded-full"}>
                                            <Icon icon={"material-symbols:award-star-outline-rounded"} className="text-primary-500" width={40} height={40}/>
                                        </div>
                                        <div className="flex flex-col gap-2 items-center">
                                            <h2>You've earned a badge!</h2>
                                            <p className="text-xl font-normal">You can view these badges in your profile.</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <BadgeSVG shape={"pointed"} bgColor={"green"} strokeColor={"green"} textColor={"green"} icon={"material-symbols:arrow-forward"} id={0} isSelected={false} isUnlocked={false} title={""}/>
                                    </div>
                                </main>
                            </div>
                        </div>
                    );
                }
                case 4: {
                    if(nextPathsData && !nextPathsDataLoading) {
                        return (
                            <div className="Page">
                                <Header/>
                                <div className="flex flex-col w-full px-32 py-10 gap-6 items-left">
                                    <Breadcrumbs>
                                        <BreadcrumbItem isDisabled>Practice</BreadcrumbItem>
                                        <BreadcrumbItem href="/practice/learning-paths">Learning Paths</BreadcrumbItem>
                                        <BreadcrumbItem href="/practice/learning-paths/page">Learning Path Page</BreadcrumbItem>
                                    </Breadcrumbs>

                                    <main className="flex flex-col w-[600px] h-fit gap-16 place-self-center items-center">
                                        <div className="flex flex-col gap-6 items-center justify-center">
                                            <div className={"flex w-[50px] h-[50px] justify-center items-center bg-primary-50 rounded-full"}>
                                                <Icon icon={"material-symbols:award-star-outline-rounded"} className="text-primary-500" width={40} height={40}/>
                                            </div>
                                            <div className="flex flex-col gap-2 items-center">
                                                <h2>Try these next!</h2>
                                                <p className="text-xl font-normal">These are the next best learning paths for your skill level.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center gap-6">
                                            {
                                                nextPathsData.results.map(item => (<LearningPathCard completed={item.completed} description={item.description} difficulty={item.difficulty} hasProgress={false} id={item.id} link={"#"} name={item.name} numCompletedChallenges={item.numCompletedTasks} numSolves={item.numSolves} numTotalChallenges={item.numTasks} variant={"standard"}/>))
                                            }
                                        </div>
                                        <Button className="w-fit" variant="bordered" onPress={() => navigate("/practice/learning-paths")}>Back to learning paths</Button>
                                    </main>
                                </div>
                            </div>
                        );
                    }
                    else {
                        return (
                            <div className="Page">
                                <Header/>
                                <div className="flex flex-col w-full px-32 py-10 gap-6 items-left">
                                    <Breadcrumbs>
                                        <BreadcrumbItem isDisabled>Practice</BreadcrumbItem>
                                        <BreadcrumbItem href="/practice/learning-paths">Learning Paths</BreadcrumbItem>
                                        <BreadcrumbItem href="/practice/learning-paths/page">Learning Path Page</BreadcrumbItem>
                                    </Breadcrumbs>

                                    <main className="flex flex-col w-[600px] h-fit gap-16 place-self-center items-center">
                                        <div className="flex flex-col gap-6 items-center justify-center">
                                            <div className={"flex w-[50px] h-[50px] justify-center items-center bg-primary-50 rounded-full"}>
                                                <Icon icon={"material-symbols:award-star-outline-rounded"} className="text-primary-500" width={40} height={40}/>
                                            </div>
                                            <div className="flex flex-col gap-2 items-center">
                                                <Skeleton className="rounded-full"><h2>Try these next!</h2></Skeleton>
                                                <Skeleton className="rounded-full"><p className="text-xl font-normal">These are the next best learning paths for your skill level.</p></Skeleton>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center gap-6">
                                            <LearningPathCardSkeleton variant={"standard"}/>
                                            <LearningPathCardSkeleton variant={"standard"}/>
                                        </div>
                                        <Button className="w-fit" variant="bordered" onPress={() => navigate("/practice/learning-paths")}>Back to learning paths</Button>
                                    </main>
                                </div>
                            </div>
                        );
                    }
                }
                default: {
                    setTimeout(() => (setCompletionIndex(2)), 5000);

                    return (
                        <div className="Page">
                            <Header/>
                            <div className="flex flex-col w-full px-32 py-10 gap-6 items-left">
                                <Breadcrumbs>
                                    <BreadcrumbItem isDisabled>Practice</BreadcrumbItem>
                                    <BreadcrumbItem href="/practice/learning-paths">Learning Paths</BreadcrumbItem>
                                    <BreadcrumbItem href="/practice/learning-paths/page">Learning Path Page</BreadcrumbItem>
                                </Breadcrumbs>

                                <main className="flex flex-col w-[600px] h-fit gap-16 place-self-center">
                                    <div className="flex flex-col gap-6 items-center">
                                        <div className={"flex w-[50px] h-[50px] justify-center items-center bg-primary-50 rounded-full border-[3px] border-primary-500"}>
                                            <Icon icon={"material-symbols:check-rounded"} className="text-primary-500" width={40} height={40}/>
                                        </div>
                                        <div className="flex flex-col gap-2 items-center animate-slide-in-bottom">
                                            <h2>Learning Path Complete!</h2>
                                            <p className="text-xl font-normal">{"You've completed the " + pathData.name + " learning path"}</p>
                                        </div>
                                    </div>
                                    <LearningPathCard completed={pathData.completed} description={pathData.description} difficulty={pathData.difficulty} hasProgress={false} id={pathData.id} link={"#"} name={pathData.name} numCompletedChallenges={pathData.numCompletedTasks} numSolves={pathData.numSolves} numTotalChallenges={pathData.numTasks} variant={"expanded"}/>
                                </main>
                            </div>
                        </div>
                    );
                }
            }
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