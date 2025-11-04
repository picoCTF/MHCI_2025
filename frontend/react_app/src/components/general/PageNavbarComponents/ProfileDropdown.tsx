import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

//A dropdown that shows all of the pages under the Resources category
const ProfileDropdown: React.FC<{}> = () => {

    return (
        <Dropdown>
            <DropdownTrigger>
                <Avatar as={Button} isIconOnly={true} radius={"full"} variant={"flat"} color='default'/>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Page List">
                <DropdownSection showDivider>
                    <DropdownItem key="profile" href='/profile' startContent={<Icon icon={"material-symbols:person-outline"} width={18} height={18}/>}>
                        Profile
                    </DropdownItem>
                    <DropdownItem key="account settings" href="/profile/account-settings" startContent={<Icon icon={"material-symbols:settings-outline"} width={18} height={18}/>}>
                        Account Settings
                    </DropdownItem>
                </DropdownSection>
                <DropdownSection>
                    <DropdownItem key="log out" href='/'>
                        Log Out
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}

export default ProfileDropdown;