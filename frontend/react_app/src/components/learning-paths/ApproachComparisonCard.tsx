import AIFeatureCard from "./AIFeatureCard";
import Icon from "../general/Icon";

interface ApproachComparisonCardProps {
    aiResponse: string;
}

const ApproachComparisonCard: React.FC<ApproachComparisonCardProps> = ({ aiResponse }) => {
    return (
        <AIFeatureCard>
            <div className="flex flex-row gap-3">
                <Icon name={"award_star"} size={"sm"} weight={"bold"} color={"primary"}/>
                <h4>AI Approach Comparison</h4>
            </div>
            {/* API_NEEDED - Get the AI comparison between the user's strategy and the official walkthrough */}
            <p className="text-base">{aiResponse}</p>
        </AIFeatureCard>
    );
}

export default ApproachComparisonCard;