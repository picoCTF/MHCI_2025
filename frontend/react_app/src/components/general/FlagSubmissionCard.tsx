import { Button, Card, Input } from "@heroui/react";
import { useState } from "react";

interface FlagSubmissionCardProps {
    flag: string;
}

// API_NEEDED - check if the string the user inputs matches the flag
const FlagSubmissionCard: React.FC<FlagSubmissionCardProps> = ({ /*flag*/ }) => {

    let [input, updateInput] = useState("");

    //API_NEEDED - get the flag for a given challenge
    const flag = "flag";

    //API_NEEDED - on button press, if the input matches the flag, then update the completion status of the challenge
    function updateCompletion(): void {
        if(input == flag) {
            //Update the challenge completion to be true
        }
    }

    return (
        <Card className="flex flex-row w-full items-center p-5 gap-4 bg-primary-100" shadow="none" radius="md">
            <Input label="Flag" placeholder="picoCTF{FLAG}" inputMode="text" onChange={(event) => updateInput(event.target.value)}/>
            <Button color="primary" onPress={() => updateCompletion()}>Submit flag</Button>
        </Card>
    );
}

export default FlagSubmissionCard;