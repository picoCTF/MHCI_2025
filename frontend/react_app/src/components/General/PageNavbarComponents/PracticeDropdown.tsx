import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "@heroui/react";

function PracticeDropdown() {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="light">Practice</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Practice Page List">
                <DropdownSection showDivider>
                    <DropdownItem key="learning paths" href='/practice/learning-paths'>
                        Learning Paths
                    </DropdownItem>
                    <DropdownItem key="gym" href='/practice/gym'>
                        Gym
                    </DropdownItem>
                </DropdownSection>
                <DropdownSection>
                    <DropdownItem key="games" href='/practice/games'>
                        Games
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}

export default PracticeDropdown;