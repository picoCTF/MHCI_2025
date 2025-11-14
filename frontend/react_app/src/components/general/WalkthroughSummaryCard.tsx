import { Card, CardBody } from "@heroui/react";
import ResourceLinkCard from "./ResourceLinkCard";
import { Icon } from "@iconify/react";

interface WalkthroughSummaryCardProps extends React.PropsWithChildren {
    summary: string;
    link: string;
}

// Need to figure out if every walkthrough summary is going to have a link to a video
// If not, then the ResourceLinkCard should be optional
const WalkthroughSummaryCard: React.FC<WalkthroughSummaryCardProps> = ({ summary, link }) => {
    return (
        <Card className="w-[706px] min-w-[706px] h-fit min-h-fit p-6 m-0 border-small" radius="md" shadow="none">
            <CardBody className="flex flex-col h-fit min-h-fit p-0 gap-6">
                <div className="flex flex-row gap-3">
                    {/* NEED_ICON */}
                    <Icon icon="material-symbols:border-color-outline"/>
                    <p>Official Walkthrough Summary</p>
                </div>
                <p>{summary}</p>
                <ResourceLinkCard name={"Video Walkthrough"} link={link} icon={"ICON"}/>
            </CardBody>
        </Card>
    );
}

export default WalkthroughSummaryCard;