import { Card, CardHeader, CardBody, CardFooter, Button } from "@heroui/react";

interface ReflectionCTACardProps {
}

const ReflectionCTACard: React.FC<ReflectionCTACardProps> = ({}) => {
    return (
        <Card className="w-[706px] min-w-[706px] h-fit min-h-[168px]">
            <CardHeader className="flex flex-row">
                <p>ICON</p>
                <p>Want to get better? Reflect and compare your strategy!</p>
            </CardHeader>
            <CardBody className="h-fit min-h-fit">
                <p>Record a quick explanation of how you solved it to get an AI-summarized comparison with the official one. Sharing your process helps reinforce what you've learned.</p>
            </CardBody>
            <CardFooter className="flex flex-row">
                <Button className="w-fill min-w-fill" color="primary">
                    Compare Approaches
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ReflectionCTACard;