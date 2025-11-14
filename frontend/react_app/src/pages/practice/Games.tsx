import "../Page.css";
import Header from "../../components/general/PageNavbar";
import { BreadcrumbItem, Breadcrumbs, Skeleton } from "@heroui/react";

const Games: React.FC<{}> = () => {

    return (
        <Skeleton className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/practice">Practice</BreadcrumbItem>
                <BreadcrumbItem href="/practice/games">Games</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                Games Page Here
            </h1>
        </Skeleton>
    );
}

export default Games;