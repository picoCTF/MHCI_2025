import { Button, Card, CardBody, Input } from "@heroui/react";

interface FlagSubmissionCardProps {
    flag: string;
}

const FlagSubmissionCard: React.FC<FlagSubmissionCardProps> = ({ flag }) => {

    return (
        <Card className="w-min">
            <CardBody>
                <Input label="Flag" placeholder="picoCTF{FLAG}" inputMode="text"/>
                <Button>Submit</Button>
            </CardBody>
        </Card>
    );
}

export default FlagSubmissionCard;