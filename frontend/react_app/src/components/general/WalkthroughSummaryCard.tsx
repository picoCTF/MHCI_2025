import { Card, Skeleton } from "@heroui/react";
import ResourceLinkCard, { ResourceLinkCardSkeleton } from "./ResourceLinkCard";
import { Icon } from "@iconify/react";
import { useMockData } from "../../mock-data/utils/utils";
import type { Walkthrough } from "../../api_interfaces/walkthrough";
import walkthroughMockData from "../../mock-data/challenges/MockWalkthroughResponse.json";

// Need to figure out if every walkthrough summary is going to have a link to a video
// If not, then the ResourceLinkCard should be optional
const WalkthroughSummaryCard: React.FC<{ challengeID: number }> = ({ /*challengeID*/ }) => {

    //API_NEEDED - Get the summary and external link

    const { data: walkthroughData, isLoading: walkthroughDataLoading/*, refetch: refetchWalkthrough*/ } = useMockData<Walkthrough>(walkthroughMockData);

    if(walkthroughData && !walkthroughDataLoading) {
        return (
            <Card className="flex flex-col w-[706px] min-w-[706px] h-fit min-h-fit p-6 m-0 gap-6 border-small border-default-300" radius="md" shadow="none">
                <div className="flex flex-row gap-3">
                    <Icon icon="material-symbols:border-color-outline"/>
                    <p>Official Walkthrough Summary</p>
                </div>
                <p>{walkthroughData.summary}</p>
                <ResourceLinkCard name={"Video Walkthrough"} link={walkthroughData.link} icon={"material-symbols:smart-display-outline"}/>
            </Card>
        );
    }
    else {
        return (
            <Card className="flex flex-col w-[706px] min-w-[706px] h-fit min-h-fit p-6 m-0 gap-6 border-small border-default-300" radius="md" shadow="none">
                <div className="flex flex-row gap-3">
                    <Icon icon="material-symbols:border-color-outline"/>
                    <Skeleton className="rounded-full">
                        <p>Official Walkthrough Summary</p>
                    </Skeleton>
                </div>
                {Array.from({length: 3}, (_, index) => (<Skeleton key={index} className="flex w-full rounded-full"/>))}
                <ResourceLinkCardSkeleton/>
            </Card>
        );
    }
}

export default WalkthroughSummaryCard;