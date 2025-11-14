import "./Page.css";
import Header from "../components/general/PageNavbar";
import { BreadcrumbItem, Breadcrumbs, Skeleton } from "@heroui/react";

const Compete: React.FC<{}> = () => {

    return (
        <Skeleton className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/compete">Compete</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                Compete Page Here
            </h1>
        </Skeleton>
    );
}

export default Compete;