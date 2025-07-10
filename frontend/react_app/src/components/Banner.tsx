import { Button, Card, CardBody, Image } from "@heroui/react";

interface BannerProps {
    buttonText: string;
    title: string;

    eventTime?: string;
    image?: boolean;
}

const Banner: React.FC<BannerProps> = ({ buttonText, title, eventTime, image }) => {

    return (
        <Card className="w-max">
            <CardBody>
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

export default Banner;