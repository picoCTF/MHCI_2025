import { commonColors } from "@heroui/react";
import type { IconProps } from "./Icon";
import Icon from "./Icon";

export interface BadgeSVGProps {
    shape: 1 | 2;
    bgColor: 1 | 2 | 3;
    strokeColor: 1 | 2 | 3;
    textColor: 1 | 2 | 3;
    icon: IconProps["name"];
    id: string;
    title: string;

    width?: number;
    height?: number;
}

//The Badge SVGs that can be obtained by the user
const BadgeSVG: React.FC<BadgeSVGProps> = ({ shape, bgColor, strokeColor, textColor, icon, title, width, height }) => {

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
        case 1:
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
        case 1:
        {
            fillColor = "#A8E1B8";
            break;
        }
        case 2:
        {
            fillColor = "#F7B750";
            break;
        }
        case 3:
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
        case 1:
        {
            lineColor = "#27723C";
            break;
        }
        case 2:
        {
            lineColor = "#A5090B";
            break;
        }
        case 3:
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
        case 1:
        {
            titleColor = "#27723C";
            break;
        }
        case 2:
        {
            titleColor = "#A5090B";
            break;
        }
        case 3:
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
        <div className="justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={svgWidth} height={svgHeight} viewBox={"0 0 " + svgWidth + " " + svgHeight} fill="none">
                <g>
                    {/* Badge Symbol */}
                    <text x={svgWidth / 2} y={svgHeight / 2}>
                        <Icon name={icon} size={"md"} color={"default"}/>
                    </text>
                </g>
                <g>
                    {/* Badge Background */}
                    <path d={backgroundFilledPathShape} fill={fillColor}/>
                    <path d={backgroundStrokePathShape} stroke={lineColor} strokeWidth="2" strokeMiterlimit="10"/>
                </g>
                <g>
                    {/* Badge Decoration */}
                </g>
                {/* Etc */}
            </svg>
            <h3 style={{color: titleColor, textAlign: "center"}}>{title}</h3>
        </div>
    );
}

export default BadgeSVG;