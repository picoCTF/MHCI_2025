import { commonColors, Skeleton } from "@heroui/react";
import type { Badge } from "../../api_interfaces/badge/badge"
import { Icon } from "@iconify/react";

// export interface BadgeSVGProps {
//     shape: BadgeShapes;
//     bgColor: BadgeColors;
//     strokeColor: BadgeColors;
//     textColor: BadgeColors;
//     icon: IconProps["name"];
//     id: number;
//     title: string;

//     width?: number;
//     height?: number;
// }

//The Badge SVGs that can be obtained by the user
const BadgeSVG: React.FC<Badge> = ({ shape, bgColor, strokeColor, textColor, icon, title, width, height}) => {

    //Get the shape of the badge
    let backgroundFilledPathShape = "";
    let backgroundStrokePathShape = "";

    let svgWidth = 170;
    let svgHeight = 180;

    if(width)
    {
        svgWidth = width;
    }

    if(height)
    {
        svgHeight = height;
    }
    

    switch (shape){
        case "pointed":
        {
            backgroundFilledPathShape = (
                "M 20 0" + 
                " H " + (svgWidth - 20) + 
                " Q " + svgWidth + " " + 0 + " " + svgWidth + " " + 20 +
                " V " + (svgHeight - 35) +
                " Q " + svgWidth + " " + (svgHeight - 25) + " " + (svgWidth - 15) + " " + (svgHeight - 20) +
                " L " + (svgWidth / 2 + 5) + " " + (svgHeight - 1) +
                " Q " + (svgWidth / 2) + " " + svgHeight + " " + (svgWidth / 2 - 5) + " " + (svgHeight - 1) +
                " L 15 " + (svgHeight - 20) +
                " Q 0 " + (svgHeight - 25) + " 0 " + (svgHeight - 35) +
                " V 20" +
                " Q 0 0 20 0 " +
                "Z")
            backgroundStrokePathShape = (
                "M 20 5" + 
                " H " + (svgWidth - 20) + 
                " Q " + (svgWidth - 5) + " " + 5 + " " + (svgWidth - 5) + " " + 20 +
                " V " + (svgHeight - 40) +
                " Q " + (svgWidth - 5) + " " + (svgHeight - 30) + " " + (svgWidth - 20) + " " + (svgHeight - 25) +
                " L " + (svgWidth / 2 + 5) + " " + (svgHeight - 6) +
                " Q " + (svgWidth / 2) + " " + (svgHeight - 5) + " " + (svgWidth / 2 - 5) + " " + (svgHeight - 6) +
                " L 20 " + (svgHeight - 25) +
                " Q 5 " + (svgHeight - 30) + " 5 " + (svgHeight - 40) +
                " V 20" +
                " Q 5 5 20 5 " +
                "Z");
            break;
        }
        default:
        {
            backgroundFilledPathShape = (
                "M 20 0" + 
                " H " + (svgWidth - 20) + 
                " Q " + svgWidth + " " + 0 + " " + svgWidth + " " + 20 +
                " V " + (svgHeight - svgWidth/2) +
                " A " + (svgWidth/2) + " " + (svgWidth/2) + " 0 0 1 0 " + (svgHeight - svgWidth/2) +
                " V 20" +
                " Q 0 0 20 0 " +
                "Z")
            backgroundStrokePathShape = (
                "M 20 5" + 
                " H " + (svgWidth - 20) + 
                " Q " + (svgWidth - 5) + " " + 5 + " " + (svgWidth - 5) + " " + 20 +
                " V " + (svgHeight - svgWidth/2) +
                " A " + ((svgWidth-10)/2) + " " + ((svgWidth-10)/2) + " 0 0 1 5 " + (svgHeight - svgWidth/2) +
                " V 20" +
                " Q 5 5 20 5 " +
                "Z")
            break;
        }
    }

    // Get the color of the background and stroke
    let fillColor = "";
    let lineColor = "";
    let titleColor = "";

    switch (bgColor) {
        case "green":
        {
            fillColor = "#A8E1B8";
            break;
        }
        case "yellow":
        {
            fillColor = "#F7B750";
            break;
        }
        case "purple":
        {
            fillColor = "#C9A9E9";
            break;
        }
        default: 
        {
            fillColor = commonColors.zinc[100];
            break;
        }
    }

    switch(strokeColor) {
        case "green":
        {
            lineColor = "#27723C";
            break;
        }
        case "yellow":
        {
            lineColor = "#A5090B";
            break;
        }
        case "purple":
        {
            lineColor = "#481878";
            break;
        }
        default:
        {
            lineColor = commonColors.zinc[400];
            break;
        }
    }

    switch(textColor) {
        case "green":
        {
            titleColor = "#27723C";
            break;
        }
        case "yellow":
        {
            titleColor = "#A5090B";
            break;
        }
        case "purple":
        {
            titleColor = "#481878";
            break;
        }
        default:
        {
            titleColor = commonColors.zinc[700];
            break;
        }
    }

    //Layer the different parts of the badge image as an SVG
    return (
        <div className="justify-center p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width={svgWidth} height={svgHeight} viewBox={"0 0 " + svgWidth + " " + svgHeight} fill="none">
                <g>
                    {/* Badge Symbol */}
                    {/* <Icon icon={icon} width={24} height={24} className={"text-default"}/> */}
                    {/* <text x={svgWidth / 2} y={svgHeight / 2} className="flex min-w-full min-h-full">
                        <Icon icon={icon} width={24} height={24} className={"text-default"}/>
                    </text> */}
                </g>
                <g>
                    {/* Badge Background */}
                    <path d={backgroundFilledPathShape} fill={fillColor}/>
                    <path d={backgroundStrokePathShape} stroke={lineColor} strokeWidth="2" strokeMiterlimit="10"/>
                </g>
                <g>
                    {/* Badge Decoration */}
                </g>
                <circle cx={svgWidth/2} cy={svgWidth/2} r={30} fill={lineColor}/>
                <Icon icon={icon} x={svgWidth/2-20} y={svgHeight/2-25} width={40} height={40} className={"text-default-50"}/>
                {/* Etc */}
            </svg>
            <h3 style={{fontFamily: "Geist Mono", color: titleColor, textAlign: "center"}}>{title}</h3>
        </div>
    );
}

export const BadgeSVGSkeleton: React.FC<{}> = ({}) => {
    return (
        <div className="flex flex-col h-fit justify-center p-2 gap-1">
            <Skeleton className="w-[170px] h-[176px] rounded-xl"/>
            <Skeleton className="rounded-full"><h3>Badge Name</h3></Skeleton>
        </div>
    );
}

export default BadgeSVG;