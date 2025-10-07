import { Card, CardBody, Link } from "@heroui/react";

export interface LearningPathsProfileCardProps {}

// Show the user's profile information
const LearningPathsProfileCard: React.FC<LearningPathsProfileCardProps> = ({ }) => {

    return (
        <Card className="flex w-full min-w-fit h-fit min-h-fit max-h-fit bg-content1-base border-small border-default-300" radius="md" shadow="none">
            <CardBody className="flex flex-col w-full h-fit gap-6 p-6">
                <h3>Learning Paths</h3>
                {/* API_NEEDED - get the 1/2/3 learning paths the user has most recently started */}
                <Link href="/practice/learning-paths" style={{textAlign: "right"}}>See more</Link>
            </CardBody>
        </Card>
    );
}

export default LearningPathsProfileCard;