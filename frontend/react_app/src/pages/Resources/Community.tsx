import "../Page.css";
import Header from "../../components/Header";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

function Community() {

    return (
        <div className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/resources">Resources</BreadcrumbItem>
                <BreadcrumbItem href="/resources/community">Community</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                Community Page Here
            </h1>
        </div>
    );
}

export default Community;