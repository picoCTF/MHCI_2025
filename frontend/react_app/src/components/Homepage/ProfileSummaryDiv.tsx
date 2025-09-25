import { Avatar, Card, CardBody, Link } from "@heroui/react";
import ChallengeCompletionDiv, { type ChallengeCompletionDivProps } from "../general/ChallengeCompletionDiv";
import Icon from "../General/Icon";

export interface ProfileSummaryDivProps {
    challengesCompleted: ChallengeCompletionDivProps;
    numActiveDays: number;
    numBadges: number;
    numStreakWeeks: number;
    username: string;
}

const ProfileSummaryDiv: React.FC<ProfileSummaryDivProps> = ({ challengesCompleted, numActiveDays, numBadges, numStreakWeeks, username }) => {
    return (
        <div className="flex flex-col w-[286px] min-w-[286px] max-w-[286px] h-fit bg-transparent gap-12">
            <div className="flex flex-col w-full h-fit gap-6">
                <Avatar size="md"/>
                <h1>Welcome, {username}!</h1>
            </div>
            <div className="flex flex-col h-fit gap-6">
                <h3>Your Progress</h3>
                <div className="flex flex-col h-fit gap-4">
                    <Card className="flex flex-col h-fit border-small border-default-300 gap-4 p-5 bg-content1-base" radius="sm" shadow="none">
                        <CardBody className="flex flex-col h-fit gap-2 p-0 m-0">
                            <div className="flex flex-row w-full place-start gap-2">
                                <Icon name={"mode_heat"} size={"md"} color={"primary"}/>
                                {/* API_NEEDED - Get the number of weeks the user has had the current streak */}
                                <h2>{numStreakWeeks}</h2>
                            </div>
                            <h5>Week Streak</h5>
                            <Card className="w-full bg-primary-50 p-3" radius="sm" shadow="none">
                                <CardBody>
                                    {/* API_NEEDED - Get the number of days the user was active this week */}
                                    <p>{"You were active " + numActiveDays + " of 7 days this week!"}</p>                                
                                </CardBody>
                            </Card>
                        </CardBody>
                    </Card>
                    <Card className="flex h-fit border-small border-default-300 p-5 bg-content1-base" radius="sm" shadow="none">
                        <CardBody className="flex flex-col h-fit gap-2 p-0 m-0">
                            <div className="flex flex-row w-full place-start gap-2">
                                <Icon name={"award_star"} size={"md"} color={"primary"}/>
                                {/* API_NEEDED - Get the number of badges the user has earned throughout their time on the platform */}
                                <h2>{numBadges}</h2>
                            </div>
                            <h5>Badges Earned</h5>
                        </CardBody>
                    </Card>
                    <Card className="flex h-fit border-small border-default-300 p-5 bg-content1-base" radius="sm" shadow="none">
                        <CardBody className="flex flex-col h-fit gap-2 p-0 m-0">
                            <div className="flex flex-row w-full place-start gap-2">
                                <Icon name={"extension"} size={"md"} color={"primary"}/>
                                {/* API_NEEDED - Get the number of challenges the user has completed throughout their time on the platform */}
                                <h2>{challengesCompleted.totalNumChallenges}</h2>
                            </div>
                            <h5>Challenges Completed</h5>
                            <ChallengeCompletionDiv numEasyChallenges={challengesCompleted.numEasyChallenges} 
                                numMediumChallenges={challengesCompleted.numMediumChallenges} 
                                numHardChallenges={challengesCompleted.numHardChallenges} 
                                totalNumChallenges={challengesCompleted.totalNumChallenges} 
                                showAdditionalInfo={false}/>
                        </CardBody>
                    </Card>
                </div>
                <Link href="/profile">Open Profile</Link>
            </div>
        </div>
    );
}

export default ProfileSummaryDiv;