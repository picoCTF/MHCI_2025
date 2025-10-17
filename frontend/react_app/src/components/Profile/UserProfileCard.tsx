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
                <div className="w-full h-[175px] bg-success-50 rounded-small place-center">
                    <Image src={avatar.src}/>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-2 justify-between">
                        <h3>{username}</h3>
                        <Button isIconOnly size="sm" radius="full" style={{backgroundColor: "bg-default-500"}}>
                            <Icon name={"info"} size={"lg"} weight={"bold"} color={"default"} colorValue="50"/>
                        </Button>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Icon name={"location_on"} size={"xs"} weight={"bold"} color={"danger"}/>
                        <p>{country}</p>
                    </div>
                    <p>{"Joined " + monthJoined + ", " + yearJoined}</p>
                </div>
                <Button variant="flat" color="primary">
                    <p>Account settings</p>
                    <Icon name={"settings"} size={"md"} color={"primary"}/>
                </Button>
            </CardBody>
        </Card>
    );
}

export default UserProfileCard;