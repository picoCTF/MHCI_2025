import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export interface ActivitySummaryCardProps {
    summary: string;
}

const ActivitySummaryCard: React.FC<ActivitySummaryCardProps> = ({ summary }) => {

    return (
        <Card className="flex flex-row w-fit h-fit bg-primary-50 text-left border-small border-default-300 py-2 px-4" radius="sm" shadow="none">
            <CardBody className="flex flex-row w-fit h-fit text-left text-primary-600 items-center p-0 m-0 gap-2">
                <Icon icon={"fluent:sparkle-48-regular"} width={24} height={24}/>
                <p>{summary}</p>
            </CardBody>
        </Card>
    );
}

export default ActivitySummaryCard;