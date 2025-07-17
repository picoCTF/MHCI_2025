import { Card, CardHeader, CardBody, Button } from "@heroui/react";
import BadgeDiv from "../General/BadgeDiv";

interface BadgesProfileCardProps {
    selectedBadges: number[];
}

const BadgesProfileCard: React.FC<BadgesProfileCardProps> = ({ selectedBadges }) => {

    return (
        <Card className="flex w-[825px] min-w-[825px] max-w-[825px] h-fit min-h-fit max-h-fit">
            <CardHeader className="flex flex-row w-fill h-fit items-start justify-between">
                <h2>Badges</h2>
                <Button>See more...</Button>
            </CardHeader>
            <CardBody className="flex flex-row w-fill h-fit">
                <BadgeDiv shape={1} color={1} icon={"ICON"} title={"Title 1"}/>
                <BadgeDiv shape={2} color={2} icon={"ICON"} title={"Title 2"}/>
            </CardBody>
        </Card>
    );
}

export default BadgesProfileCard;