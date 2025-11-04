import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

//A dropdown that shows all of the pages under the Practice category
const PracticeDropdown: React.FC<{}> = () => {

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
                    Practice
                    <Icon icon={arrowIcon}/>
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Practice Page List">
                <DropdownSection showDivider>
                    <DropdownItem key="gym" href='/practice/gym' startContent={<Icon icon={"fa7-solid:dumbbell"} width={18} height={18}/>}>
                        Gym
                    </DropdownItem>
                    <DropdownItem key="learning paths" href='/practice/learning-paths' startContent={<Icon icon={"material-symbols:route-outline"} width={18} height={18}/>}>
                        <p>Learning Paths</p>
                    </DropdownItem>
                </DropdownSection>
                <DropdownSection>
                    <DropdownItem key="games" href='/practice/games' startContent={<Icon icon={"material-symbols:joystick-outline"} width={18} height={18}/>}>
                        Games
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}

export default PracticeDropdown;