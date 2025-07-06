import "./Page.css";
import Header from "../components/Header";
import { Button } from "@heroui/react";

function Home() {

    return (
        <div className="Home" style={{width: "100%", height: "100%"}}>
            <Header/>
            <h1 className="text-3xl font-bold underline">
                Tailwind Header!!!!
            </h1>
            <Button color="primary" radius="none">HeroUI Button</Button>
        </div>
    );
}

export default Home;