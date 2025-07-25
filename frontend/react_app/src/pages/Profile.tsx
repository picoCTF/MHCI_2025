import "./Page.css";
import Header from "../components/General/PageNavbar";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import ChallengeCompletionProfileCard from "../components/Profile/ChallengeCompletionProfileCard";
import SkillDistributionProfileCard from "../components/Profile/SkillDistributionProfileCard";
import BadgesProfileCard from "../components/Profile/BadgesProfileCard";
import ActivityProfileCard from "../components/Profile/ActivityProfileCard";

function Profile() {

    return (
        <div className="Page">
            <Header/>
            <div>
                <Breadcrumbs>
                    <BreadcrumbItem href="/profile">Profile</BreadcrumbItem>
                </Breadcrumbs>
                <h1 className="text-3xl font-bold">
                    Profile Page Here
                </h1>
                <ChallengeCompletionProfileCard numEasyChallenges={5} numMediumChallenges={10} numHardChallenges={3} totalNumChallenges={18}/>
                <SkillDistributionProfileCard numBinaryExploitationChallenges={1} totalBinaryExploitChallenges={10} numCryptographyChallenges={5} totalCryptographyChallenges={10} numForensicsChallenges={1} totalForensicsChallenges={10} numGeneralSkillsChallenges={0} totalGeneralSkillsChallenges={10} numReverseEngChallenges={0} totalReverseEngChallenges={10} numWebExploitChallenges={0} totalWebExploitChallenges={10}/>
                <BadgesProfileCard selectedBadges={[1, 2, 3, 4]}/>
                <ActivityProfileCard/>
            </div>
        </div>
    );
}

export default Profile;