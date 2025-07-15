import { Card, CardBody, CardHeader } from "@heroui/react";
import ResourceLinkCard from "./ResourceLinkCard";

interface WalkthroughSummaryCardProps extends React.PropsWithChildren {
    summary: string;
    link: string;
}

const WalkthroughSummaryCard: React.FC<WalkthroughSummaryCardProps> = ({ summary, link }) => {
    return (
        <Card className="w-[706px] min-w-[706px] h-fit min-h-fit">
            <CardHeader className="flex flex-row">
                <p>ICON</p>
                <p>Official Walkthrough Summary</p>
            </CardHeader>
            <CardBody className="h-fit min-h-fit">
                <p>{summary}</p>
                <ResourceLinkCard name={"Video Walkthrough"} link={link} icon={"ICON"}/>
            </CardBody>
        </Card>
    );
}

export default WalkthroughSummaryCard;