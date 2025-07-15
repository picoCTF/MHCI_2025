import { Avatar, Card, CardBody, CardFooter, CardHeader, Link } from "@heroui/react";
import IconCard from "../General/IconCard";

interface ProfileSummaryCardProps {
    username: string;
}

const ProfileSummaryCard: React.FC<ProfileSummaryCardProps> = ({ username }) => {
    return (
        <Card className="flex flex-col w-[286px] h-fit">
            <CardHeader className="flex flex-col items-start">
                <Avatar/>
                <h2>Welcome, {username}!</h2>
            </CardHeader>
            <CardBody>
                <Card>
                    <CardHeader>
                        <p>ICON</p>
                        {/* API_NEEDED - Get the number of weeks the user has had the current streak */}
                        <p>16</p>
                    </CardHeader>
                    <CardBody>
                        <p>Week Streak</p>
                    </CardBody>
                    <CardFooter>
                        <Card>
                            <CardBody>
                                {/* API_NEEDED - Get the number of days the user was active this week */}
                                <p>You were active 5 of 7 days this week!</p>
                            </CardBody>
                        </Card>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <p>ICON</p>
                        {/* API_NEEDED - Get the number of badges the user has earned throughout their time on the platform */}
                        <p>4</p>
                    </CardHeader>
                    <CardBody>
                        <p>Badges Earned</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <p>ICON</p>
                        {/* API_NEEDED - Get the number of challenges the user has completed throughout their time on the platform */}
                        <p>7</p>
                    </CardHeader>
                    <CardBody>
                        <p>Challenges Completed</p>
                        <p>ProfileProgressBar Here!!!!!!</p>
                    </CardBody>
                </Card>
            </CardBody>
            <CardFooter>
                <Link>Open Profile</Link>
            </CardFooter>
        </Card>
    );
}

export default ProfileSummaryCard;