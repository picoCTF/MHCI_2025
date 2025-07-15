import { Card, CardBody, CardHeader } from "@heroui/react";
import type { ReactElement } from "react";

interface PrimerResourceCardProps extends React.PropsWithChildren {
    children: ReactElement[];
}

const PrimerResourceCard: React.FC<PrimerResourceCardProps> = ({ children }) => {
    return (
        <Card className="w-[706px] min-w-[706px] h-fit min-h-fit">
            <CardHeader>
                <p>ICON</p>
                <p>The CTF Primer</p>
            </CardHeader>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    );
}

export default PrimerResourceCard;