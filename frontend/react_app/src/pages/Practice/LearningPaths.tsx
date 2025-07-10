import "../Page.css";
import Header from "../../components/Header";
import LearningPathCard from "../../components/LearningPathCard";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

function LearningPaths() {

    return (
        <div className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/practice">Practice</BreadcrumbItem>
                <BreadcrumbItem href="/practice/learning-paths">Learning Paths</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                Learning Paths Page Here
            </h1>
            <LearningPathCard title={"Title"} difficulty={"Easy"} description={"Description"} numChallenges={123} numSolves={123}/>
        </div>
    );
}

export default LearningPaths;