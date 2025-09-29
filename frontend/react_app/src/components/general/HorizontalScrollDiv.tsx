import React, { type ReactNode } from "react";
import {Pagination, Button, ButtonGroup} from "@heroui/react";
import FocusWrapperCard, { type FocusWrapperCardProps } from "./FocusWrapperCard";
import Icon from "./Icon";

export interface HorizontalScrollDivProps {
    children: ReactNode[];
    isFocused: FocusWrapperCardProps["isFocused"];
    title: string;
}

const HorizontalScrollDiv: React.FC<HorizontalScrollDivProps> = ({ children, isFocused, title }) => {
    const [currentPage, setCurrentPage] = React.useState(0);

    return (
        <div className="flex flex-col gap-5 overflow-clip">
            <div className="flex flex-col w-full h-fit bg-transparent gap-4 items-start">
                <div className="flex flex-row w-full justify-between">
                    <h3>{title}</h3>
                    <ButtonGroup>
                        <Button color="secondary" size="sm" variant="flat" onPress={() => setCurrentPage((prev) => (prev >= 0 ? prev - 1 : children.length -1))}>
                            <Icon name={"arrow_back_ios"} size={"sm"} color={"default"}/>
                        </Button>
                        <Button color="secondary" size="sm" variant="flat" onPress={() => setCurrentPage((prev) => (prev < children.length - 1 ? prev + 1 : 0))}>
                            <Icon name={"arrow_forward_ios"} size={"sm"} color={"default"}/>
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

export default HorizontalScrollDiv;