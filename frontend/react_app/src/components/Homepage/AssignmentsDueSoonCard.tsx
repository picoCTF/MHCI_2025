import { Card, CardBody, CardHeader } from "@heroui/react";
import AssignmentCard from "../General/AssignmentCard";

interface AssignmentsDueSoonCardProps {
    assignmentIDs: string[];
}

const AssignmentsDueSoonCard: React.FC<AssignmentsDueSoonCardProps> = ({ assignmentIDs }) => {
    return (
        <Card className="w-[811px] h-fit]">
            <CardHeader className="flex flex-col items-start">
                <h2>You have assignments due soon!</h2>
            </CardHeader>
            <CardBody className="flex flex-row overflow-scroll">
                <AssignmentCard assignmentID={assignmentIDs[0]}/>
                <AssignmentCard assignmentID={assignmentIDs[1]}/>
                <AssignmentCard assignmentID={assignmentIDs[2]}/>
            </CardBody>
        </Card>
    );
}

export default AssignmentsDueSoonCard;