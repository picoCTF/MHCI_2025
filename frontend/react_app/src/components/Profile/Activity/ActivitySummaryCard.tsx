import { Card, CardBody } from "@heroui/react";

interface ActivitySummaryCardProps {
    summary: string;
}

const ActivitySummaryCard: React.FC<ActivitySummaryCardProps> = ({ summary }) => {

    return (
        <Card className="flex flex-row w-fit h-fit bg-primary-50 text-left border-small py-2 px-4" radius="sm" shadow="none">
            <CardBody className="flex flex-row w-fit h-fit text-left text-primary-600 p-0 m-0 gap-2">
                {/* TODO - replace icon with AI symbol */}
                <p>ICON</p>
                <p>{summary}</p>
            </CardBody>
        </Card>
    );
}

export default ActivitySummaryCard;