import "../Page.css";
import Header from "../../components/General/PageNavbar";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

function Primer() {

    return (
        <div className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/resources">Resources</BreadcrumbItem>
                <BreadcrumbItem href="/resources/primer">Primer</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                Primer Page Here
            </h1>
        </div>
    );
}

export default Primer;