import React, { type ReactNode } from "react";
import {Pagination, Button, ButtonGroup} from "@heroui/react";
import FocusWrapperCard, { type FocusWrapperCardProps } from "./FocusWrapperCard";
import { Icon } from "@iconify/react";

export interface HorizontalScrollDivProps {
    children: ReactNode[];
    isFocused: FocusWrapperCardProps["isFocused"];
    title: string;
}

// FIX_ME - Refer to the Figma file for the homepage to see how we should use the arrows
// Nest the relevant components in this div
const HorizontalScrollDiv: React.FC<HorizontalScrollDivProps> = ({ children, isFocused, title }) => {
    const [currentPage, setCurrentPage] = React.useState(0);

    return (
        <div className="flex flex-col gap-5 overflow-clip">
            <div className="flex flex-col w-full h-fit bg-transparent gap-4 items-start">
                <div className="flex flex-row w-full justify-between">
                    <h3>{title}</h3>
                    <ButtonGroup>
                        <Button color="secondary" size="sm" variant="flat" onPress={() => setCurrentPage((prev) => (prev >= 0 ? prev - 1 : children.length -1))}>
                            <Icon icon={"material-symbols:arrow_back_ios"} width={20} height={20} className={"text-default"}/>
                        </Button>
                        <Button color="secondary" size="sm" variant="flat" onPress={() => setCurrentPage((prev) => (prev < children.length - 1 ? prev + 1 : 0))}>
                            <Icon icon={"material-symbols:arrow_forward"} width={20} height={20} className={"text-default"}/>
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
            <FocusWrapperCard isFocused={isFocused} orientation={"row"}>
                {children}
            </FocusWrapperCard>
            <Pagination color="secondary" page={currentPage} total={10} onChange={setCurrentPage} />
        </div>
    );
}

export default HorizontalScrollDiv;