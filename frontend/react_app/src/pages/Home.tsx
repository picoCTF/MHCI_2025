import "./Page.css";
import Header from "../components/general/PageNavbar";
import AssignmentsDueListDiv from "../components/homepage/AssignmentsDueListDiv";
import ClassroomListDiv from "../components/homepage/ClassroomListDiv";
import LearningPathsListDiv, { type LearningPathsListDivProps } from "../components/homepage/LearningPathsListDiv";
import ProfileSummaryDiv, { type ProfileSummaryDivProps } from "../components/homepage/ProfileSummaryDiv";
import QuickLinksListCard, { type QuickLinksListDivProps } from "../components/homepage/QuickLinksListCard";
import type { BannerCardProps } from "../components/general/BannerCard";
import BannerCard from "../components/general/BannerCard";
import ContinuationDiv from "../components/homepage/ContinuationDiv";
import { Skeleton } from "@heroui/react";

export interface HomepageProps {
    // moduleList: (AssignmentsDueListDivProps | ClassroomListDivProps | LearningPathsListDivProps | QuickLinksListDivProps)[];
    banners: BannerCardProps[];
    learningPathsList: LearningPathsListDivProps["list"];
    profileSummary: ProfileSummaryDivProps;
    quickLinksList: QuickLinksListDivProps["list"];
}

const Homepage: React.FC<HomepageProps> = ({ banners, learningPathsList, profileSummary, quickLinksList }) => {

    // Figure out the state of the user and determine which elements to show them based on that state

    return (
        <div className="Page">
            <Header/>
            <div className="flex flex-row justify-center gap-24 py-20">
                {/* API_NEEDED - Get the user's username, challenges completed, number of active days, number of badges earned, 
                    and number of weeeks in their streak */}
                <div className="flex flex-col w-[286px]">
                    <ProfileSummaryDiv username={profileSummary.username} 
                        challengesCompleted={profileSummary.challengesCompleted} 
                        numActiveDays={profileSummary.numActiveDays} 
                        numBadges={profileSummary.numBadges} 
                        numStreakWeeks={profileSummary.numStreakWeeks}/>
                </div>
                <div className="flex flex-col gap-14 w-[811px]">
                    {/* API_NEEDED - Get any announcements */}
                    {banners.map((banner) => (
                        <Skeleton className="flex rounded-lg">
                            <BannerCard key={banner.id} id={banner.id} buttonText={banner.buttonText} eventTime={banner.eventTime} image={banner.image} title={banner.title}/>
                        </Skeleton>))}
                    {/* API_NEEDED - Get the user's assignments in the order they are due */}
                    <AssignmentsDueListDiv isFocused={true}/>
                    <ContinuationDiv type="path" isFocused={false} lastItem={learningPathsList[0]}/>
                    {/* API_NEEDED - Get the classrooms managed by the user */}
                    <ClassroomListDiv isFocused={false}/>
                    {/* API_NEEDED - Get the user's suggested learning paths */}
                    <LearningPathsListDiv isFocused={false} list={learningPathsList} />
                    {/* API_NEEDED - Get the quick links that are relevant to the user */}
                    <QuickLinksListCard isFocused={false} list={quickLinksList}/>
                </div>
            </div>
        </div>
    );
}

export default Homepage;