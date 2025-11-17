import "../Page.css";
import Header from "../../components/general/PageNavbar";
import { BreadcrumbItem, Breadcrumbs, Skeleton } from "@heroui/react";

const AccountSettings: React.FC<{}> = () => {

    return (
        <div className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/profile/account-settings">Account Settings</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                Account Settings Page Here
            </h1>
        </div>
    );
}

export default AccountSettings;