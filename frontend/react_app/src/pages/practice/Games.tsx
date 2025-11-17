import "../Page.css";
import Header from "../../components/general/PageNavbar";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

const Games: React.FC<{}> = () => {

    return (
        <div className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/practice">Practice</BreadcrumbItem>
                <BreadcrumbItem href="/practice/games">Games</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                Games Page Here
            </h1>
        </div>
    );
}

export default Games;