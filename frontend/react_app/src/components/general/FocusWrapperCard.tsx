import type { ReactNode } from "react";

export interface FocusWrapperCardProps {
    children: ReactNode[];
    isFocused: boolean;
}

//If this is in focus, then the children will be highlighted by a blue, padded div
const FocusWrapperCard: React.FC<FocusWrapperCardProps> = ({ children, isFocused }) => {

    let padding = "0";
    let bgColor = "bg-transparent";

    //Only have padding and blue background if the children are in focus
    if(isFocused) {
        padding = "8";
        bgColor = "bg-primary-100";
    }

    return (
        <div className={"flex flex-row w-full rounded-large gap-6 p-" + padding + " " + bgColor + " overflow-scroll"}>
            {children}
        </div>
        // <Card className={"flex flex-col m-0 overflow-clip " + bgColor + " w-" + (width ? "[" + width + "px]" : "full")+ " h-fit p-" + padding}>
        //     <CardBody className="flex w-full h-full scroll-smooth overflow-visible p-0 m-0">
        //         <div className={"scroll-m-" + padding}>
        //             {children}
        //         </div>
        //         {/* <div className="w-full h-full overflow-visible">
                    
        //         </div> */}
        //     </CardBody>
        // </Card>
    );
}

export default FocusWrapperCard;