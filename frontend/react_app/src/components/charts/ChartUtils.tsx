import { select, type Axis, type AxisDomain } from "d3";
import { useEffect, useRef, type ReactNode } from "react";

// Props needed for all charts
interface ChartProps {
    title?: string;
    subtitle?: string;
    inputWidth: number;
    inputHeight: number;
}

// Data for the bar chart
// FIX_ME - Allow the bar chart to take in custom colors and strokes so that it can match the ChallengeCompletionDiv showin in the Figma
export interface BarChartProps extends ChartProps {
    data: {label: string, value: number}[];
}

// Info specific to the heatmap
export interface HeatmapProps extends ChartProps {
    cellBGColors: string[];
    cellStrokeColor: string;
    data: {label1: string, label2: string, value: number}[];
    tooltipContent: ReactNode;
}

// Takes in axisBottom/axisTop/axisRight/axisLeft in the axis
export interface ChartAxisProps {
    axis: Axis<AxisDomain>;
    transform?: string;
}

// Creates an axis component for the chart.
export const ChartAxis: React.FC<ChartAxisProps> = ({axis, transform }) => {
    const ref = useRef<SVGGElement>(null);

    useEffect(() => {
        if(ref.current) {
            select(ref.current).call(axis);
        }
    }, [axis]);

    return <g ref={ref} transform={transform}/>;
}
