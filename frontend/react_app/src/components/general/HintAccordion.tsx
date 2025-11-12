import { Accordion, AccordionItem } from "@heroui/react";
// import { MaterialSymbol } from "react-material-symbols";
export interface HintAccordionProps {
    list: string[];
}

// A collapsible list of hints for a challenge
const HintAccordion: React.FC<HintAccordionProps> = ({ list }) =>  {
    return (
        <Accordion>
            {list.map((item) => (<AccordionItem key={list.indexOf(item)} aria-label={"Hint " + list.indexOf(item)} title={"Hint " + list.indexOf(item)}>{item}</AccordionItem>))}
        </Accordion>
    );
}

export default HintAccordion;