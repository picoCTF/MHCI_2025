import { Card, CardBody } from "@heroui/react";
// import type { ReactElement } from "react";
import ResourceLinkCard from "./ResourceLinkCard";
import { Icon } from "@iconify/react";

interface PrimerResourceCardProps extends React.PropsWithChildren {
    // children: ReactElement[];
}

// This is used 
const PrimerResourceCard: React.FC<PrimerResourceCardProps> = ({ }) => {
    return (
        <Card className="w-[706px] min-w-[706px] h-fit min-h-fit border-small p-6" radius="md" shadow="none">
            <CardBody className="flex flex-col gap-6 p-0 m-0">
                <div className="flex flex-row gap-3">
                    {/* FIX_ME - Check that this icon is consistent with the one in the Figma file */}
                    <Icon icon={"material-symbols:book-outline"}/>
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