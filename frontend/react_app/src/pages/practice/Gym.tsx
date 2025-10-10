import "../Page.css";
import Header from "../../components/General/PageNavbar";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

interface GymProps {}

const Gym: React.FC<GymProps> = ({ }) => {

    return (
        <div className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/practice">Practice</BreadcrumbItem>
                <BreadcrumbItem href="/practice/gym">Gym</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="text-3xl font-bold">
                Gym Page Here
            </h1>
        </div>
    );
}

export default Gym;