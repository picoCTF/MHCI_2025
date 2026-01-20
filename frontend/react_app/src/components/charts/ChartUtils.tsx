import { select, type Axis, type AxisDomain, type ScaleBand, type ScaleLinear } from "d3";
import { useEffect, useRef, type ReactNode } from "react";

interface BarData {
    label: string;
    value: number;
}

interface HeatmapData {
    label1: string;
    label2: string;
    value: number;
}

interface ChartProps {
    title?: string;
    subtitle?: string;
    inputWidth: number;
    inputHeight: number;
}

export interface BarChartProps extends ChartProps {
    data: BarData[];
}

export interface HeatmapProps extends ChartProps {
    cellBGColors: string[];
    cellStrokeColor: string;
    data: HeatmapData[];
    tooltipContent: ReactNode;
}

// export interface AxisBottomProps {
//     scale: ScaleBand<string>;
//     transform: string;
// }

export interface LabelAxis {
    scale: ScaleBand<string>;
    transform: string;
    alignment: "top" | "bottom" | "left" | "right";
}

export interface ValueAxis {
    scale: ScaleLinear<number, number, never>;
    transform: string;
    alignment: "top" | "bottom" | "left" | "right";
}

export interface ChartAxisProps {
    axis: Axis<AxisDomain>; // (selection: Selection<SVGGElement, unknown, null, undefined>) => void;
    transform?: string;
}

export const ChartAxis: React.FC<ChartAxisProps> = ({axis, transform }) => {
    const ref = useRef<SVGGElement>(null);

    useEffect(() => {
        if(ref.current) {
            select(ref.current).call(axis);
        }
    }, [axis]);

    return <g ref={ref} transform={transform}/>;
}

// export const AxisBottom: React.FC<AxisBottomProps> = ({ scale, transform }) => {
//     const ref = useRef<SVGGElement>(null);

//     useEffect(() => {
//         if (ref.current) {
//             select(ref.current).call(axisBottom(scale));
//         }
//     }, [scale]);

//     return <g ref={ref} transform={transform} />;
// }

// export interface AxisLeftProps {
//     scale: ScaleLinear<number, number, never>;
// }

// export const AxisLeft: React.FC<AxisLeftProps> = ({ scale }) => {
//     const ref = useRef<SVGGElement>(null);

//     useEffect(() => {
//         if (ref.current) {
//             select(ref.current).call(axisLeft(scale));
//         }
//     }, [scale]);

//     return <g ref={ref} />;
// }
