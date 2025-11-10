import { Accordion, AccordionItem, Card, CardBody, Divider, CircularProgress, Table, TableRow, TableCell, TableBody, TableHeader, TableColumn, Button } from "@heroui/react";
import ProgressWithTextDiv, { type ProgressWithTextDivProps } from "../general/ProgressWithTextDiv";
import IconCard from "../general/IconCard";
import React from "react";
import type { SemanticColorProps } from "../../Interfaces";
import type { IconName } from "../general/IconTypes";
import { Icon } from "@iconify/react";
import { isChallenge } from "../../api_interfaces/challenge";
import type { LPModuleList } from "../../api_interfaces/learning_path/learningPathModuleList";
import type { LPModuleItem } from "../../api_interfaces/learning_path/learningPathModuleItem";

function renderCell(item: LPModuleItem) {
    let icon: IconName = "material-symbols:book-outline";

    let difficulty = "";

    let backgroundColor: SemanticColorProps["color"] = "secondary";

    let isDisabled = false;

    if (isChallenge(item.content)) {
        icon = "material-symbols:extension-outline";
        backgroundColor = "primary";
        difficulty = item.content.difficulty.difficultyLvl
        if(item.status == "Complete") {
            isDisabled = true;
        }
    }

    if(item.status == "Complete") {
        icon = "material-symbols:check-outline";
        backgroundColor = "success";
    }

    return (
        <Button className="flex flex-row w-full min-w-full h-[100%] pl-6 pr-3 py-2 gap-3 justify-start items-center" isDisabled={isDisabled} radius="md" color="default" variant="light">
            <IconCard background={backgroundColor} icon={icon} radius={"lg"} size={"sm"}/>
            <div className="flex flex-col w-full h-fit text-left">
                <h3>{item.content.name}</h3>
                {isChallenge(item.content) ? 
                    <div className="flex flex-row gap-4 items-center">
                        <div className="flex row gap-2 items-center">
                            <Icon icon={"material-symbols:star-outline"} width={20} height={20} className={"text-default-500"}/>
                            <p className="flex font-mono text-default-500">{difficulty}</p>
                        </div>
                        <div className="flex row gap-2">
                            <Icon icon={"material-symbols:flag-outline"} width={20} height={20} className={"text-default-500"}/>
                            <p className={"flex font-mono text-default-500"}>{item.content.users_solved + " solves"}</p>
                        </div>
                    </div> :
                    <p className="flex font-mono text-default-500">{"(Optional)"}</p>
                }
            </div>
        </Button>
    );
};

interface LearningPathsContentListCardProps {
    name: string;
    progress: ProgressWithTextDivProps;
    list: LPModuleList;
}

const LearningPathsContentListCard: React.FC<LearningPathsContentListCardProps> = ({ name, progress, list }) => {

    const columns = [{
        key: "items",
        label: "Items"
    }];

    return (
        <Card className="flex w-[430px] min-w-[430px] h-fit min-h-fit border-small border-default-300 m-0 p-0" shadow="none">
            <CardBody className="flex flex-col">
                <div className="flex flex-col gap-2 py-4 px-6">
                    <h2>{name}</h2>
                    <ProgressWithTextDiv color={"primary"} ariaLabel={"Learning Path Progress"} value={progress.value} endingText={progress.endingText}/>
                </div>
                <Divider/>
                <Accordion className="w-full min-w-full h-fit min-h-fit">
                    {list.results.map((module) => (
                        <AccordionItem key={list.results.indexOf(module)} 
                            aria-label={module.name} 
                            title={module.name} 
                            startContent={<CircularProgress value={module.completion} maxValue={module.count} minValue={0} aria-label={module.completion + " completed"}/>}>
                            
                            <Table hideHeader removeWrapper aria-label={"List of " + module.name + " modules"}>
                                <TableHeader columns={columns}>
                                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                                </TableHeader>
                                <TableBody items={module.items}>
                                    {
                                        (item) => (
                                            <TableRow key={item.id}>
                                                {() => <TableCell>{renderCell(item)}</TableCell>}
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

export default LearningPathsContentListCard;