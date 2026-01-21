import { ChartAxis, type BarChartProps } from "./ChartUtils";
import { axisBottom, axisLeft, scaleBand, scaleLinear, type Axis, type AxisDomain, type ScaleBand, type ScaleLinear } from "d3";

const HorizontalBarChart: React.FC<BarChartProps> = ({data, title, subtitle, inputWidth, inputHeight}) => {

    const margin = { top: 0, right: 0, bottom: 0, left: 0 };
    const width = inputWidth - margin.left - margin.right;
    const height = inputHeight - margin.top - margin.bottom;

    // Build x-axis scale
    const scaleX = scaleLinear()
        .domain([0, Math.max(...data.map(({ value }) => value))])
        .range([0, width]);

    // Build y-axis scale
    const scaleY = scaleBand()
        .domain(data.map(({ label }) => label))
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
                <ChartAxis axis={axisBottom(scaleX) as Axis<AxisDomain>} transform={`translate(0, ${height})`} />
                <ChartAxis axis={axisLeft(scaleY) as Axis<AxisDomain>} />
                <Bars data={data} height={height} scaleX={scaleX} scaleY={scaleY} />
            </g>
        </svg>
    );
}

interface BarsProps {
  data: BarChartProps["data"];
  height: number;
  scaleX: ScaleLinear<number, number, never>;
  scaleY: ScaleBand<string>;
}

// FIX_ME - Have a way to set the colors of the bars
const Bars: React.FC<BarsProps> = ({ data, height, scaleX, scaleY }) => {
    return (
        <>
            {data.map(({ value, label }) => (
                <rect
                key={`bar-${label}`}
                x={scaleX(value)}
                y={scaleY(label)}
                width={scaleY.bandwidth()}
                height={height - scaleX(value)}
                fill="teal"
                />
            ))}
        </>
    );
}

export default HorizontalBarChart;