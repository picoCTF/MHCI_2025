import { Card, CardBody } from "@heroui/react";

interface ActivitySummaryCardProps {
    summary: string;
}

const ActivitySummaryCard: React.FC<ActivitySummaryCardProps> = ({ summary }) => {

    return (
        <Card className="flex flex-row w-fit h-fit bg-primary-50 text-left border-small border-default-300 py-2 px-4" radius="sm" shadow="none">
            <CardBody className="flex flex-row w-fit h-fit text-left text-primary-600 p-0 m-0 gap-2">
                {/* NEED_ICON */}
                <p>ICON</p>
                <p>{summary}</p>
            </CardBody>
        </Card>
    );
}

export default ActivitySummaryCard;