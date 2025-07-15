import "./Page.css";

import Header from "../components/General/PageNavbar";
import LearningPathsListCard from "../components/Homepage/LearningPathsListCard";
import QuickLinksListCard from "../components/Homepage/QuickLinksListCard";
import AssignmentsDueSoonCard from "../components/Homepage/AssignmentsDueSoonCard";
import ClassroomManagementCard from "../components/Homepage/ClassroomManagementCard";
import ProfileSummaryCard from "../components/Homepage/ProfileSummaryCard";

function Home() {

    return (
        <div className="Page">
            <Header/>
            <div className="flex flex-row justify-around">
                <ProfileSummaryCard username={"Username"}/>
                <div>
                    <AssignmentsDueSoonCard assignmentIDs={["1", "2"]}/>
                    {/* API_NEEDED - Get the ID of the classroom associated with this card */}
                    <ClassroomManagementCard classroomIDs={["1", "2"]}/>
                    <LearningPathsListCard paths={["1", "2", "3"]}/>
                    <QuickLinksListCard resources={["Primer", "Learning Guides", "Videos", "Community"]}/>
                </div>
            </div>
        </div>
    );
}

export default Home;