import { Button, Skeleton } from "@heroui/react";
import type { LPTask } from "../../api_interfaces/learning_path/learningPathTask";
import { useMockData } from "../../mock-data/utils/utils";
import { Icon } from "@iconify/react";
import type { LPChallengeInfo } from "../../api_interfaces/learning_path/learningPathChallengeInfo";
import type { PagedLPTask } from "../../api_interfaces/learning_path/pagedLearningPathTask";

import taskMockData from "../../mock-data/learning_paths/MockPagedLearningPathTask.json";
import challengeInfoMockData from "../../mock-data/challenges/MockChallengeInfo.json";

interface LearningPathTaskInfoProps {
    task: LPTask;
}

const LPTaskInfo: React.FC<LearningPathTaskInfoProps> = ({task}) => {

    //API_NEEDED - Get the challenge/other info based off of the content ID and type
    const { data: taskContentInfo, isLoading: taskContentInfoLoading } = useMockData<LPChallengeInfo | null>(challengeInfoMockData);

    if(task.contentType == "C") {
        if(taskContentInfo && !taskContentInfoLoading) {
            return (
                <div className="flex flex-row gap-4 items-center">
                    <div className="flex row gap-2 items-center">
                        <Icon icon={"material-symbols:star-outline"} width={20} height={20} className={"text-default-500"}/>
                        <p className="flex font-mono text-default-500">{(taskContentInfo as LPChallengeInfo).difficulty.difficultyLvl}</p>
                    </div>
                    <div className="flex row gap-2">
                        <Icon icon={"material-symbols:flag-outline"} width={20} height={20} className={"text-default-500"}/>
                        <p className={"flex font-mono text-default-500"}>{(taskContentInfo as LPChallengeInfo).users_solved + " solves"}</p>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="flex flex-row gap-4 items-center">
                    <div className="flex row gap-2 items-center">
                        <Skeleton className="flex rounded-full">
                            <Icon icon={"material-symbols:star-outline"} width={20} height={20} className={"text-default-500"}/>
                        </Skeleton>
                        <Skeleton className="flex w-fit rounded-full">
                            <p className="flex font-mono text-default-500">Medium</p>
                        </Skeleton>
                    </div>
                    <div className="flex row gap-2">
                        <Skeleton className="flex rounded-full">
                            <Icon icon={"material-symbols:flag-outline"} width={20} height={20} className={"text-default-500"}/>
                        </Skeleton>
                        <Skeleton className="flex w-fit rounded-full">
                            <p className={"flex font-mono text-default-500"}>{"XXXX solves"}</p>
                        </Skeleton>
                    </div>
                </div>
            );
        }
    }
    else {
        return (<p className="flex font-mono text-default-500">{"(Optional)"}</p>);
    }
}

export interface LearningPathTaskListProps {
    contentUpdateFunction: Function;
    moduleRefetchFunction: Function;
    taskIDs: number[];
}

const LearningPathTaskList: React.FC<LearningPathTaskListProps> = ({contentUpdateFunction, /*taskIDs, */moduleRefetchFunction}) => {

    //API_NEEDED - Get each task's info given a list of task IDs
    const { data: pagedTasks, isLoading: pagedTasksLoading } = useMockData<PagedLPTask>(taskMockData);

    if(pagedTasks && !pagedTasksLoading) {

        return (
            <div className="flex flex-col w-full h-fit">
                {
                    pagedTasks.results.map((item) => (
                        <Button className="flex flex-row w-full min-w-full h-[100%] pl-6 pr-3 py-2 gap-3 justify-start items-center" 
                            key={item.id}
                            isDisabled={item.status == "Complete" && item.contentType == "C"} 
                            radius="md" 
                            color="default" 
                            variant="light"
                            onPress={() => contentUpdateFunction([item.contentID, moduleRefetchFunction])}>
                            {
                                item.status == "Complete" ? 
                                <div className={"flex min-w-10 min-h-10 bg-success-500 rounded-full items-center place-content-center"}>
                                    <Icon icon={"material-symbols:check-rounded"} width={32} height={32} className={"text-content1-base"}/>
                                </div> : item.contentType == "C" ?
                                <div className={"flex min-w-10 min-h-10 bg-primary-50 rounded-full items-center place-content-center"}>
                                    <Icon icon={"material-symbols:extension-outline"} width={32} height={32} className={"text-primary-500"}/>
                                </div> : item.contentType == "G" ?
                                <div className={"flex min-w-10 min-h-10 bg-secondary-50 rounded-full items-center place-content-center"}>
                                    <Icon icon={"material-symbols:joystick-outline"} width={32} height={32} className={"text-secondary-500"}/>
                                </div> : item.contentType == "R" ?
                                <div className={"flex min-w-10 min-h-10 bg-secondary-50 rounded-full items-center place-content-center"}>
                                    <Icon icon={"material-symbols:article-outline"} width={32} height={32} className={"text-secondary-500"}/>
                                </div> : 
                                <div className={"flex min-w-10 min-h-10 bg-secondary-50 rounded-full items-center place-content-center"}>
                                    <Icon icon={"material-symbols:question-mark-rounded"} width={32} height={32} className={"text-secondary-500"}/>
                                </div>
                            }
                            <div className="flex flex-col w-full h-fit text-left">
                                <h3>{item.name}</h3>
                                <LPTaskInfo task={item}/>
                            </div>
                        </Button>
                    ))
                }
            </div>
        );
    }
    else {
        return (
            <div className="flex flex-col w-full h-fit">
                {
                    Array.from({length: 3}, (_, index) => (
                        <Button className="flex flex-row w-full min-w-full h-[100%] pl-6 pr-3 py-2 gap-3 justify-start items-center" 
                            key={index}
                            isDisabled={true} 
                            radius="md" 
                            color="default" 
                            variant="light">
                            <Skeleton className={"flex min-w-12 min-h-12 rounded-full"}/>
                            <div className="flex flex-col w-full h-fit text-left gap-1">
                                <Skeleton className="flex rounded-full">
                                    <h3>{"Task Name"}</h3>
                                </Skeleton>
                                <div className="flex flex-row gap-4 items-center">
                                    <div className="flex row gap-2 items-center">
                                        <Skeleton className="flex rounded-full w-5 h-5"/>
                                        <Skeleton className="flex w-fit rounded-full">
                                            <p className="flex font-mono text-default-500">Medium</p>
                                        </Skeleton>
                                    </div>
                                    <div className="flex row gap-2">
                                        <Skeleton className="flex rounded-full w-5 h-5"/>
                                        <Skeleton className="flex w-fit rounded-full">
                                            <p className={"flex font-mono text-default-500"}>{"XXXX solves"}</p>
                                        </Skeleton>
                                    </div>
                                </div>
                            </div>
                        </Button>
                    ))
                }
            </div>
        );
    }
}

export default LearningPathTaskList;