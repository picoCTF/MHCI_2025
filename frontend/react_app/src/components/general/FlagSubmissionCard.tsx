import { Button, Card, Input, Skeleton } from "@heroui/react";
import { useState } from "react";

interface FlagSubmissionCardProps {
    flag: string;
    setCompletion: Function;
}

// API_NEEDED - check if the string the user inputs matches the flag
const FlagSubmissionCard: React.FC<FlagSubmissionCardProps> = ({ flag, setCompletion }) => {

    let [input, updateInput] = useState("");

    //API_NEEDED - on button press, if the input matches the flag, then update the completion status of the challenge
    function updateCompletion(): void {
        setCompletion(input == flag);
        console.log("DELETE_ME - The flag is " + flag)
    }

    return (
        <Card className="flex flex-row w-full items-center p-5 gap-4 bg-primary-100" shadow="none" radius="md">
            <Input label="Flag" placeholder="picoCTF{FLAG}" inputMode="text" onChange={(event) => updateInput(event.target.value)}/>
            <Button color="primary" onPress={() => updateCompletion()}>Submit flag</Button>
        </Card>
    );
}

export const FlagSubmissionCardSkeleton: React.FC<{}> = ({}) => {
    return (
        <Card className="flex flex-row w-full items-center p-5 gap-4 bg-primary-100" shadow="none" radius="md">
            <Skeleton className=" flex w-full rounded-lg">
                <Input label="Flag" placeholder="picoCTF{FLAG}" inputMode="text"/>
            </Skeleton>
            <Skeleton className="flex rounded-lg">
                <Button color="primary">Submit flag</Button>
            </Skeleton>
        </Card>
    );
}

export default FlagSubmissionCard;