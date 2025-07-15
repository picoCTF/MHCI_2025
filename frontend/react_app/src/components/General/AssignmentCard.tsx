import { Card, CardBody, CardHeader, CardFooter, Progress, Button } from "@heroui/react";
// import { useNavigate } from "react-router-dom";

interface AssignmentCardProps {
    assignmentID: string;
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({ assignmentID }) => {
    return (
        <Card className="w-[362px] min-w-[362px] h-[220px] min-h-[220px]">
            <CardHeader>
                {/* API_NEEDED - Get the amount of time left before the assignment is due */}
                <p>ICON Due in 3 hours</p>
            </CardHeader>
            <CardBody>
                {/* API_NEEDED - Get the name of the assignment and the name of the classroom associated with this assignment */}
                <p>Assignment Name</p>
                <p>Classroom: Classroom Name</p>
            </CardBody>
            <CardFooter className="flex flex-row w-fill gap-4">
                <div className="w-fill">
                    {/* API_NEEDED - Get the user's completion amount of the assignment */}
                    <p>3 of 4 completed</p>
                    <Progress color="primary" value={75}/>
                </div>
                <Button color="primary">Resume</Button>
            </CardFooter>
        </Card>
    );
}

export default AssignmentCard;