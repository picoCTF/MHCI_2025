import { Card, CardBody, CardHeader,  } from "@heroui/react";
import QuickLinkCard from "../General/QuickLinkCard";

interface LearningPathsListCardProps {
    resources: string[];
}

const QuickLinksListCard: React.FC<LearningPathsListCardProps> = ({ resources }) => {
    return (
        <Card className="w-[811px] h-fit]">
            <CardHeader className="flex flex-col items-start">
                <h2>Discover more on picoCTF</h2>
            </CardHeader>
            <CardBody className="flex flex-row w-fill h-fit overflow-scroll">
                <QuickLinkCard title={"Primer"} description={"This is the Primer description."} icon={"ICON"}/>
                <QuickLinkCard title={"Videos"} description={"This is the Videos description."} icon={"ICON"}/>
                <QuickLinkCard title={"Learning Guides"} description={"This is the Learning Guides description."} icon={"ICON"}/>
                <QuickLinkCard title={"Community"} description={"This is the Community description."} icon={"ICON"}/>
            </CardBody>
        </Card>
    );
}

export default QuickLinksListCard;