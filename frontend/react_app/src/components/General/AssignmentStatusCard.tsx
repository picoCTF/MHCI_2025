import { Card, CardBody, CardHeader, CardFooter, Progress, Button, Chip } from "@heroui/react";
// import { useNavigate } from "react-router-dom";

interface AssignmentCardProps {
    assignmentID: string;
}

const AssignmentStatusCard: React.FC<AssignmentCardProps> = ({ assignmentID }) => {
    return (
        <Card className="w-fill h-fit">
            <CardBody className="flex flex-row justify-between">
                <div className="flex flex-col w-fill">
                    <div className="flex flex-row">
                        {/* API_NEEDED - Get the name of the assignment and the name of the classroom associated with this assignment */}
                        <p>Assignment Name</p>
                        <Chip>Status</Chip>
                    </div>
                    {/* API_NEEDED - Get the amount of time left before the assignment is due */}
                    <p>ICON Due in 7 days and 3 hours</p>
                </div>
                {/* API_NEEDED - Get the user's completion amount of the assignment */}
                <p className="w-min text-right">3/4 completed</p>
            </CardBody>
        </Card>
    );
}

export default AssignmentStatusCard;