import { Card, CardHeader, CardBody, Button } from "@heroui/react";
import BadgeSVG, { type BadgeSVGProps } from "../general/BadgeSVG";

export interface BadgesProfileCardProps {
    selectedBadges: BadgeSVGProps[];
}

const BadgesProfileCard: React.FC<BadgesProfileCardProps> = ({ selectedBadges }) => {

    return (
        <Card className="flex w-full h-fit min-h-fit max-h-fit bg-content1-base border-small p-10">
            <CardHeader className="flex flex-row w-full h-fit items-start justify-between m-0 p-0">
                <h2>Badges</h2>
                <Button>See more...</Button>
            </CardHeader>
            <CardBody className="flex flex-row w-full h-fit m-0 p-0 justify-between">
                {selectedBadges.map((item) => <BadgeSVG key={item.id} id={item.id} shape={item.shape} bgColor={item.bgColor} strokeColor={item.strokeColor} textColor={item.textColor} icon={item.icon} title={item.title}/>)}
            </CardBody>
        </Card>
    );
}

export default BadgesProfileCard;