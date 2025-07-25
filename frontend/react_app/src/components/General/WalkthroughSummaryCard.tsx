import { Card, CardBody, CardHeader } from "@heroui/react";
import ResourceLinkCard from "./ResourceLinkCard";

interface WalkthroughSummaryCardProps extends React.PropsWithChildren {
    summary: string;
    link: string;
}

const WalkthroughSummaryCard: React.FC<WalkthroughSummaryCardProps> = ({ summary, link }) => {
    return (
        <Card className="w-[706px] min-w-[706px] h-fit min-h-fit p-6 m-0 border-small" radius="md" shadow="none">
            <CardBody className="flex flex-col h-fit min-h-fit p-0 gap-6">
                <div className="flex flex-row gap-3">
                    <p>ICON</p>
                    <p>Official Walkthrough Summary</p>
                </div>
                <p>{summary}</p>
                <ResourceLinkCard name={"Video Walkthrough"} link={link} icon={"ICON"}/>
            </CardBody>
        </Card>
    );
}

export default WalkthroughSummaryCard;