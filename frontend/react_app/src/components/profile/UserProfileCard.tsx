import { Card, CardBody, type ImageProps, Image, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

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
                            <Icon icon={"material-symbols:info-outline"} width={40} height={40} className={"font-bold text-default-50"}/>
                        </Button>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Icon icon={"material-symbols:location-on-outline"} width={16} height={16} className={"font-bold text-danger"}/>
                        <p>{country}</p>
                    </div>
                    <p>{"Joined " + monthJoined + ", " + yearJoined}</p>
                </div>
                <Button variant="flat" color="primary">
                    <p>Account settings</p>
                    <Icon icon={"material-symbols:settings-outline"} width={24} height={24} className="text-primary-500"/>
                </Button>
            </CardBody>
        </Card>
    );
}

export default UserProfileCard;