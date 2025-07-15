import { Progress } from "@heroui/react";

interface ProgressWithTextDivProps {
    color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    ariaLabel: string;
    value: number;
    startingText?: string;
    endingText?: string;
}

const ProgressWithTextDiv: React.FC<ProgressWithTextDivProps> = ({ color, ariaLabel, value, startingText, endingText }) => {

    return (
        <div className="flex flex-row w-fill min-w-fill h-fit">
            <p className="w-fit min-w-fit h-[1rem]">{startingText}</p>
            <Progress className="w-fill min-w-fill" size="md" color={color} aria-label={ariaLabel} value={value}/>
            <p className="w-fit min-w-fit h-[1rem]">{endingText}</p>
        </div>
    );
}

export default ProgressWithTextDiv;