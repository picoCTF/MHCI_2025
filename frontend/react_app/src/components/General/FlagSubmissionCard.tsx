import { Button, Card, CardBody, Input } from "@heroui/react";

interface FlagSubmissionCardProps {
    flag: string;
}

const FlagSubmissionCard: React.FC<FlagSubmissionCardProps> = ({ flag }) => {

    return (
        <Card className="flex flex-row w-full">
            <CardBody className="flex flex-row items-center w-full">
                <Input label="Flag" placeholder="picoCTF{FLAG}" inputMode="text"/>
                <Button color="primary">Submit</Button>
            </CardBody>
        </Card>
    );
}

export default FlagSubmissionCard;