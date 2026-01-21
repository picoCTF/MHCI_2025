import { Button, Card, CardBody, Image } from "@heroui/react";

export interface BannerCardProps {
    buttonText: string;
    id: number;
    title: string;

    eventTime?: string;
    image?: boolean;
}

// A banner appears at the top of the home page or in other locations on the platform
const BannerCard: React.FC<BannerCardProps> = ({ buttonText, title, eventTime, image }) => {

    return (
        <Card className="w-full bg-primary-50 p-6 rounded-medium border-small border-default-300" radius="md" shadow="none">
            <CardBody className="flex flex-row justify-between">
                <div className="flex">
                    <Image>{image}</Image>
                    <div className="flex flex-col">
                        <h3>{title}</h3>
                        <p>{eventTime}</p>
                    </div>
                </div>
                {/* FIX_ME - The button should use bg-primary-500 and link to the relevant page */}
                <Button className="flex" color="primary" variant="solid">{buttonText}</Button>
            </CardBody>
        </Card>
    );
}

export default BannerCard;