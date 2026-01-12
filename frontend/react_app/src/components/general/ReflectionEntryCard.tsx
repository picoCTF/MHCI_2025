import { Card, CardBody, Button, /*Skeleton, */Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

// TODO - Update this after Hedy moves the component into the design systen
const ReflectionEntryCard: React.FC<{displayUpdateFunction: Function}> = ({ displayUpdateFunction }) => {

    const [dictationToggle, setDictationToggle] = useState(false);

    return (
        <Card className="flex w-full h-fit m-0 p-6 border-small border-default-300" shadow="none">
            <CardBody className="flex flex-col p-0 m-0 gap-6">
                <Textarea radius="sm" variant="underlined" placeholder="Type here or click the microphone icon to dictate." type="text"/>
                <div className="flex flex-row justify-between">
                    {/* FIX_ME - Get access to the microphone from the user's device */}
                    <Button className="flex" size="sm" radius="full" color="default" variant={dictationToggle ? "solid" : "flat"} isIconOnly onPress={() => setDictationToggle(!dictationToggle)}>
                        <Icon icon={dictationToggle ? "material-symbols:mic" : "material-symbols:mic-outline"} className="flex w-5 h-5"/>
                    </Button>
                    <Button className="flex" size="md" radius="sm" color="primary" onPress={() => (displayUpdateFunction(3))}>
                        Compare Approaches
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default ReflectionEntryCard;