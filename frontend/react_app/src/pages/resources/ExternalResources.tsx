import "../Page.css";
import Header from "../../components/general/PageNavbar";
import { BreadcrumbItem, Breadcrumbs, Skeleton } from "@heroui/react";

const ExternalResources: React.FC<{}> = () => {

    return (
        <Skeleton className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/resources">Resources</BreadcrumbItem>
                <BreadcrumbItem href="/resources/external-resources">External Resources</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                External Resources Page Here
            </h1>
        </Skeleton>
    );
}

export default ExternalResources;