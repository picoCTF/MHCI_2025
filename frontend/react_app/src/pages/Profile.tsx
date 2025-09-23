import "./Page.css";
import Header from "../components/General/PageNavbar";
// import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import ChallengeCompletionProfileCard, { type ChallengeCompletionProfileCardProps } from "../components/Profile/ChallengeCompletionProfileCard";
import SkillDistributionProfileCard, { type SkillDistributionProfileCardProps } from "../components/Profile/SkillDistributionProfileCard";
import BadgesProfileCard, { type BadgesProfileCardProps } from "../components/Profile/BadgesProfileCard";
import ActivityProfileCard, { type ActivityProfileCardProps } from "../components/Profile/ActivityProfileCard";
import UserProfileCard, { type UserProfileCardProps } from "../components/Profile/UserProfileCard";

export interface ProfileProps {
    activityCard: ActivityProfileCardProps;
    skillDistributionCard: SkillDistributionProfileCardProps;
    challengeCompletionCard: ChallengeCompletionProfileCardProps;
    badgesCard: BadgesProfileCardProps;
    userCard: UserProfileCardProps;
}

const Profile: React.FC<ProfileProps> = ({ activityCard, badgesCard, challengeCompletionCard, skillDistributionCard, userCard }) => {

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
                    <BadgesProfileCard selectedBadges={badgesCard.selectedBadges}/>
                </div>
            </div>
        </div>
    );
}

export default Profile;