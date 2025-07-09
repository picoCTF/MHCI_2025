import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import NumChallenges from "./NumChallenges";
import NumSolves from "./NumSolves";

function LearningPathCard() {

    return (
        <Card className="w-fit h-fit">
            <CardHeader>
                Path Title
            </CardHeader>
            <CardBody>Path Description</CardBody>
            <CardFooter className="gap-4">
                <NumChallenges/>
                <NumSolves/>
            </CardFooter>
        </Card>
    );
}

export default LearningPathCard;