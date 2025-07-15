import { Card, CardBody, CardFooter, Button, Input } from "@heroui/react";

interface ReflectionEntryCardProps {
}

const ReflectionEntryCard: React.FC<ReflectionEntryCardProps> = ({}) => {
    return (
        <Card className="w-[706px] min-w-[706px] h-fit min-h-[168px]">
            <CardBody className="h-fill min-h-fit">
                <Input placeholder="Enter your reflection here." type="text"/>
            </CardBody>
            <CardFooter className="flex flex-col">
                <p>Note: Your voice isn't recorded or stored. We only use it for transcription.</p>
                <Button className="w-fill min-w-fill" color="default">
                    <p>ICON</p>
                    <p>Dictate</p>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ReflectionEntryCard;