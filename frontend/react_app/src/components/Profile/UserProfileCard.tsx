import { Card, CardBody, type ImageProps, Image, Button } from "@heroui/react";
import Icon from "../general/Icon";

export interface UserProfileCardProps {
    avatar: ImageProps;
    country: string;
    monthJoined: string;
    username: string;
    yearJoined: string;
}

// Show the user's profile information
const UserProfileCard: React.FC<UserProfileCardProps> = ({ avatar, country, monthJoined, username, yearJoined }) => {

    return (
        <Card className="flex w-full min-w-fit h-fit min-h-fit max-h-fit bg-content1-base border-small border-default-300" radius="md" shadow="none">
            <CardBody className="flex flex-col w-full h-fit gap-8 p-6">
                <div className="w-fill h-[175px] bg-success-50 rounded-small place-center">
                    <Image src={avatar.src}/>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col justify-between">
                        <h1>{username}</h1>
                        <div className="flex flex-row">
                            <Icon name={"article"} size={"md"} weight={"bold"} color={"default"}/>
                            <p>{country}</p>
                        </div>
                        <p>{"Joined " + monthJoined + ", " + yearJoined}</p>
                    </div>
                    <Button isIconOnly size="sm" radius="full">
                        <Icon name={"info"} size={"lg"} weight={"bold"} color={"default"}/>
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default UserProfileCard;