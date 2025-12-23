import { Button, Chip, Skeleton, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
import DifficultyChip, { DifficultyChipSkeleton, type DifficultyProp } from "./DifficultyChip";
import HintAccordion, { HintAccordionSkeleton } from "./HintAccordion";
import FlagSubmissionCard, { FlagSubmissionCardSkeleton } from "./FlagSubmissionCard";
import { useState } from "react";
import { useMockData } from "../../mock-data/utils/utils";
import challengeMockData from "../../mock-data/MockChallengeResponse.json"
import type { Challenge } from "../../api_interfaces/challenge";
import WalkthroughSummaryCard from "./WalkthroughSummaryCard";
import ReflectionCTACard from "./ReflectionCTACard";
import ReflectionEntryCard from "./ReflectionEntryCard";
import ApproachComparisonCard from "./ApproachComparisonCard";

export interface ChallengeDivProps {
    challengeID: number;
}

const ChallengeDiv: React.FC<ChallengeDivProps> = ({ /*challengeID*/ }) => {
    
    //API_NEEDED - get whether the challenge has been bookmarked or not and use that to set the useState
    let [isBookmarked, setIsBookmarked] = useState(false);

    function updateBookmark(): void {
        setIsBookmarked(!isBookmarked);
        //API_NEEDED - add this challenge to the user's bookmarked challenges
    }

    //API_NEEDED - get whether the challenge has been completed or not and use that to set the useState
    let [isComplete, setIsComplete] = useState(false);

    let [postChallengeScreen, setPostChallengeScreen] = useState<1|2|3>(1);

    //API_NEEDED - get refreshData function from API, pass the challengeID to the API to get the challenge data
    const { data: challengeData, isLoading: challengeDataLoading/*, refetch: refetchChallenge*/ } = useMockData<Challenge>(challengeMockData);

    if(challengeData && !challengeDataLoading) {

        if (!isComplete) {
            return (
                <div className="flex flex-col w-full h-full min-h-fit gap-8">
                    <div className="flex flex-col text-start gap-4">
                        <div className="flex flex-row gap-3 w-full items-center">
                            <h2>{challengeData.name}</h2>
                            <Tooltip className="py-1 px-3" size="md" radius="sm" content={isBookmarked ? "Remove bookmark" : "Bookmark challenge"} placement="bottom" showArrow={true}>
                                <Button variant="light" isIconOnly radius="full" className="w-10 h-10" onPress={() => updateBookmark()}>
                                    <Icon icon={isBookmarked ? "material-symbols:bookmark-rounded" : "material-symbols:bookmark-outline-rounded"} width={20} height={20}/>
                                </Button>
                            </Tooltip>
                        </div>
                        <div className="flex flex-row w-full gap-2 items-center">
                            <DifficultyChip difficultyLvl={(challengeData.difficulty as DifficultyProp).difficultyLvl}/>
                            <Chip variant="bordered">{challengeData.category.name}</Chip>
                            {challengeData.tags.map((tag) => (<Chip key={tag.id} variant="bordered">{tag.name}</Chip>))}
                        </div>
                        {challengeData.description ? <p>{challengeData.description}</p> : null}
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-row gap-2">
                                <Icon icon={"material-symbols:person-outline"} width={20} height={20} className={"text-default-500"}/>
                                <p className={"flex font-mono font-semibold text-default-500"}>{"Author:"}</p>
                                <p className={"flex font-mono text-default-500"}>{challengeData.author}</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Icon icon={"material-symbols:flag-outline"} width={20} height={20} className={"text-default-500"}/>
                                <p className={"flex font-mono text-default-500"}>{challengeData.users_solved + " solves"}</p>
                            </div>
                        </div>
                        <HintAccordion list={challengeData.hints}/>
                    </div>
                    <FlagSubmissionCard flag={challengeData.flag} setCompletion={setIsComplete}/>
                </div>
            );   
        }
        else {
            switch(postChallengeScreen) {
                case 2: {
                    return (
                        <div className="flex flex-col w-full items-center gap-10">
                            <div className="flex flex-col gap-4 items-center">
                                <Icon icon={"material-symbols:edit-square-outline"} width={80} height={80} className="flex text-primary-500"/>
                                <h3>Jot down your approach</h3>
                            </div>
                            <div className="flex flex-col gap-5 items-center">
                                <p>
                                    You may want to include details like what your first step was and what clues or patterns you noticed. 
                                    If you did face any challenges, explain how you figured it out.
                                </p>
                                <div className="flex flex-col w-full h-fit gap-3">
                                    <ReflectionEntryCard displayUpdateFunction={setPostChallengeScreen}/>
                                    <p className="text-default-500">Your voice won't be recorded or stored; it's used only for live transcription.</p>
                                </div>
                            </div>
                        </div>
                    );
                }
                case 3: {
                    return (
                        <div className="flex flex-col w-full items-center gap-10">
                            <div className="flex flex-col gap-4 items-center">
                                <Icon icon={"material-symbols:lightbulb-outline"} width={80} height={80} className="flex text-primary-500"/>
                                <h3>Compare with the official walkthrough and refine your approach!</h3>
                            </div>
                            <ApproachComparisonCard/>
                        </div>
                    );
                }
                default: {
                    return ( 
                        <div className="flex flex-col w-full h-full min-h-fit gap-10">
                            <div className="flex flex-col gap-4 items-center">
                                <div className="flex w-20 h-20 items-center justify-center rounded-full bg-success-500">
                                    <Icon icon={"material-symbols:check-rounded"} className="w-16 h-16 text-content1-base"/>
                                </div>
                                <h3>Challenge solved!</h3>
                            </div>
                            <div className="flex flex-col gap-5 items-center">
                                <WalkthroughSummaryCard challengeID={challengeData.id}/>
                                <ReflectionCTACard challengeID={challengeData.id} displayUpdateFunction={setPostChallengeScreen} />
                            </div>
                        </div>
                    );
                }
            }
        }
    }
    else {
        return <ChallengeDivSkeleton/>
    }
}

export const ChallengeDivSkeleton: React.FC<{}> = ({}) => {
    return (
        <div className="flex flex-col w-full h-full min-h-fit gap-8">
            <div className="flex flex-col text-start gap-4">
                <div className="flex flex-row gap-3 w-full items-center">
                    <Skeleton className="flex rounded-full">
                        <h2>Name Here</h2>
                    </Skeleton>
                    <Skeleton className="w-10 h-10 rounded-full"/>
                </div>
                <div className="flex flex-row w-full gap-2 items-center">
                    {Array.from({length: 4}, (_, index) => (
                        <DifficultyChipSkeleton key={index}/>
                    ))}
                </div>
                {Array.from({length: 3}, (_, index) => (
                    <Skeleton className="rounded-full" key={index}>
                        <p>This is my mock description. Just typing here to add more length to the skeleton.</p>
                    </Skeleton>
                ))}
                <div className="flex flex-row gap-4">
                    <div className="flex flex-row gap-2">
                        <Skeleton className="rounded-full w-5 h-5"/>
                        <Skeleton className="rounded-full">
                            <p className={"flex font-mono font-semibold text-default-500"}>{"Author:"}</p>
                            <p className={"flex font-mono text-default-500"}>Name Here</p>
                        </Skeleton>
                    </div>
                    <div className="flex flex-row gap-2">
                        <Skeleton className="rounded-full w-5 h-5"/>
                        <Skeleton className="rounded-full">
                            <p className={"flex font-mono text-default-500"}>{"XXXX solves"}</p>
                        </Skeleton>
                    </div>
                </div>
                <HintAccordionSkeleton/>
            </div>
            <FlagSubmissionCardSkeleton/>
        </div>
    );
}

export default ChallengeDiv;