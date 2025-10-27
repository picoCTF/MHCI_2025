import "./Page.css";
import Header from "../components/General/PageNavbar";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

const Compete: React.FC<{}> = () => {

    return (
        <div className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/compete">Compete</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                Compete Page Here
            </h1>
        </div>
    );
}

export default Compete;