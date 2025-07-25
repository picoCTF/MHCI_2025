import AIFeatureCard from "./AIFeatureCard";
import Icon from "./Icon";

interface ApproachComparisonCardProps {
}

const ApproachComparisonCard: React.FC<ApproachComparisonCardProps> = ({}) => {
    return (
        <AIFeatureCard>
            <div className="flex flex-row gap-3">
                <Icon name={"award_star"} size={"20"} weight={"bold"} color={"primary"}/>
                <p>AI Approach Comparison</p>
            </div>
            {/* API_NEEDED - Get the AI comparison between the user's strategy and the official walkthrough */}
            <p>The AI comparison between the official walkthrough and the user's strategy should be here.</p>
        </AIFeatureCard>
    );
}

export default ApproachComparisonCard;