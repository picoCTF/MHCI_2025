import { Accordion, AccordionItem, Card, CardBody, Divider, CircularProgress, Table, TableRow, TableCell, TableBody, TableHeader, TableColumn, Button } from "@heroui/react";
import ProgressWithTextDiv from "../General/ProgressWithTextDiv";
import IconCard from "../General/IconCard";
import NumberDisplayChip from "../General/NumberDisplayChip";
import React from "react";
import type { IconProps } from "../General/Icon";
import type { SemanticColorProps } from "../../Interfaces";

function renderCell(item: LearningPathsTableElement) {
    let icon: IconProps["name"] = "book";

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

    // API_NEEDED - Navigate to the correct page for the given challenge/learning resource
    return (
        <Button className="flex flex-row w-full min-w-full h-[100%] pl-6 pr-3 gap-3 justify-start items-center" isDisabled={isDisabled} radius="md" color="default" variant="light" href="#">
            <IconCard background={backgroundColor} icon={icon}/>
            <div className="flex flex-col w-full h-fit text-left">
                <h2>{item.name}</h2>
                <div className="flex flex-row gap-4 items-center">
                    <p>ICON Difficulty</p>
                    <NumberDisplayChip number={123} label={"solves"}/>
                </div>
            </div>
        </Button>
    );
  };

interface LearningPathsTableElement {
    contentType: "Challenge" | "Learning Resource";
    name: string;
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

interface LearningPathsAccordionProps {
    challengeIDs: string[];
}

const LearningPathsAccordionCard: React.FC<LearningPathsAccordionProps> = ({ challengeIDs }) => {
    return (
        <Card className="flex w-[430px] min-w-[430px] h-fit min-h-fit border-small m-0 p-0" shadow="none">
            <CardBody className="flex flex-col">
                <div className="flex flex-col gap-2 py-4 px-6">
                    <h2>Learning Path Name</h2>
                    <ProgressWithTextDiv color={"primary"} ariaLabel={"Learning Path Progress"} value={0} endingText="0/20 challenges"/>
                </div>
                <Divider/>
                {/* API_Needed - get the challenges and learning resources associated with the learning path and fill in the tableItems with their info */}
                {/* API_Needed - make the circular progress of the accordian items fill as a result of the children completion */}
                <Accordion className="w-full min-w-full h-fit min-h-fit">
                    <AccordionItem key={1} aria-label="Lesson 1" title="Lesson 1" startContent={<CircularProgress value={7} maxValue={10} minValue={0}/>}>
                        <LearningPathsAccordionTable tableItems={[
                            {
                                contentType: "Learning Resource",
                                name: "Primer Content",
                                status: "Complete"
                            },
                            {
                                contentType: "Learning Resource",
                                name: "Video Content",
                                status: "Incomplete"
                            },
                            {
                                contentType: "Challenge",
                                name: "Challenge 1",
                                status: "Incomplete"
                            },
                            {
                                contentType: "Challenge",
                                name: "Challenge 2",
                                status: "Complete"
                            }
                        ]}/>
                    </AccordionItem>
                    <AccordionItem key={2} aria-label="Lesson 2" title="Lesson 2" startContent={<CircularProgress value={7} maxValue={10} minValue={0}/>}>
                        <LearningPathsAccordionTable tableItems={[
                            {
                                contentType: "Learning Resource",
                                name: "Primer Content",
                                status: "Complete"
                            },
                            {
                                contentType: "Learning Resource",
                                name: "Video Content",
                                status: "Incomplete"
                            },
                            {
                                contentType: "Challenge",
                                name: "Challenge 1",
                                status: "Incomplete"
                            },
                            {
                                contentType: "Challenge",
                                name: "Challenge 2",
                                status: "Complete"
                            }
                        ]}/>
                    </AccordionItem>
                    <AccordionItem key={3} aria-label="Lesson 3" title="Lesson 3" startContent={<CircularProgress value={7} maxValue={10} minValue={0}/>}>
                        <LearningPathsAccordionTable tableItems={[
                            {
                                contentType: "Learning Resource",
                                name: "Primer Content",
                                status: "Complete"
                            },
                            {
                                contentType: "Learning Resource",
                                name: "Video Content",
                                status: "Incomplete"
                            },
                            {
                                contentType: "Challenge",
                                name: "Challenge 1",
                                status: "Incomplete"
                            },
                            {
                                contentType: "Challenge",
                                name: "Challenge 2",
                                status: "Complete"
                            }
                        ]}/>
                    </AccordionItem>
                </Accordion>
            </CardBody>
        </Card>
    );
}

export default LearningPathsAccordionCard;