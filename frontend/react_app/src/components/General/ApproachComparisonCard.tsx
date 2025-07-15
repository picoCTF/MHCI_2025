import { Card, CardBody, CardHeader } from "@heroui/react";
// import { useNavigate } from "react-router-dom";

interface ApproachComparisonCardProps {
}

const ApproachComparisonCard: React.FC<ApproachComparisonCardProps> = ({}) => {
    return (
        <Card className="w-[706px] min-w-[706px] h-fit min-h-[168px]">
            <CardHeader>
                <p>ICON AI Approach Comparison</p>
            </CardHeader>
            <CardBody>
                {/* API_NEEDED - Get the AI comparison between the user's strategy and the official walkthrough */}
                <p>The AI comparison between the official walkthrough and the user's strategy should be here.</p>
            </CardBody>
        </Card>
    );
}

export default ApproachComparisonCard;