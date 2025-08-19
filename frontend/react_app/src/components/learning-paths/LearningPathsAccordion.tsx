import { Accordion, AccordionItem, Card, CardBody, Divider, CircularProgress, Table, TableRow, TableCell, TableBody, TableHeader, TableColumn, Button, type AccordionItemProps, type CircularProgressProps } from "@heroui/react";
import ProgressWithTextDiv, { type ProgressWithTextDivProps } from "../general/ProgressWithTextDiv";
import IconCard from "../general/IconCard";
import React from "react";
import type { IconProps } from "../General/Icon";
import type { SemanticColorProps } from "../../Interfaces";
import Icon from "../general/Icon";
import type { DifficultyProp } from "../general/DifficultyChip";

function renderCell(item: LearningPathsTableElement) {
    let icon: IconProps["name"] = "book";

    let difficulty = "Easy";

    let backgroundColor: SemanticColorProps["color"] = "secondary";

    let isDisabled = false;

    if (item.contentType == "Challenge") {
        icon = "extension";
        backgroundColor = "primary";
    }

    if(item.status == "Complete") {
        isDisabled = true;
        icon = "check";
        backgroundColor = "success";
    }

    switch(item.difficulty.Enum) {
        case 1: {
            difficulty = "Easy";
            break;
        }
        case 2: {
            difficulty = "Medium";
            break;
        }
        default: {
            difficulty = "Hard";
            break;
        }
    }

    // API_NEEDED - Navigate to the correct page for the given challenge/learning resource
    return (
        <Button className="flex flex-row w-full min-w-full h-[100%] pl-6 pr-3 gap-3 justify-start items-center" isDisabled={isDisabled} radius="md" color="default" variant="light" href={item.link}>
            <IconCard background={backgroundColor} icon={icon}/>
            <div className="flex flex-col w-full h-fit text-left">
                <h2>{item.name}</h2>
                <div className="flex flex-row gap-4 items-center">
                    <div className="flex row gap-2">
                        <Icon name={"star"} size={"sm"} weight={"normal"} color={"default"}/>
                        <p className="text-xs">{difficulty}</p>
                    </div>
                    <div className="flex row gap-2">
                        <Icon name={"flag"} size={"sm"} weight={"normal"} color={"default"}/>
                        <div className="flex row gap-1 text-xs">
                            <p>{item.numSolves + " solves"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Button>
    );
  };

interface LearningPathsTableElement {
    contentType: "Challenge" | "Learning Resource";
    difficulty: DifficultyProp;
    link: string; 
    name: string;
    numSolves: number;
    status: "Incomplete" | "Complete";
}

interface LearningPathsAccordionTableProps {
    tableItems: LearningPathsTableElement[];
}

const LearningPathsAccordionTable: React.FC<LearningPathsAccordionTableProps> = ({ tableItems }) => {

    const columns = [{
        key: "items",
        label: "Items"
    }];

    return (
        <Table hideHeader removeWrapper>
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={tableItems}>
                {
                    (item) => (
                        <TableRow key={item.name}>
                            {() => <TableCell>{renderCell(item)}</TableCell>}
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    );
}

interface LearningPathsAccordionItemProps {
    item: AccordionItemProps;
    itemProgress: CircularProgressProps;
    children: LearningPathsAccordionTableProps[];
}

interface LearningPathsContentListCardProps {
    name: string;
    progress: ProgressWithTextDivProps;
    list: LearningPathsAccordionItemProps[];
}

const LearningPathsContentListCard: React.FC<LearningPathsContentListCardProps> = ({ name, progress, list }) => {
    return (
        <Card className="flex w-[430px] min-w-[430px] h-fit min-h-fit border-small m-0 p-0" shadow="none">
            <CardBody className="flex flex-col">
                <div className="flex flex-col gap-2 py-4 px-6">
                    <h2>{name}</h2>
                    <ProgressWithTextDiv color={"primary"} ariaLabel={"Learning Path Progress"} value={progress.value} endingText={progress.endingText}/>
                </div>
                <Divider/>
                <Accordion className="w-full min-w-full h-fit min-h-fit">
                    {list.map((accordionItem) => (<AccordionItem key={list.indexOf(accordionItem)} 
                        aria-label={accordionItem.item["aria-label"]} 
                        title={accordionItem.item.title} 
                        startContent={<CircularProgress value={accordionItem.itemProgress.value} maxValue={accordionItem.itemProgress.maxValue} minValue={0}/>}>
                        
                        {accordionItem.children.map((table) => (<LearningPathsAccordionTable tableItems={table.tableItems}/>))}
                    </AccordionItem>))}
                </Accordion>
            </CardBody>
        </Card>
    );
}

export default LearningPathsContentListCard;