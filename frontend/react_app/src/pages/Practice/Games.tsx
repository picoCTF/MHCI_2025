import "../Page.css";
import Header from "../../components/Header";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

function Games() {

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