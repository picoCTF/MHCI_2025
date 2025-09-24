import { Card, CardBody } from "@heroui/react";
import type { ReactElement } from "react";

export interface FocusWrapperCardProps {
    children: ReactElement;
    isFocused: boolean;
    width?: string;
}

//If this is in focus, then the children will be highlighted by a blue, padded div
const FocusWrapperCard: React.FC<FocusWrapperCardProps> = ({ children, isFocused, width }) => {

    let padding = "0";
    let bgColor = "bg-transparent";

    //Only have padding and blue background if the children are in focus
    if(isFocused) {
        padding = "8";
        bgColor = "bg-primary-100";
    }

    return (
        <Card className={"flex flex-col m-0 overflow-clip " + bgColor + " w-" + (width ? "[" + width + "px]" : "full")+ " h-fit p-" + padding}>
            <CardBody className="flex w-full h-full scroll-smooth overflow-visible">
                <div className={"scroll-m-" + padding}>
                    {children}
                </div>
                {/* <div className="w-full h-full overflow-visible">
                    
                </div> */}
            </CardBody>
        </Card>
    );
}

export default FocusWrapperCard;