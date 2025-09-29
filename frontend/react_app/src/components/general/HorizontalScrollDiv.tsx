import React, { type ReactNode } from "react";
import {Pagination, Button, ButtonGroup} from "@heroui/react";
import FocusWrapperCard, { type FocusWrapperCardProps } from "./FocusWrapperCard";

interface ControlledPaginationDivProps {
    children: ReactNode[];
    isFocused: FocusWrapperCardProps["isFocused"];
    title: string;
}

const ControlledPaginationDiv: React.FC<ControlledPaginationDivProps> = ({ children, isFocused, title }) => {
    const [currentPage, setCurrentPage] = React.useState(0);

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col w-full h-fit bg-transparent gap-4 items-start">
                <div className="flex flex-row w-full justify-between">
                    <h3>{title}</h3>
                    <ButtonGroup>
                        <Button color="secondary" size="sm" variant="flat" onPress={() => setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev))}>
                            Previous
                        </Button>
                        <Button color="secondary" size="sm" variant="flat" onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}>
                            Next
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
            <FocusWrapperCard isFocused={isFocused}>
                {children}
            </FocusWrapperCard>
            <Pagination color="secondary" page={currentPage} total={10} onChange={setCurrentPage} />
        </div>
    );
}

export default ControlledPaginationDiv;