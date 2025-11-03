import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

//A dropdown that shows all of the pages under the Practice category
const PracticeDropdown: React.FC<{}> = () => {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="light">
                    Practice
                    <Icon icon={"material-symbols:keyboard-arrow-down-rounded"}/>
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Practice Page List">
                <DropdownSection showDivider>
                    <DropdownItem key="learning paths" href='/practice/learning-paths' className="flex flex-row gap-3">
                        <span className="font-icon"></span>
                        <p>Learning Paths</p>
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