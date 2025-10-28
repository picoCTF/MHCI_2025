import "./Page.css";
import Header from "../components/General/PageNavbar";
// import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import ChallengeCompletionProfileCard, { type ChallengeCompletionProfileCardProps } from "../components/Profile/ChallengeCompletionProfileCard";
import SkillDistributionProfileCard, { type SkillDistributionProfileCardProps } from "../components/Profile/SkillDistributionProfileCard";
import BadgesProfileCard from "../components/Profile/BadgesProfileCard";
import ActivityProfileCard, { type ActivityProfileCardProps } from "../components/Profile/ActivityProfileCard";
import UserProfileCard, { type UserProfileCardProps } from "../components/Profile/UserProfileCard";
import LearningPathsProfileCard from "../components/profile/LearningPathsProfileCard";
import UserStudiesCard from "../components/profile/UserStudiesCard";
import EventProfileCard from "../components/profile/EventProfileCard";

export interface ProfileProps {
    activity: ActivityProfileCardProps;
    skillDistribution: SkillDistributionProfileCardProps;
    challengeCompletion: ChallengeCompletionProfileCardProps;
    userInfo: UserProfileCardProps;
}

const Profile: React.FC<ProfileProps> = ({ activity, challengeCompletion, skillDistribution, userInfo }) => {

    return (
        <div className="Page">
            <Header/>
            <div className="flex flex-col w-full gap-10 py-16 px-32">
                <div className="flex flex-row w-full gap-10">
                    <div className="flex flex-col w-[50%] gap-10">
                        {/* API_NEEDED - Get the info for the user's profile card: avatar, country, month joined, username, and year joined */}
                        <UserProfileCard avatar={userInfo.avatar} country={userInfo.country} monthJoined={userInfo.monthJoined} 
                            username={userInfo.username} yearJoined={userInfo.yearJoined}/>
                        <LearningPathsProfileCard/>
                    </div>
                    <div className="flex flex-col w-fit gap-10">
                        {/* API_NEEDED - Get the number of challenges the user has solved and the length of their current streak */}
                        <ActivityProfileCard numSolves={activity.numSolves} streakLength={activity.streakLength}/>
                        {/* API_NEEDED - Get the number of easy, medium, and hard challenges the user has completed and 
                            the total number of problems they've completed*/}
                        <ChallengeCompletionProfileCard numEasyChallenges={challengeCompletion.numEasyChallenges} 
                            numMediumChallenges={challengeCompletion.numMediumChallenges} 
                            numHardChallenges={challengeCompletion.numHardChallenges} 
                            totalNumChallenges={challengeCompletion.totalNumChallenges}/>
                        {/* API_NEEDED - Get the amount of challenges the user has completed in each category, 
                            along with the total amount of challenges in each category */}
                        <SkillDistributionProfileCard numBinaryExploitationChallenges={skillDistribution.numBinaryExploitationChallenges} 
                            totalBinaryExploitChallenges={skillDistribution.totalBinaryExploitChallenges} 
                            numCryptographyChallenges={skillDistribution.numCryptographyChallenges} 
                            totalCryptographyChallenges={skillDistribution.totalCryptographyChallenges} 
                            numForensicsChallenges={skillDistribution.numForensicsChallenges} 
                            totalForensicsChallenges={skillDistribution.totalForensicsChallenges} 
                            numGeneralSkillsChallenges={skillDistribution.numGeneralSkillsChallenges} 
                            totalGeneralSkillsChallenges={skillDistribution.totalGeneralSkillsChallenges} 
                            numReverseEngChallenges={skillDistribution.numReverseEngChallenges} 
                            totalReverseEngChallenges={skillDistribution.totalReverseEngChallenges} 
                            numWebExploitChallenges={skillDistribution.numWebExploitChallenges} 
                            totalWebExploitChallenges={skillDistribution.totalWebExploitChallenges}/>
                    </div>
                </div>
                <BadgesProfileCard/>
                <EventProfileCard/>
                <UserStudiesCard/>
            </div>
        </div>
    );
}

export default Profile;