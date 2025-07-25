import { Avatar, Card, CardBody, Link } from "@heroui/react";
import ChallengeCompletionDiv from "../General/ChallengeCompletionDiv";

interface ProfileSummaryDivProps {
    username: string;
}

const ProfileSummaryDiv: React.FC<ProfileSummaryDivProps> = ({ username }) => {
    return (
        <div className="flex flex-col w-[286px] min-w-[286px] max-w-[286px] h-fit bg-transparent gap-12">
            <div className="flex flex-col w-full h-fit gap-6">
                <Avatar size="md"/>
                <h1 className="text-start">Welcome, {username}!</h1>
            </div>
            <div className="flex flex-col gap-6">
                <h2 className="text-start">Your Progress</h2>
                <div className="flex flex-col gap-4">
                    <Card className="flex flex-col border-small gap-4" radius="sm" shadow="none">
                        <CardBody className="flex flex-col gap-2">
                            <div className="flex flex-row w-full place-start gap-2">
                                <span className="flex font-icon text-icon-sm text-primary">mode_heat</span>
                                {/* API_NEEDED - Get the number of weeks the user has had the current streak */}
                                <p className="text-start">16</p>
                            </div>
                            <div>
                                <p>Week Streak</p>
                            </div>
                            <Card className="w-full bg-primary-50" radius="sm" shadow="none">
                                <CardBody>
                                    {/* API_NEEDED - Get the number of days the user was active this week */}
                                    <p>You were active 5 of 7 days this week!</p>                                
                                </CardBody>
                            </Card>
                        </CardBody>
                    </Card>
                    <Card className="border-small" radius="sm" shadow="none">
                        <CardBody className="flex flex-col gap-2">
                            <div className="flex flex-row w-full place-start gap-2">
                                <span className="font-icon text-icon-sm text-primary">award_star</span>
                                {/* API_NEEDED - Get the number of badges the user has earned throughout their time on the platform */}
                                <p className="text-x2l font-bold">4</p>
                            </div>
                            <p>Badges Earned</p>
                        </CardBody>
                    </Card>
                    <Card className="border-small" radius="sm" shadow="none">
                        <CardBody className="flex flex-col gap-2">
                            <div className="flex flex-row w-full place-start gap-2">
                                <span className="font-icon text-icon-sm text-primary">extension</span>
                                {/* API_NEEDED - Get the number of challenges the user has completed throughout their time on the platform */}
                                <p>7</p>
                            </div>
                            <p>Challenges Completed</p>
                            <ChallengeCompletionDiv numEasyChallenges={0} numMediumChallenges={0} numHardChallenges={0} totalNumChallenges={0} showAdditionalInfo={false}/>
                        </CardBody>
                    </Card>
                </div>
                <Link>Open Profile</Link>
            </div>
        </div>
    );
}

export default ProfileSummaryDiv;