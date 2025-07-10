import "./Page.css";
import Header from "../components/Header";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

import LearningResourceCard from "../components/ResourceCard";

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
        </div>
    );
}

export default Home;