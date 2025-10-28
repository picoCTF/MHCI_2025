import { Icon } from "@iconify/react";
import AIFeatureCard from "./AIFeatureCard";

interface ApproachComparisonCardProps {
    aiResponse: string;
}

const ApproachComparisonCard: React.FC<ApproachComparisonCardProps> = ({ aiResponse }) => {
    return (
        <AIFeatureCard>
            <div className="flex flex-row gap-3">
                <Icon icon={"material-symbols:award_star-outline"} width={20} height={20} className={"text-primary"}/>
                <h4>AI Approach Comparison</h4>
            </div>
            {/* API_NEEDED - Get the AI comparison between the user's strategy and the official walkthrough */}
            <p className="text-base">{aiResponse}</p>
        </AIFeatureCard>
    );
}

export default ApproachComparisonCard;