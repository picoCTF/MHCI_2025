import "./Page.css";
import Header from "../components/Header";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

function Profile() {

    return (
        <div className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/profile">Profile</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                Profile Page Here
            </h1>
        </div>
    );
}

export default Profile;