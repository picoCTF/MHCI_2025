import { Card, CardHeader, CardBody, CardFooter, colors, Progress, ScrollShadow } from "@heroui/react";

import DifficultyChip from "../General/DifficultyChip";
import IconCard from "../General/IconCard";
import NumberDisplayDiv from "../General/NumberDisplayChip";
import ProgressWithTextDiv from "../General/ProgressWithTextDiv";
// import NumSolves from "./NumSolves";

interface LearningPathCardProps {
    id: string;
}

//Should make this a script or something that's consistent across all card components that can be pressed
// const onLearningPathCardPress = ((link: string) => {
    
// })

const LearningPathCard: React.FC<LearningPathCardProps> = ({ id }) => {

    return (
        /* API_NEEDED - Get the link to the learning path and navigate there on press */
        <Card className="flex w-[400px] min-w-[400px] max-w-[400px] h-[288px] min-h-[288px] max-h-[288px]" isPressable isHoverable /*onPress={() => onLearningPathCardPress()}*/>
            <CardHeader className="flex flex-col w-fill h-fit items-start">
                <div className="flex flex-row w-fill justify-between">
                    <IconCard background={colors.light.primary[500]} icon={"ICON"}/>
                    {/* API_NEEDED - Get the difficulty of the learning path by averaging the difficulty of its challenges
                        Get the title of the learning path */}
                    <DifficultyChip Enum={1}/>
                </div>
                <h2>Learning Path Title</h2>
            </CardHeader>
            <CardBody className="w-fill h-fill">
                {/* API_NEEDED - Get the description of the learning path */}
                <p>The learning path description should go here.</p>
            </CardBody>
            <CardFooter className="flex flex-col w-fill h-fit items-start">
                {/* API_NEEDED - Get the number of challenges and number of solves of the learning path.
                    The number of solves should be based on the number of users that solved all of the challenges*/}
                {/* <div className="flex flex-row items-start w-fill gap-4">
                    <NumberDisplayDiv number={numChallenges} label={"challenges"} leadingIcon={"ICON"}/>
                    <NumberDisplayDiv number={numSolves} label={"solves"} leadingIcon={"ICON"}/>
                </div> */}
                {/* API_NEEDED - Get the user's completion amount of the learning path associated with this card 
                    Replace the endingText input with "amountUserCompleted/totalChallengesInPath" and replace the value 
                    input with (amountUserCompleted/totalChallengesInPath*100) */}
                <ProgressWithTextDiv color="primary" ariaLabel={"Amount Completed"} value={60} endingText="6/10 challenges"/>
                {/* <div className="flex flex-row w-fill h-fit gap-4">
                    <ProgressWithTextDiv color="primary" ariaLabel={"Amount Completed"} value={60} endingText="6/10 challenges"/>
                </div> */}
            </CardFooter>
        </Card>
    );
}

export default LearningPathCard;