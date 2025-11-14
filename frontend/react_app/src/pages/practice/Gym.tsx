import "../Page.css";
import Header from "../../components/general/PageNavbar";
import { BreadcrumbItem, Breadcrumbs, Skeleton } from "@heroui/react";

const Gym: React.FC<{}> = () => {

    return (
        <Skeleton className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/practice">Practice</BreadcrumbItem>
                <BreadcrumbItem href="/practice/gym">Gym</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                Gym Page Here
            </h1>
        </Skeleton>
    );
}

export default Gym;