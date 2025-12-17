import { Button } from "@heroui/react";
import AIFeatureCard from "./AIFeatureCard";
import { Icon } from "@iconify/react";

interface ReflectionCTACardProps {
    challengeID: number;
    displayUpdateFunction: Function;
}

const ReflectionCTACard: React.FC<ReflectionCTACardProps> = ({ /*challengeID, */displayUpdateFunction }) => {
    return (
        <AIFeatureCard>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-3 p-0 m-0">
                    <Icon icon={"fluent:sparkle-48-regular"}/>
                    <p>Want to get better? Reflect and compare your strategy!</p>
                </div>
                <p>
                    Record a quick explanation of how you solved it to get an AI-summarized comparison with the official one. 
                    Sharing your process helps reinforce what you've learned.
                </p>
            </div>
            {/* TODO - fix button width + height using the button size??? */}
            <Button className="flex flex-row gap-2 w-fit py-2 px-4" size="md" radius="sm" color="primary" onPress={() => displayUpdateFunction(2)}>
                Compare Approaches
                <Icon icon={"material-symbols:settings-outline"}/>
            </Button>
        </AIFeatureCard>
    );
}

export default ReflectionCTACard;