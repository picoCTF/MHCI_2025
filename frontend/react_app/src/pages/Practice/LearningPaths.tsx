import "../Page.css";
import Header from "../../components/General/PageNavbar";
import LearningPathCard from "../../components/LearningPaths/LearningPathCard";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import PrimerResourceCard from "../../components/General/PrimerResourceCard";
import ResourceLinkCard from "../../components/General/ResourceLinkCard";
import VideoResourceCard from "../../components/General/VideoResourceCard";
import WalkthroughSummaryCard from "../../components/General/WalkthroughSummaryCard";
import ApproachComparisonCard from "../../components/General/ApproachComparisonCard";
import ReflectionCTACard from "../../components/General/ReflectionCTACard";
import ReflectionEntryCard from "../../components/LearningPaths/ReflectionEntryCard";
import LearningPathOverviewCard from "../../components/LearningPaths/LearningPathOverviewCard";
import LearningPathsAccordionCard from "../../components/LearningPaths/LearningPathsAccordion";

function LearningPaths() {

    return (
        <div className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/practice">Practice</BreadcrumbItem>
                <BreadcrumbItem href="/practice/learning-paths">Learning Paths</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                Learning Paths Page Here
            </h1>
            <LearningPathCard id={"1"}
                // title={"Title"} 
                /*difficulty={"Easy"}*/ 
                // description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique malesuada dignissim. Etiam elementum cursus sapien vitae mattis. Nam nec ultrices sapien. Integer sit amet lorem vel eros iaculis eleifend in id quam. Nam a nulla massa. Etiam blandit leo justo, sed interdum lorem hendrerit at. Duis id tortor quis mauris gravida placerat. Vestibulum suscipit ut ligula a pulvinar. Mauris nunc risus, eleifend sit amet lacinia eget, blandit et nunc. Donec rhoncus molestie blandit. Nulla accumsan velit in eros elementum elementum."}
                // numChallenges={123}
                /* numSolves={123}*//>
            
            <PrimerResourceCard>
                <ResourceLinkCard name={"Section 1"} link={"/resources/primer"}/>
                <ResourceLinkCard name={"Section 2"} link={"/resources/primer"}/>
            </PrimerResourceCard>
            <VideoResourceCard description={"This should be the video summary."} youtubeID={"3OawXnTELqA"}/>
            <WalkthroughSummaryCard summary={"This should be an AI summary of the walkthrough."} link={"https://youtube.com/embed/3OawXnTELqA?autoplay=0"}/>
            <ApproachComparisonCard/>
            <ReflectionCTACard/>
            <ReflectionEntryCard/>
            <LearningPathOverviewCard/>
            <LearningPathsAccordionCard challengeIDs={["1", "2", "3"]}/>
        </div>
    );
}

export default LearningPaths;