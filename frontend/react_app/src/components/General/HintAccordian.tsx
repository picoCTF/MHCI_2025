import { Accordion, AccordionItem } from "@heroui/react";
// import { MaterialSymbol } from "react-material-symbols";
interface HintAccordionProps {
    
}

const HintAccordion: React.FC<HintAccordionProps> = ({}) =>  {
    return (
        <Accordion>
            <AccordionItem key="1" aria-label="Hint 1" title="Hint 1">
                <p>This is the first hint.</p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Hint 2" title="Hint 2">
                <p>This is the second hint.</p>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Hint 3" title="Hint 3">
                <p>This is the third hint.</p>
            </AccordionItem>
        </Accordion>
    );
}

export default HintAccordion;