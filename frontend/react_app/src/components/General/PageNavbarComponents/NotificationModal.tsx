import { Button, Modal, ModalHeader, ModalContent, ModalBody, ModalFooter, useDisclosure, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@heroui/react";

// This should be changed to a const with an interface so it's consistent with the rest of the codebase
function NotificationModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    //API_NEEDED - currently have mock data for notifs
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

    // A modal for notifications
    // Needs data from the API and we need to decide what actions the user can take
    // Read the notification and dismiss them
    // Sort them with the most recent at the top
    // GRAPHICS_ISSUE - The modal does not look correct at all.
    return (
        <>
            <Button color="default" variant="flat" radius="full" isIconOnly onPress={onOpen}>
                <span className="font-icon text-[24px]">notifications</span>
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