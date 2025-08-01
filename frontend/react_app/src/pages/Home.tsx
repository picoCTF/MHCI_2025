import "./Page.css";

import Header from "../components/General/PageNavbar";
import LearningPathsListDiv, { type LearningPathsListDivProps } from "../components/Homepage/LearningPathsListDiv";
import QuickLinksListCard, { type QuickLinksListDivProps } from "../components/Homepage/QuickLinksListCard";
import ClassroomListDiv, { type ClassroomListDivProps } from "../components/Homepage/ClassroomListDiv";
import ProfileSummaryDiv, { type ProfileSummaryDivProps } from "../components/Homepage/ProfileSummaryDiv";
import AssignmentsDueListDiv, { type AssignmentsDueListDivProps } from "../components/Homepage/AssignmentsDueListDiv";

export interface HomepageProps {
    assignmentsList: AssignmentsDueListDivProps;
    classroomsList: ClassroomListDivProps;
    learningPathsList: LearningPathsListDivProps;
    profileSummary: ProfileSummaryDivProps;
    quickLinksList: QuickLinksListDivProps;
}

const Homepage: React.FC<HomepageProps> = ({ assignmentsList, classroomsList, learningPathsList, profileSummary, quickLinksList }) => {

    return (
        <div className="Page">
            <Header/>
            <div className="flex flex-row justify-around gap-24 py-20">
                <ProfileSummaryDiv username={profileSummary.username} 
                    challengesCompleted={profileSummary.challengesCompleted} 
                    numActiveDays={profileSummary.numActiveDays} 
                    numBadges={profileSummary.numBadges} 
                    numStreakWeeks={profileSummary.numStreakWeeks}/>
                <div className="flex flex-col gap-14">
                    {/* API_NEEDED - Get the user's assignments in the order they are due */}
                    <AssignmentsDueListDiv list={assignmentsList.list}/>
                    {/* API_NEEDED - Get the classrooms managed by the user */}
                    <ClassroomListDiv list={classroomsList.list}/>
                    {/* API_NEEDED - Get the user's suggested learning paths */}
                    <LearningPathsListDiv list={learningPathsList.list} />
                    {/* API_NEEDED - Get the quick links that are relevant to the user */}
                    <QuickLinksListCard list={quickLinksList.list}/>
                </div>
            </div>
        </div>
    );
}

export default Homepage;