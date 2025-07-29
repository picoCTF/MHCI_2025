import "../../Page.css";
import Header from "../../../components/General/PageNavbar";
import LearningPathCard, { type LearningPathCardProps } from "../../../components/LearningPaths/LearningPathCard";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import PrimerResourceCard from "../../../components/General/PrimerResourceCard";
// import ResourceLinkCard from "../../components/General/ResourceLinkCard";
import VideoResourceCard from "../../../components/General/VideoResourceCard";
import WalkthroughSummaryCard from "../../../components/General/WalkthroughSummaryCard";
import ApproachComparisonCard from "../../../components/General/ApproachComparisonCard";
import ReflectionCTACard from "../../../components/General/ReflectionCTACard";
import ReflectionEntryCard from "../../../components/LearningPaths/ReflectionEntryCard";

export interface LearningPathsHomeProps {
    paths: LearningPathCardProps[];
}

const LearningPathsHome: React.FC<LearningPathsHomeProps> = ({ paths }) => {

    let continuingPaths: LearningPathCardProps[] = [];

    paths.forEach(path => {
        if(path.hasProgress) {
            continuingPaths.push(path);
        }
    });

    return (
        <div className="Page">
            <Header/>
            <div className="flex flex-col w-full py-10 items-center">
                <div className="flex flex-col w-full max-w-[1200px] gap-16 items-start">
                    <Breadcrumbs>
                        <BreadcrumbItem href="/practice/learning-paths">Practice</BreadcrumbItem>
                        <BreadcrumbItem href="/practice/learning-paths">Learning Paths</BreadcrumbItem>
                    </Breadcrumbs>

                    <div className="flex flex-col w-full gap-3 text-left">
                        <h2 className="font-mono-600 text-xl">
                            Learning paths
                        </h2>
                        <p>Improve your cybersecurity skills with step-by-step learning</p>
                    </div>

                    <div className="flex flex-col w-full h-fit items-start justify-left text-left gap-6">
                        <h3>Continue learning</h3>
                        <div className="flex flex-row w-full max-w-[1200px] rounded-large gap-6 p-8 bg-primary-100 overflow-scroll">
                            {continuingPaths.map((path) => (<LearningPathCard key={path.id} description={path.description}
                                difficulty={path.difficulty} hasProgress={path.hasProgress} id={path.id}
                                link={path.link} name={path.name} numCompletedChallenges={path.numCompletedChallenges}
                                numSolves={path.numSolves} numTotalChallenges={path.numTotalChallenges}/>))}
                        </div>
                    </div>

                    {/* List of learning paths */}
                    <div className="grid gap-x-6 gap-y-10 grid-cols-3">
                        {paths.map((path) => (<LearningPathCard key={path.id} description={path.description}
                            difficulty={path.difficulty} hasProgress={false} id={path.id}
                            link={path.link} name={path.name} numCompletedChallenges={path.numCompletedChallenges}
                            numSolves={path.numSolves} numTotalChallenges={path.numTotalChallenges}/>))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LearningPathsHome;