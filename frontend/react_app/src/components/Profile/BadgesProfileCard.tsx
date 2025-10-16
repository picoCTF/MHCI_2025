import { Card, CardHeader, CardBody, Button, Modal, useDisclosure, ModalContent, ModalHeader, ModalBody, ModalFooter, addToast } from "@heroui/react";
import { type BadgeList } from "../../api_interfaces/BadgeList";
import badgesData from "../../mock-data/profile/Badges.json"
import BadgeSVG from "../general/BadgeSVG";
import type { Badge } from "../../api_interfaces/Badge";
import { useState, type Dispatch, type SetStateAction } from "react";

export interface BadgesProfileCardProps {}

interface BadgeModalProps {
    badges: BadgeList;
    selectedBadges: BadgeList;
    numUnlockedBadges: number;
}

const BadgeModal: React.FC<BadgeModalProps> = ({badges, selectedBadges, numUnlockedBadges}) => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    function handleSelection(badge: Badge) {
        badge.isSelected = !badge.isSelected;

        if(badge.isSelected && selectedBadges.results.length >= 4) {
            //Pop up a toast that says why it can't select the badge
            addToast({
                title: "Unable to Select Badge",
                description: "You cannot select " + badge.title + " because 4 other badges are selected.",
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            })
            badge.isSelected = false;
        }
    }

    return (
        <>
            <Button variant="bordered" color="primary" onPress={onOpen}>See more...</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <h3>Your Milestones</h3>
                                <h1>{numUnlockedBadges}</h1>
                            </ModalHeader>
                            <ModalBody className="grid gap-x-auto gap-y-8 grid-cols-4 place-items-center">
                                {/* Grid of all badges
                                    Clicking an unlocked badge lets you select it for the displayed profile badges
                                    Hovering on a locked badge shows a tooltip on how to unlock it?
                                    If all 4 badges are selected, then you must deselect a badge before choosing a new one 
                                */}
                                {badges.results.map((item) => 
                                    <Card className="flex flex-col w-fit h-fit p-4 border-small border-default-300" style={{backgroundColor: (item.isSelected ? "bg-content2-base" : "bg-content1-base")}} shadow="none" isHoverable isPressable onClick={()=>handleSelection}>
                                        <BadgeSVG key={item.id} id={item.id} shape={item.shape} bgColor={item.bgColor} strokeColor={item.strokeColor} textColor={item.textColor} icon={item.icon} isSelected={item.isSelected} isUnlocked={item.isUnlocked} title={item.title}/>
                                    </Card>)}
                            </ModalBody>
                            <ModalFooter className="flex flex-col place-items-center">
                                <p>More coming soon</p>
                                <p>Stay tuned for updates</p>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

const BadgesProfileCard: React.FC<BadgesProfileCardProps> = ({}) => {

    // API_NEEDED - Get the badges and the badges the user has selected
    // By default, the first four badges the user unlocks will be selected
    let badges: BadgeList = badgesData as BadgeList;
    let numUnlockedBadges = 0;

    let selectedBadges: BadgeList = {count: 0, results: []};
    badges.results?.forEach(badge => {
        if(badge.isUnlocked) {
            numUnlockedBadges++;
        }
        if(badge.isSelected) {
            selectedBadges.count++;
            selectedBadges.results.push(badge);
        }
    })

    return (
        <Card className="flex w-full h-fit min-h-fit max-h-fit bg-content1-base border-small border-default-300 p-10 gap-6" shadow="none" radius="md">
            <CardHeader className="flex flex-row w-full h-fit items-start justify-between m-0 p-0">
                <h3>Badges</h3>
                <BadgeModal badges={badges} selectedBadges={selectedBadges} numUnlockedBadges={numUnlockedBadges}/>
            </CardHeader>
            <CardBody className="flex flex-row w-full h-fit m-0 p-0 justify-between">
                {selectedBadges.results.map((item) => <BadgeSVG key={item.id} id={item.id} shape={item.shape} bgColor={item.bgColor} strokeColor={item.strokeColor} textColor={item.textColor} icon={item.icon} isSelected={item.isSelected} isUnlocked={item.isUnlocked} title={item.title}/>)}
            </CardBody>
        </Card>
    );
}

export default BadgesProfileCard;