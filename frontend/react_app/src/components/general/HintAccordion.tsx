import { Accordion, AccordionItem, Skeleton } from "@heroui/react";
// import { MaterialSymbol } from "react-material-symbols";
export interface HintAccordionProps {
    list: string[];
}

// A collapsible list of hints for a challenge
const HintAccordion: React.FC<HintAccordionProps> = ({ list }) => {
    return (
        <div className="flex flex-col w-full h-fit gap-4">
            <Accordion variant="bordered" className="w-full bg-content1-base p-0 m-0">
                {list.map((item) => (<AccordionItem key={list.indexOf(item)} className="w-full px-4 m-0 justify-between" aria-label={"Hint " + list.indexOf(item)} title={"Hint " + list.indexOf(item)}>{item}</AccordionItem>))}
            </Accordion>
            <div className="flex w-fit gap-2">
                <p className={"flex font-mono font-semibold text-default-500"}>Note:</p>
                <p className={"flex font-mono text-default-500"}>There are no penalties for viewing hints.</p>
            </div>
        </div>
    );
}

export const HintAccordionSkeleton: React.FC<{}> = ({}) => {
    return (
        <div className="flex flex-col w-full h-fit gap-4">
            <Accordion variant="bordered" className="w-full bg-content1-base p-0 m-0">
                {Array.from({length: 3}, (_, index) => (<AccordionItem key={index} className="w-full px-4 m-0 justify-between" aria-label={"Loading Hint"} title={"Loading Hint..."}>
                    <Skeleton className="rounded-full"><p>This is a hint. Here is some info.</p></Skeleton>
                </AccordionItem>))}
            </Accordion>
            <Skeleton className="flex w-fit h-fit gap-2 rounded-full">
                <p className={"flex font-mono font-semibold text-default-500"}>Note:</p>
                <p className={"flex font-mono text-default-500"}>There are no penalties for viewing hints.</p>
            </Skeleton>
        </div>
    );
}

export default HintAccordion;