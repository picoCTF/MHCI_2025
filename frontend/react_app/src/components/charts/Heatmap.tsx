import * as d3 from "d3";
import { ChartAxis, type HeatmapProps } from "./ChartUtils";
import { axisBottom, axisLeft, scaleBand, type Axis, type AxisDomain, type ScaleBand, type ScaleSequential } from "d3";
import { Tooltip } from "@heroui/react";

const Heatmap: React.FC<HeatmapProps> = ({ cellStrokeColor, cellBGColors, data, inputWidth, inputHeight, title, tooltipContent, subtitle }) => {

    const margin = { top: 0, right: 0, bottom: 0, left: 0 };
    const width = inputWidth - margin.left - margin.right;
    const height = inputHeight - margin.top - margin.bottom;

    // Build color scale
    const colorScale = d3.scaleSequential()
        .interpolator(d3.interpolateRgb(cellBGColors[0], cellBGColors[cellBGColors.length-1]))
        .domain([0, 5])

    // Build x-axis scale
    const scaleX = scaleBand()
        .domain(data.map(({ label1 }) => label1))
        .range([0, width]);
    
    // Build y-axis scale
    const scaleY = scaleBand()
        .domain(data.map(({ label2 }) => label2))
        .range([height, 0])
        .padding(0.5);

    return (
        <svg width={width + margin.left + margin.right}
            height={height + margin.top + margin.bottom}
        >
            <text>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </text>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                <ChartAxis axis={axisBottom(scaleX).tickSize(0) as Axis<AxisDomain>} transform={`translate(0, ${height})`} />
                <ChartAxis axis={axisLeft(scaleY).tickSize(0) as Axis<AxisDomain>} />
                <Tooltip content={tooltipContent} >
                    <DataCell data={data} scaleX={scaleX} scaleY={scaleY} color={colorScale} borderColor={cellStrokeColor}/>
                </Tooltip>
            </g>
        </svg>
    );
}

export default Heatmap;

interface DataSquareProps {
    borderColor: string;
    data: HeatmapProps["data"];
    scaleX: ScaleBand<string>;
    scaleY: ScaleBand<string>;
    color: ScaleSequential<string, never>;
}

// FIX_ME - Make these resizable and space them evenly on the chart
const DataCell: React.FC<DataSquareProps> = ({borderColor, data, scaleX, scaleY, color}) => {
    return (
        <>
            {data.map(({ value, label1, label2 }) => (
                <rect
                key={`dataSquare-${label1}-${label2}`}
                x={scaleX(label1)}
                y={scaleY(label2)}
                rx={5}
                width={40}
                height={40}
                fill={color(value)}
                stroke={borderColor}
                //onMouseOver={}
                />
            ))}
        </>
    );
}