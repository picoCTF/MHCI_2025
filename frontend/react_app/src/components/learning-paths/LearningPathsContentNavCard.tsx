import { Accordion, AccordionItem, Card, CardBody, Divider, CircularProgress, Skeleton, Table, TableRow, TableCell, TableBody, TableHeader, TableColumn } from "@heroui/react";
import ProgressWithTextDiv, { ProgressWithTextDivSkeleton, type ProgressWithTextDivProps } from "../general/ProgressWithTextDiv";
import React from "react";
import { Icon } from "@iconify/react";
import type { LPModuleList } from "../../api_interfaces/learning_path/learningPathModuleList";
import { useMockData } from "../../mock-data/utils/utils";

import moduleMockData from "../../mock-data/learning_paths/MockPagedLearningPathModuleResponse.json";
import type { PagedLPModule } from "../../api_interfaces/learning_path/pagedLearningPathModule";
import LearningPathTaskList from "./LearningPathTaskList";

interface LearningPathsContentListCardProps {
    name: string;
    progress: ProgressWithTextDivProps;
    moduleIDs: LPModuleList;
    updateFunction: Function;
}

const LearningPathsContentNavCard: React.FC<LearningPathsContentListCardProps> = ({ name, progress, /*moduleIDs, */updateFunction }) => {

    //API_NEEDED - Get each module given a list of module IDs
    const { data: pagedModuleData, isLoading: pagedModuleDataLoading, refetch: refetchModules } = useMockData<PagedLPModule>(moduleMockData);

    if(pagedModuleData && !pagedModuleDataLoading) {

        return (
            <Card className="flex flex-col w-[430px] min-w-[430px] h-fit min-h-fit border-small border-default-300 m-0 p-0" shadow="none">
                <div className="flex flex-col gap-2 py-4 px-6">
                    <h2>{name}</h2>
                    <ProgressWithTextDiv color={"primary"} ariaLabel={"Learning Path Progress"} value={progress.value} endingText={progress.endingText}/>
                </div>
                <Divider/>
                <Accordion className="w-full min-w-full h-fit min-h-fit p-0 m-0">
                    {pagedModuleData.results.map((module) => (
                        <AccordionItem key={module.id} 
                            aria-label={module.name} 
                            className="px-4"
                            title={module.name} 
                            startContent={<CircularProgress value={module.completion || 0} maxValue={module.count || 1} minValue={0} aria-label={module.completion + " completed"}/>}>
                            
                            <LearningPathTaskList contentUpdateFunction={updateFunction} moduleRefetchFunction={refetchModules} taskIDs={module.taskIDs}/>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Card>
        );
    }
    else {
        return <LearningPathsContentNavCardSkeleton/>;
    }
}

export const LearningPathsContentNavCardSkeleton: React.FC<{}> = () => {
    return (
        <Card className="flex w-[430px] min-w-[430px] h-fit min-h-fit border-small border-default-300 m-0 p-0" shadow="none">
            <CardBody className="flex flex-col">
                <div className="flex flex-col gap-2 py-4 px-6">
                    <Skeleton className="flex w-fit rounded-full">
                        <h2>Path Name</h2>
                    </Skeleton>
                    <ProgressWithTextDivSkeleton/>
                </div>
                <Divider/>
                <Accordion className="w-full min-w-full h-fit min-h-fit">
                    {Array.from({length: 3}, (_, index) => (
                        <AccordionItem key={index} 
                            aria-label="Loading Module" 
                            title="Loading Module" 
                            startContent={<CircularProgress value={0} maxValue={1} minValue={0} aria-label={"Loading amount completed"}/>}>
                            
                            <Table hideHeader removeWrapper aria-label={"List of modules"}>
                                <TableHeader columns={[{key: 0, label: "List"}]}>
                                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                                </TableHeader>
                                <TableBody items={[{id: 0}, {id: 1}, {id: 2}]}>
                                    {
                                        (item) => (
                                            <TableRow key={item.id}>
                                                {() => 
                                                    <TableCell>
                                                        <div className="flex flex-row w-full min-w-full h-[100%] pl-6 pr-3 py-2 gap-3 justify-start items-center radius-md"  
                                                            color="default">
                                                            <Skeleton className={"flex min-w-12 min-h-12 rounded-full"}/>
                                                            <div className="flex flex-col w-full h-fit text-left gap-2">
                                                                <Skeleton className="flex w-fit rounded-full">
                                                                    <h3>Item Name</h3>
                                                                </Skeleton>
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
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                }
                                            </TableRow>
                                        )
                                    }
                                </TableBody>
                            </Table>
                        </AccordionItem>))}
                </Accordion>
            </CardBody>
        </Card>
    );
}

export default LearningPathsContentNavCard;