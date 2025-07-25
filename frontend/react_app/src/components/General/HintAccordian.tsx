import { Accordion, AccordionItem } from "@heroui/react";
// import { MaterialSymbol } from "react-material-symbols";
export interface HintAccordionProps {
    list: string[];
}

const HintAccordion: React.FC<HintAccordionProps> = ({ list }) =>  {
    return (
        <Accordion>
            {list.map((item) => (<AccordionItem key={list.indexOf(item)} aria-label={"Hint " + list.indexOf(item)} title={"Hint " + list.indexOf(item)}>{item}</AccordionItem>))}
            {/* <AccordionItem key="1" aria-label="Hint 1" title="Hint 1">
                <p>This is the first hint.</p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Hint 2" title="Hint 2">
                <p>This is the second hint.</p>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Hint 3" title="Hint 3">
                <p>This is the third hint.</p>
            </AccordionItem> */}
        </Accordion>
    );
}

export default HintAccordion;