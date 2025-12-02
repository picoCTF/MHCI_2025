import { Accordion, AccordionItem } from "@heroui/react";
// import { MaterialSymbol } from "react-material-symbols";
export interface HintAccordionProps {
    list: string[];
}

// A collapsible list of hints for a challenge
const HintAccordion: React.FC<HintAccordionProps> = ({ list }) =>  {
    return (
        <Accordion variant="bordered" className="w-full bg-content1-base p-0 m-0">
            {list.map((item) => (<AccordionItem key={list.indexOf(item)} className="w-full px-4 m-0 justify-between" aria-label={"Hint " + list.indexOf(item)} title={"Hint " + list.indexOf(item)}>{item}</AccordionItem>))}
        </Accordion>
    );
}

export default HintAccordion;