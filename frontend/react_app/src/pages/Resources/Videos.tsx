import "../Page.css";
import Header from "../../components/Header";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

function Videos() {

    return (
        <div className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/resources">Resources</BreadcrumbItem>
                <BreadcrumbItem href="/resources/videos">Videos</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                Videos Page Here
            </h1>
        </div>
    );
}

export default Videos;