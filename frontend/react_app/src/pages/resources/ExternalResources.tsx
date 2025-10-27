import "../Page.css";
import Header from "../../components/General/PageNavbar";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

const ExternalResources: React.FC<{}> = () => {

    return (
        <div className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/resources">Resources</BreadcrumbItem>
                <BreadcrumbItem href="/resources/external-resources">External Resources</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                External Resources Page Here
            </h1>
        </div>
    );
}

export default ExternalResources;