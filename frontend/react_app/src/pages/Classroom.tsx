import "./Page.css";
import Header from "../components/General/PageNavbar";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

interface ClassroomProps {}

const Classroom: React.FC<ClassroomProps> = ({ }) => {

    return (
        <div className="Page">
            <Header/>
            <Breadcrumbs>
                <BreadcrumbItem href="/classroom">Classroom</BreadcrumbItem>
            </Breadcrumbs>
            <h1>
                Classroom Page Here
            </h1>
        </div>
    );
}

export default Classroom;