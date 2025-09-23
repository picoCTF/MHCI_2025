import { Button, Card, CardBody, Image } from "@heroui/react";

interface BannerCardProps {
    buttonText: string;
    title: string;

    eventTime?: string;
    image?: boolean;
}

// A banner appears at the top of the home page or in other locations on the platform
const BannerCard: React.FC<BannerCardProps> = ({ buttonText, title, eventTime, image }) => {

    return (
        <Card className="w-max" radius="md" shadow="none">
            <CardBody className="flex flex-row">
                <Image>{image}</Image>
                <div className="flex">
                    <h2>{title}</h2>
                    <p>{eventTime}</p>
                </div>
                <Button>{buttonText}</Button>
            </CardBody>
        </Card>
    );
}

export default BannerCard;