import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Modal,
    useDisclosure,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    addToast,
    Skeleton
} from "@heroui/react";
import { type BadgeList } from "../../api_interfaces/badge/badgeList";
import badgesMockData from "../../mock-data/profile/Badges.json"
import BadgeSVG from "../general/BadgeSVG";
import type { Badge } from "../../api_interfaces/badge/badge";
import {useMockData} from "../../mock-data/utils.ts";
// import { useState } from "react";

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

        if(!badge.isSelected) {
            let temp = badge;
            temp.isSelected = !temp.isSelected;
            selectedBadges.results.splice(selectedBadges.results.indexOf(temp), 1);
        }
    }

    return (
        <>
            <Button variant="bordered" color="primary" onPress={onOpen}>See more...</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
                <ModalContent>
                    {() => (
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
                                    <Skeleton isLoaded={badges.count >= 0}>
                                        <Card className="flex flex-col w-fit h-fit p-2 border-small border-default-300" style={{backgroundColor: (item.isSelected ? "bg-content2-base" : "bg-content1-base")}} shadow="none" isHoverable isPressable onClick={()=>handleSelection}>
                                            <BadgeSVG key={item.id} id={item.id} shape={item.shape} bgColor={item.bgColor} strokeColor={item.strokeColor} textColor={item.textColor} icon={item.icon} isSelected={item.isSelected} isUnlocked={item.isUnlocked} title={item.title}/>
                                        </Card>
                                    </Skeleton>
                                )}
                            </ModalBody>
                            <ModalFooter className="flex flex-col place-items-center pt-10">
                                <h5 className="font-bold text-base text-default-500">More coming soon</h5>
                                <p className="text-xs text-default-500">Stay tuned for updates</p>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

const BadgesProfileCard: React.FC<{}> = () => {

    const { data: badgesData, isLoading: badgesDataLoading } = useMockData(badgesMockData);

    // API_NEEDED - Get the badges and the badges the user has selected
    // By default, the first four badges the user unlocks will be selected
    let badges: BadgeList;
    let selectedBadges: BadgeList;
    let numUnlockedBadges = 0;
    if (badgesData && !badgesDataLoading) {
        badges = badgesData as BadgeList;
        selectedBadges = {count: 0, results: []};
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
                    {selectedBadges.results.map((item) =>
                        <BadgeSVG key={item.id} id={item.id} shape={item.shape} bgColor={item.bgColor} strokeColor={item.strokeColor} textColor={item.textColor} icon={item.icon} isSelected={item.isSelected} isUnlocked={item.isUnlocked} title={item.title}/>
                    )}
                </CardBody>
            </Card>
        )
    } else {
        return (
            <Card className="flex w-full h-fit min-h-fit max-h-fit bg-content1-base border-small border-default-300 p-10 gap-6" shadow="none" radius="md">
                <CardHeader className="flex flex-row w-full h-fit items-start justify-between m-0 p-0">
                    <h3>Badges</h3>
                    <Skeleton><Button variant="bordered" color="primary">See more...</Button></Skeleton>
                </CardHeader>
                <CardBody className="flex flex-row w-full h-fit m-0 p-0 justify-between">
                    <Skeleton><div style={{ width: '170px', height: '180px'}}/></Skeleton>
                    <Skeleton><div style={{ width: '170px', height: '180px'}}/></Skeleton>
                    <Skeleton><div style={{ width: '170px', height: '180px'}}/></Skeleton>
                    <Skeleton><div style={{ width: '170px', height: '180px'}}/></Skeleton>
                </CardBody>
            </Card>
        )
    }
}

export default BadgesProfileCard;
