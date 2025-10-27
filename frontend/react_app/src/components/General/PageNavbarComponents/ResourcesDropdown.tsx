import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "@heroui/react";

//A dropdown that shows all of the pages under the Resources category
const ResourcesDropdown: React.FC<{}> = () => {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="light">Resources</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Resource Page List">
                <DropdownSection showDivider>
                    <DropdownItem key="primer" href='/resources/primer'>
                        Primer
                    </DropdownItem>
                    <DropdownItem key="videos" href='/resources/videos'>
                        Videos
                    </DropdownItem>
                    <DropdownItem key="guides" href='/resources/learning-guides'>
                        Learning Guides
                    </DropdownItem>
                    <DropdownItem key="externalResources" href='/resources/external-resources'>
                        External Resources
                    </DropdownItem>
                </DropdownSection>
                <DropdownSection>
                    <DropdownItem key="community" href='/resources/community'>
                        Community
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}

export default ResourcesDropdown;