import { Card, CardBody } from "@heroui/react";

interface ActivitySummaryCardProps {}

const ActivitySummaryCard: React.FC<ActivitySummaryCardProps> = ({ }) => {

    return (
        <Card radius="md" className="flex flex-row w-fit h-fit bg-sky-400 text-left">
            <CardBody className="flex flex-row w-fit h-fit text-left">
                <p>ICON</p>
                {/* API_NEEDED - Use an LLM to generate a summary of the user's activity 
                (ie the challenges they've solved) whenever they reload the page */}
                <p>AI activity summary here.</p>
            </CardBody>
        </Card>
    );
}

export default ActivitySummaryCard;