import { Card, CardBody, Button, Skeleton, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";

interface ReflectionEntryCardProps {
}

// TODO - Update this after Hedy moves the component into the design systen
const ReflectionEntryCard: React.FC<ReflectionEntryCardProps> = ({}) => {
    return (
        <Card className="flex w-[706px] min-w-[706px] h-fit min-h-[168px] m-0 p-6 border-small" shadow="none">
            <CardBody className="flex flex-col p-0 m-0 gap-6">
                <Skeleton>
                    <Textarea radius="sm" variant="underlined" placeholder="Type here or click the microphone icon to dictate. Your voice won't be recorded or stored; it's used only for live transcription." type="text"/>
                </Skeleton>
                <Skeleton className="flex flex-row justify-between">
                    <Button className="flex" size="sm" radius="full" color="default">
                        {/* NEED_ICON */}
                        <Icon icon={"material-symbols:mic-outline"}/>
                    </Button>
                    <Button className="flex" size="md" radius="sm" color="primary">
                        Compare Approaches
                    </Button>
                </Skeleton>
            </CardBody>
        </Card>
    );
}

export default ReflectionEntryCard;