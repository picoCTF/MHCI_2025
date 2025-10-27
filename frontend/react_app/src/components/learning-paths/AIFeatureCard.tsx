import { Card, CardBody } from "@heroui/react";
import type { ReactNode } from "react";
// import { useNavigate } from "react-router-dom";

interface AIFeatureCardProps {
    children: ReactNode | ReactNode[];
}

//This is used any time the AI feature comes up inside of a Learning Path
const AIFeatureCard: React.FC<AIFeatureCardProps> = ({children}) => {
    return (
        //This is a bit of a hacky way to get the gradient border around the inner card since tailwind doesn't allow for gradient borders
        //I'm just setting the gradient of the outer card to the gradient that I want the border to be
        // TODO - Fix the radius of the outer card so the border looks correct around the inner card
        <Card className="flex w-[706px] min-w-[706px] h-fit p-0 m-0 bg-gradient-to-t from-secondary-500 to-primary-500" radius="md" shadow="none">
            <CardBody className="flex flex-col p-0 m-0 items-center">
                <Card className="flex w-[calc(100%-2px)] h-fit m-[1px] p-6 bg-gradient-to-t from-white to-primary-50" radius="md" shadow="none">
                    <CardBody className="flex flex-col p-0 m-0 gap-5">
                        {children}
                    </CardBody>
                </Card>
            </CardBody>
        </Card>
    );
}

export default AIFeatureCard;