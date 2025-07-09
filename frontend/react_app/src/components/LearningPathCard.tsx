import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";

import DifficultyTag from "./DifficultyTag";
import NumChallenges from "./NumChallenges";
import NumSolves from "./NumSolves";

function LearningPathCard() {

    return (
        <Card className="w-fit h-fit">
            <CardHeader className="justify-between">
                <h2>Path Title</h2>
                <DifficultyTag/>
            </CardHeader>
            <CardBody>
                Path Description
            </CardBody>
            <CardFooter className="justify-between">
                <NumChallenges/>
                <NumSolves/>
            </CardFooter>
        </Card>
    );
}

export default LearningPathCard;