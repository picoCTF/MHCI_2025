import { Button, Modal, ModalHeader, ModalContent, ModalBody, ModalFooter, useDisclosure, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@heroui/react";
// import type { forEachChild } from "typescript";

function BellIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            {/*Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ */}
            <path fill={"--heroui-default-foreground"} d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"/>
        </svg>
    );
}

function NotificationModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const rows = [
    {
        key: "1",
        name: "Tony Reichert",
        role: "CEO",
        status: "Active",
    },
    {
        key: "2",
        name: "Zoey Lang",
        role: "Technical Lead",
        status: "Paused",
    },
    {
        key: "3",
        name: "Jane Fisher",
        role: "Senior Developer",
        status: "Active",
    },
    {
        key: "4",
        name: "William Howard",
        role: "Community Manager",
        status: "Vacation",
    }
    ];

    const columns = [
    {
        key: "name",
        label: "NAME",
    },
    {
        key: "role",
        label: "ROLE",
    },
    {
        key: "status",
        label: "DISMISS",
    }
    ];

    // const clearNotification(notif: typeof TableRow) {
    //     rows.
    // }

    // const clearAll() {
    //     forEachChild
    // }

    return (
        <>
            <Button color="default" variant="flat" radius="full" isIconOnly={true} onPress={onOpen}>
                <BellIcon/>
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Notifications</ModalHeader>
                            <ModalBody>
                                <Table hideHeader removeWrapper aria-label="Notification Table">
                                    <TableHeader columns={columns}>
                                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                                    </TableHeader>
                                    <TableBody emptyContent={"No notifications to display."} items={rows}>
                                        {(item) => (
                                            <TableRow key={item.key}>
                                                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" onPress={onClose}>
                                    Clear All
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default NotificationModal;