import { Icon } from "@iconify/react";
import AIFeatureCard from "../general/AIFeatureCard";
import { useMockData } from "../../mock-data/utils/utils";
import { Skeleton } from "@heroui/react";
import approachComparisonMockData from "../../mock-data/challenges/MockApproachComparisonResponse.json";

const ApproachComparisonCard: React.FC<{}> = ({}) => {

    //API_NEEDED - get refreshData function from API, pass the challengeID to the API to get the challenge data
    const { data: approachComparisonData, isLoading: approachComparisonDataLoading/*, refetch: refetchChallenge*/ } = useMockData<{aiResponse: string}>(approachComparisonMockData);

    if(approachComparisonData && !approachComparisonDataLoading) {
        return (
            <AIFeatureCard>
                <div className="flex flex-row gap-3 items-center">
                    <Icon icon={"fluent:sparkle-48-regular"} className="flex w-5 h-5 text-primary-500"/>
                    <h4>AI Approach Comparison</h4>
                </div>
                {/* API_NEEDED - Get the AI comparison between the user's strategy and the official walkthrough */}
                <p className="text-base">{approachComparisonData.aiResponse}</p>
            </AIFeatureCard>
        );
    }
    else {
        return (
            <AIFeatureCard>
                <div className="flex flex-row gap-3 items-center">
                    <Skeleton className="flex w-5 h-5 rounded-full"/>
                    <Skeleton className="rounded-full">
                        <h4>AI Approach Comparison</h4>
                    </Skeleton>
                </div>
                <Skeleton className="rounded-full">
                    <p className="text-base">This is a fake response</p>
                </Skeleton>
            </AIFeatureCard>
        );
    }
}

export default ApproachComparisonCard;