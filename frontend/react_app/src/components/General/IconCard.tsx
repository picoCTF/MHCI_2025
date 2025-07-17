import { Card, CardBody, } from "@heroui/react";

interface IconProps {
    background: string | undefined;
    icon: string;
}

const IconCard: React.FC<IconProps> = ({ background, icon }) => {

    return (
        <Card radius="md" className="w-[64px] h-[64px] bg-sky-400 place-content-center">
            <CardBody className="place-content-center">
                <p>{icon}</p>
            </CardBody>
        </Card>
    );
}

export default IconCard;