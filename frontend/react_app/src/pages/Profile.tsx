import "./Page.css";
import Header from "../components/General/PageNavbar";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import ChallengeCompletionProfileCard from "../components/Profile/ChallengeCompletionProfileCard";
import SkillDistributionProfileCard from "../components/Profile/SkillDistributionProfileCard";
import BadgesProfileCard from "../components/Profile/BadgesProfileCard";
import ActivityProfileCard from "../components/Profile/ActivityProfileCard";
import UserProfileCard from "../components/Profile/UserProfileCard";

function Profile() {

    return (
        <div className="Page">
            <Header/>
            <div className="flex flex-row w-[1200px] gap-24 py-20">
                <div className="flex flex-col w-fit gap-10">
                    <UserProfileCard avatar={{}} country={"United States"} monthJoined={"May"} username={"mgibney"} yearJoined={"2025"}/>
                </div>
                <div className="flex flex-col w-fit gap-10">
                    <ActivityProfileCard numSolves={10} streakLength={5}/>
                    <ChallengeCompletionProfileCard numEasyChallenges={5} numMediumChallenges={10} numHardChallenges={3} totalNumChallenges={18}/>
                    <SkillDistributionProfileCard numBinaryExploitationChallenges={1} totalBinaryExploitChallenges={10} numCryptographyChallenges={2} totalCryptographyChallenges={10} numForensicsChallenges={3} totalForensicsChallenges={10} numGeneralSkillsChallenges={0} totalGeneralSkillsChallenges={10} numReverseEngChallenges={5} totalReverseEngChallenges={10} numWebExploitChallenges={5} totalWebExploitChallenges={10}/>
                    <BadgesProfileCard selectedBadges={[1, 2, 3, 4]}/>
                </div>
            </div>
        </div>
    );
}

export default Profile;