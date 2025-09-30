import { Card, CardBody } from "@heroui/react";
// import type { ReactElement } from "react";
import ResourceLinkCard from "./ResourceLinkCard";

interface PrimerResourceCardProps extends React.PropsWithChildren {
    // children: ReactElement[];
}

const PrimerResourceCard: React.FC<PrimerResourceCardProps> = ({ }) => {
    return (
        <Card className="w-[706px] min-w-[706px] h-fit min-h-fit border-small p-6" radius="md" shadow="none">
            <CardBody className="flex flex-col gap-6 p-0 m-0">
                <div className="flex flex-row gap-3">
                    <p>ICON</p> {/* ICON_NEEDED */}
                    <p>The CTF Primer</p>
                </div>
                <div className="flex flex-col gap-4">
                    <ResourceLinkCard name={"Section 1"} link={"/resources/primer"}/>
                    <ResourceLinkCard name={"Section 2"} link={"/resources/primer"}/>
                </div>
            </CardBody>
        </Card>
    );
}

export default PrimerResourceCard;