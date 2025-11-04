import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

//A dropdown that shows all of the pages under the Resources category
const ResourcesDropdown: React.FC<{}> = () => {

    let [arrowIcon, setArrowIcon] = useState("material-symbols:keyboard-arrow-down-rounded");

    function handleDropdownChange(isOpen: boolean): void {
        if(isOpen) {
            setArrowIcon("material-symbols:keyboard-arrow-up-rounded");
        }
        else {
            setArrowIcon("material-symbols:keyboard-arrow-down-rounded");
        }
    }

    return (
        <Dropdown onOpenChange={(isOpen) => handleDropdownChange(isOpen)}>
            <DropdownTrigger>
                <Button variant="light">
                    Resources
                    <Icon icon={arrowIcon}/>
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Resource Page List">
                <DropdownSection showDivider>
                    <DropdownItem key="primer" href='/resources/primer' startContent={<Icon icon={"material-symbols:import-contacts-outline"} width={18} height={18}/>}>
                        Primer
                    </DropdownItem>
                    <DropdownItem key="videos" href='/resources/videos' startContent={<Icon icon={"material-symbols:smart-display-outline"} width={18} height={18}/>}>
                        Videos
                    </DropdownItem>
                    <DropdownItem key="guides" href='/resources/learning-guides' startContent={<Icon icon={"material-symbols:book-2-outline"} width={18} height={18}/>}>
                        Learning Guides
                    </DropdownItem>
                    <DropdownItem key="externalResources" href='/resources/external-resources' startContent={<Icon icon={"material-symbols:article-outline"} width={18} height={18}/>}>
                        External Resources
                    </DropdownItem>
                </DropdownSection>
                <DropdownSection>
                    <DropdownItem key="community" href='/resources/community' startContent={<Icon icon={"fa7-brands:discord"} width={18} height={18}/>}>
                        Community
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}

export default ResourcesDropdown;