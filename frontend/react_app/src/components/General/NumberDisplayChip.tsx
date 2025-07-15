interface NumberDisplayChipProps {
    number: number;
    label: string;
    leadingIcon?: string;
}

const NumberDisplayChip: React.FC<NumberDisplayChipProps> = ({ number, leadingIcon, label }) => {
    return (
        <div className="flex row gap-2 text-xs">
            <p>{leadingIcon}</p>
            <div className="flex row gap-1">
                <p>{number}</p>
                <p>{label}</p>
            </div>
        </div>
    );
}

export default NumberDisplayChip;