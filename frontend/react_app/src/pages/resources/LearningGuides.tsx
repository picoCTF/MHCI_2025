import "../Page.css";
import Header from "../../components/General/PageNavbar";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

const LearningGuides: React.FC<{}> = () => {

    return (
        <div className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/resources">Resources</BreadcrumbItem>
                <BreadcrumbItem href="/resources/learning-guides">Learning Guides</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                Learning Guides Page Here
            </h1>
        </div>
    );
}

export default LearningGuides;