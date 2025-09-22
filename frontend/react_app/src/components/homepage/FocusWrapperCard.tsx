import { Card, CardBody } from "@heroui/react";
import type { ReactElement } from "react";

export interface FocusWrapperCardProps {
    children: ReactElement;
    isFocused: boolean;
    width?: string;
}

//If this is in focus, then the children will be highlighted by a blue, padded div
const FocusWrapperCard: React.FC<FocusWrapperCardProps> = ({ children, isFocused, width }) => {

    //Only have padding if the children are in focus
    let padding = "0";

    if(isFocused) {
        padding = "8";
    }

    return (
        <Card className={"flex flex-col m-0 bg-primary-100 w-" + (width ? "[" + width + "px]" : "full")+ " h-fit p-" + padding}>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    );
}

export default FocusWrapperCard;