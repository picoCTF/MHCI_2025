import { Progress } from "@heroui/react";

export interface ProgressWithTextDivProps {
    color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    ariaLabel: string;
    value: number;
    endingText: string;
}

// TODO - make sure progress and text are aligned
const ProgressWithTextDiv: React.FC<ProgressWithTextDivProps> = ({ color, ariaLabel, value, endingText }) => {

    return (
        <div className="flex flex-row w-full h-fit place-center gap-3">
            <Progress className="flex w-full self-center" size="md" color={color} aria-label={ariaLabel} value={value}/>
            <p className="font-mono text-inline whitespace-nowrap text-default-500">{endingText}</p>
        </div>
    );
}

export default ProgressWithTextDiv;