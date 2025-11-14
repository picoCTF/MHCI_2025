import "../Page.css";
import Header from "../../components/general/PageNavbar";
import { BreadcrumbItem, Breadcrumbs, Skeleton } from "@heroui/react";

const Community: React.FC<{}> = () => {

    return (
        <Skeleton className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/resources">Resources</BreadcrumbItem>
                <BreadcrumbItem href="/resources/community">Community</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                Community Page Here
            </h1>
        </Skeleton>
    );
}

export default Community;