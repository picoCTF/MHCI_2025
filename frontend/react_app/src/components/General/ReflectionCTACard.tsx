import { Button } from "@heroui/react";
import AIFeatureCard from "../learning-paths/AIFeatureCard";
import { Icon } from "@iconify/react";

const ReflectionCTACard: React.FC<{}> = () => {
    return (
        <AIFeatureCard>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-3 p-0 m-0">
                    {/* NEED_ICON */}
                    <Icon icon={""}/>
                    <p>Want to get better? Reflect and compare your strategy!</p>
                </div>
                <p>
                    Record a quick explanation of how you solved it to get an AI-summarized comparison with the official one. 
                    Sharing your process helps reinforce what you've learned.
                </p>
            </div>
            {/* TODO - fix button width + height using the button size??? */}
            <Button className="flex w-fit py-2 px-4" size="md" radius="sm" color="primary">
                Compare Approaches
            </Button>
        </AIFeatureCard>
    );
}

export default ReflectionCTACard;