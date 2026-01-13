import { Card, CardBody, Link } from "@heroui/react";
import LearningPathCard from "../general/LearningPathCard";

// Show the user's profile information
const LearningPathsProfileCard: React.FC<{}> = () => {

    {/* API_NEEDED - get the 1/2/3 learning paths the user has most recently started */}

    return (
        <Card className="flex w-full min-w-fit h-fit min-h-fit max-h-fit bg-content1-base border-small border-default-300" radius="md" shadow="none">
            <CardBody className="flex flex-col w-full h-fit gap-6 p-6">
                <h2>Learning Paths</h2>
                <LearningPathCard description={"Test"} difficulty={{ difficultyLvl: "Easy" }} hasProgress={true} id={0} link={""} name={"Learning Path 1"} numCompletedChallenges={2} numSolves={143} numTotalChallenges={8} variant={"compact"} completed={false}/>
                <LearningPathCard description={"Test"} difficulty={{ difficultyLvl: "Easy" }} hasProgress={true} id={1} link={""} name={"Learning Path 2"} numCompletedChallenges={4} numSolves={143} numTotalChallenges={8} variant={"compact"} completed={false}/>
                <Link href="/practice/learning-paths" style={{textAlign: "right"}}>See more</Link>
            </CardBody>
        </Card>
    );
}

export default LearningPathsProfileCard;