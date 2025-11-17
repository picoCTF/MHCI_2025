import { Avatar, Card, Link, Skeleton } from "@heroui/react";
import ChallengeCompletionDiv, { type ChallengeCompletionDivProps } from "../general/ChallengeCompletionDiv";
import { Icon } from "@iconify/react";

export interface ProfileSummaryDivProps {
    challengesCompleted: ChallengeCompletionDivProps;
    numActiveDays: number;
    numBadges: number;
    numStreakWeeks: number;
    username: string;
}

const ProfileSummaryDiv: React.FC<ProfileSummaryDivProps> = ({ challengesCompleted, numActiveDays, numBadges, numStreakWeeks, username }) => {
    return (
        <div className="flex flex-col w-full h-fit bg-transparent gap-12">
            <div className="flex flex-col w-full h-fit gap-6"> 
                    <Avatar size="md"/>
                <Skeleton className="flex w-fit rounded-lg">
                    <h1>Welcome, {username}!</h1>
                </Skeleton>
            </div>
            <div className="flex flex-col h-fit gap-6">
                <Skeleton className="flex w-fit rounded-full">
                    <h3>Your Progress</h3>
                </Skeleton>
                <div className="flex flex-col h-fit gap-4">
                    <Card className="flex flex-col h-fit border-small border-default-300 gap-2 p-5 m-0 bg-content1-base" radius="sm" shadow="none">
                        <div className="flex flex-row w-full place-start items-center gap-2">
                            <Skeleton className="flex w-fit rounded-full">
                                <Icon icon={"material-symbols:mode-heat-outline"} width={24} height={24} className={"text-primary"}/>
                            </Skeleton>
                            {/* API_NEEDED - Get the number of weeks the user has had the current streak */}
                            <Skeleton className="flex w-[24px] h-[24px] rounded-full">
                                <h2>{numStreakWeeks}</h2>
                            </Skeleton>
                        </div>
                        <Skeleton className="flex w-fit rounded-full">
                            <h5>Week Streak</h5>
                        </Skeleton>
                        <Skeleton className="flex rounded-md">
                            <Card className="w-full bg-primary-50 p-3" radius="sm" shadow="none">
                                {/* API_NEEDED - Get the number of days the user was active this week */}
                                <p>{"You were active " + numActiveDays + " of 7 days this week!"}</p>                                
                            </Card>
                        </Skeleton>
                    </Card>
                    <Card className="flex flex-col h-fit border-small border-default-300 p-5 gap-2 bg-content1-base" radius="sm" shadow="none">
                        
                        <div className="flex flex-row w-full place-start items-center gap-2">
                            <Skeleton className="flex w-fit rounded-full">
                                <Icon icon={"material-symbols:award-star-outline"} width={24} height={24} className={"text-primary"}/>
                            </Skeleton>
                            {/* API_NEEDED - Get the number of badges the user has earned throughout their time on the platform */}
                            <Skeleton className="flex w-[24px] h-[24px] rounded-full">
                                <h2>{numBadges}</h2>
                            </Skeleton>
                        </div>
                        <Skeleton className="flex w-fit rounded-full">
                            <h5>Badges Earned</h5>
                        </Skeleton>
                    </Card>
                    <Card className="flex flex-col h-fit border-small border-default-300 p-5 gap-2 bg-content1-base" radius="sm" shadow="none">
                        <div className="flex flex-row w-full h-fit place-start items-center gap-2">
                            <Skeleton className="flex w-fit rounded-full">
                                <Icon icon={"material-symbols:extension-outline"} width={24} height={24} className="text-primary"/>
                            </Skeleton>
                            {/* API_NEEDED - Get the number of challenges the user has completed throughout their time on the platform */}
                            <Skeleton className="flex w-[24px] h-[24px] rounded-full">
                                <h2>{challengesCompleted.totalNumChallenges}</h2>
                            </Skeleton>
                        </div>
                        <Skeleton className="flex w-fit rounded-full">
                            <h5>Challenges Completed</h5>
                        </Skeleton>
                        <ChallengeCompletionDiv numEasyChallenges={challengesCompleted.numEasyChallenges} 
                            numMediumChallenges={challengesCompleted.numMediumChallenges} 
                            numHardChallenges={challengesCompleted.numHardChallenges} 
                            totalNumChallenges={challengesCompleted.totalNumChallenges} 
                            showAdditionalInfo={false}/>
                    </Card>
                </div>
                {/* NOTE - Setting the text color to primary here changed it for all of the Links on the home page and the Icons in the profile summary section. 
                    Why??? This is not a problem as those are supposed to be the primary color, but it's strange */}
                <Skeleton className="flex w-fit rounded-full">
                    <Link className="text-left text-primary" href="/profile">Open Profile</Link>
                </Skeleton>
            </div>
        </div>
    );
}

export default ProfileSummaryDiv;