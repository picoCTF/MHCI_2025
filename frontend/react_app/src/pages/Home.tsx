import "./Page.css";

import Header from "../components/General/PageNavbar";
import LearningPathsListCard from "../components/Homepage/LearningPathsListCard";
import QuickLinksListCard from "../components/Homepage/QuickLinksListCard";
import AssignmentsDueSoonCard from "../components/Homepage/AssignmentsDueSoonCard";
import ClassroomManagementDiv from "../components/Homepage/ClassroomManagementDiv";
import ProfileSummaryDiv from "../components/Homepage/ProfileSummaryDiv";
import { assignmentsList, classroomsList, quickLinksList } from "../mock-data/HomeData";

function Home() {

    return (
        <div className="Page">
            <Header/>
            <div className="flex flex-row justify-around gap-24 py-20">
                {/* <h1 className="font-sans">This is a test of Geist Sans</h1>
                <h1 className="font-mono">This is a test of Geist Mono</h1> */}
                <ProfileSummaryDiv username={"Username"}/>
                <div className="flex flex-col gap-14">
                    <AssignmentsDueSoonCard list={assignmentsList}/>
                    {/* API_NEEDED - Get the ID of the classroom associated with this card */}
                    <ClassroomManagementDiv classrooms={classroomsList}/>
                    <LearningPathsListCard paths={["1", "2", "3"]}/>
                    <QuickLinksListCard list={quickLinksList}/>
                </div>
            </div>
        </div>
    );
}

export default Home;