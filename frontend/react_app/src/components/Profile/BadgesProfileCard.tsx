import { Card, CardHeader, CardBody, Button, Modal, useDisclosure, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react";
import BadgeSVG, { type BadgeSVGProps } from "../general/BadgeSVG";

export interface BadgesProfileCardProps {
    badges: BadgeSVGProps[];
    selectedBadges: BadgeSVGProps[];
}

interface BadgeModalProps {
    badges: BadgeSVGProps[];
    selectedBadges: BadgeSVGProps[];
}

const BadgeModal: React.FC<BadgeModalProps> = ({ badges, selectedBadges }) => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <Button variant="bordered" color="primary" onPress={onOpen}>See more...</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Badges</ModalHeader>
                            <ModalBody className=" gap-x-3 gap-y-4 grid-cols-3">
                                {/* Grid of all abailable badges
                                    Clicking a badge lets you select it for the displayed profile badges
                                    If all 4 badges are selected, then you must deselect a badge before choosing a new one 
                                */}
                                {badges.map((item) => 
                                    <Card isHoverable isPressable>
                                        <BadgeSVG key={item.id} id={item.id} shape={item.shape} bgColor={item.bgColor} strokeColor={item.strokeColor} textColor={item.textColor} icon={item.icon} title={item.title}/>
                                    </Card>)}
                            </ModalBody>
                            <ModalFooter>
                                
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

const BadgesProfileCard: React.FC<BadgesProfileCardProps> = ({ badges, selectedBadges }) => {

    // API_NEEDED - Get the badges and the badges the user has selected
    // By default, the first four badges the user unlocks will be selected

    return (
        <Card className="flex w-full h-fit min-h-fit max-h-fit bg-content1-base border-small border-default-300 p-10 gap-6" shadow="none" radius="md">
            <CardHeader className="flex flex-row w-full h-fit items-start justify-between m-0 p-0">
                <h2>Badges</h2>
                <BadgeModal badges={badges} selectedBadges={selectedBadges}/>
            </CardHeader>
            <CardBody className="flex flex-row w-full h-fit m-0 p-0 justify-between">
                {selectedBadges.map((item) => <BadgeSVG key={item.id} id={item.id} shape={item.shape} bgColor={item.bgColor} strokeColor={item.strokeColor} textColor={item.textColor} icon={item.icon} title={item.title}/>)}
            </CardBody>
        </Card>
    );
}

export default BadgesProfileCard;