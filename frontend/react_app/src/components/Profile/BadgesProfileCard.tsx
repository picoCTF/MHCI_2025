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
            <CardBody className="flex flex-row w-full h-fit m-0 p-0">
                {selectedBadges.map((item) => <BadgeSVG key={item.id} id={item.id} shape={item.shape} color={item.color} icon={item.icon} title={item.title}/>)}
                {/* <BadgeSVG shape={1} color={1} icon={"ICON"} title={"Title 1"}/>
                <BadgeSVG shape={2} color={2} icon={"ICON"} title={"Title 2"}/> */}
            </CardBody>
        </Card>
    );
}

export default BadgesProfileCard;