import "./Page.css";
import Header from "../components/general/PageNavbar";
import { BreadcrumbItem, Breadcrumbs, Skeleton } from "@heroui/react";

const Classroom: React.FC<{}> = () => {

    return (
        <Skeleton className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/classroom">Classroom</BreadcrumbItem>
            </Breadcrumbs>
            <h1>
                Classroom Page Here
            </h1>
        </Skeleton>
    );
}

export default Classroom;