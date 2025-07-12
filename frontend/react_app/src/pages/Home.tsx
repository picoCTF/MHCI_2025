import "./Page.css";
import Header from "../components/General/PageNavbar";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

import LearningResourceCard from "../components/ResourceCard";
import ChallengeCard from "../components/General/ChallengeCard";

function Home() {

    return (
        <div className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold font-sans">
                Home Page Here
            </h1>
            <LearningResourceCard resource={"Primer"} description={"Description"} icon={"ICON"} link={"/resources/primer"}/>
            <LearningResourceCard resource={"Community"} description={"Description"} icon={"ICON"} link={"/resources/community"}/>
            <ChallengeCard name={"Challenge"} difficulty={"Easy"} tags={[]} description={"This is a challenge description"} author={"Test"} numSolves={123} hints={[]} flag={"TestFlag"} id={""} category={""} points={0}/>
        </div>
    );
}

export default Home;