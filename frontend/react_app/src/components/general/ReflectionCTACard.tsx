import { Button, Skeleton, Textarea } from "@heroui/react";
import AIFeatureCard from "./AIFeatureCard";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useMockData } from "../../mock-data/utils/utils";

import approachComparisonMockData from "../../mock-data/challenges/MockApproachComparisonResponse.json";

interface ReflectionCTACardProps {
    challengeID: number;
}

const ReflectionCTACard: React.FC<ReflectionCTACardProps> = ({ /*challengeID, */ }) => {

    let [reflectionState, setReflectionState] = useState<1 | 2 | 3>(1);
    const [dictationToggle, setDictationToggle] = useState(false);

    // API_NEEDED - Get the data fron the API using the challengeID
    const { data: approachComparisonData, isLoading: approachComparisonDataLoading/*, refetch: refetchChallenge*/ } = useMockData<{aiResponse: string}>(approachComparisonMockData);

    switch(reflectionState) {
        case 2: {
            return (
                <AIFeatureCard>
                    <Textarea radius="sm" variant="underlined" placeholder="Type here or click the microphone icon to dictate." type="text"/>
                    <div className="flex flex-row justify-between">
                        {/* FIX_ME - Get access to the microphone from the user's device */}
                        <Button className="flex" size="sm" radius="full" color="default" variant={dictationToggle ? "solid" : "flat"} isIconOnly onPress={() => setDictationToggle(!dictationToggle)}>
                            <Icon icon={dictationToggle ? "material-symbols:mic" : "material-symbols:mic-outline"} className="flex w-5 h-5"/>
                        </Button>
                        <Button className="flex" size="md" radius="sm" color="primary" onPress={() => (setReflectionState(3))}>
                            Compare Approaches
                        </Button>
                    </div>
                </AIFeatureCard>
            );
        }
        case 3: {
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
        default: {
            return (
                <AIFeatureCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-3 p-0 m-0 items-center">
                            <Icon icon={"fluent:sparkle-48-regular"} className="flex w-4 h-4 text-primary-500"/>
                            <h4 className="font-semibold">Want to get better? Reflect and compare your strategy!</h4>
                        </div>
                        <p>
                            Record a quick explanation of how you solved it to get an AI-summarized comparison with the official one. 
                            Sharing your process helps reinforce what you've learned.
                        </p>
                    </div>
                    {/* TODO - fix button width + height using the button size??? */}
                    <Button className="flex flex-row gap-2 w-fit py-2 px-4" size="md" radius="sm" color="primary" onPress={() => setReflectionState(2)}>
                        Compare Approaches
                        <Icon icon={"material-symbols:settings-outline"}/>
                    </Button>
                </AIFeatureCard>
            );
        }
    }
}

export default ReflectionCTACard;