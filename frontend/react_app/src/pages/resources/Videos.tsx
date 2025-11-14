import "../Page.css";
import Header from "../../components/general/PageNavbar";
import { BreadcrumbItem, Breadcrumbs, Skeleton } from "@heroui/react";

const Videos: React.FC<{}> = () => {

    return (
        <Skeleton className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/resources">Resources</BreadcrumbItem>
                <BreadcrumbItem href="/resources/videos">Videos</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                Videos Page Here
            </h1>
        </Skeleton>
    );
}

export default Videos;