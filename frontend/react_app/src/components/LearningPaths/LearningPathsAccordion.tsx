import { Accordion, AccordionItem, Card, CardHeader, CardBody, Divider } from "@heroui/react";
import ProgressWithTextDiv from "../General/ProgressWithTextDiv";
import IconCard from "../General/IconCard";
import NumberDisplayChip from "../General/NumberDisplayChip";

interface LearningPathsAccordionContentProps {
    contentType: "Challenge" | "Learning Resource";
    name: string;
    status: "Incomplete" | "Complete";
}

const LearningPathsAccordionContent: React.FC<LearningPathsAccordionContentProps> = ({ contentType, name, status }) => {
    
    let icon = "DOCUMENT";

    let backgroundColor = "primary";

    if(status == "Complete") {
        icon = "CHECK";
        backgroundColor = "success";
    }
    else {
        if (contentType == "Challenge") {
            icon = "PUZZLE";
        }
    }

    return (
        <Card isHoverable isPressable className="w-fill min-w-fill">
            <CardBody className="flex flex-row">
                <IconCard background={backgroundColor} icon={icon}/>
                <div className="flex flex-col">
                    <h2>{name}</h2>
                    <div className="flex flex-row">
                        <p>ICON Difficulty</p>
                        <NumberDisplayChip number={123} label={"solves"}/>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}


interface LearningPathsAccordionProps {
    challengeIDs: string[];
}

const LearningPathsAccordionCard: React.FC<LearningPathsAccordionProps> = ({ challengeIDs }) => {
    return (
        <Card className="w-[430px] min-w-[430px] h-fit min-h-fit">
            <CardHeader className="flex flex-col">
                <h2>Learning Path Name</h2>
                <ProgressWithTextDiv color={"primary"} ariaLabel={"Learning Path Progress"} value={0} endingText="0/20 challenges"/>
            </CardHeader>
            <CardBody>
                <Divider/>
                <Accordion className="w-fill min-w-fill h-fit min-h-fit">
                    <AccordionItem key="1" aria-label="Lesson 1" title="Lesson 1">
                        <LearningPathsAccordionContent contentType={"Learning Resource"} name={"Resource 1"} status={"Incomplete"}/>
                        <LearningPathsAccordionContent contentType={"Learning Resource"} name={"Resource 2"} status={"Complete"}/>
                        <LearningPathsAccordionContent contentType={"Challenge"} name={"Challenge 1"} status={"Complete"}/>
                        <LearningPathsAccordionContent contentType={"Challenge"} name={"Challenge 1"} status={"Incomplete"}/>
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Lesson 2" title="Lesson 2">
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Lesson 3" title="Lesson 3">
                    </AccordionItem>
                </Accordion>
            </CardBody>
        </Card>
    );
}

export default LearningPathsAccordionCard;