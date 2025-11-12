import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Avatar, Image, Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from '@heroui/react';
import brandMark from "../../assets/branding/logo-mark.svg";

// It might be a good idea to just put these components inside this file because they are only used once
import NotificationModal from './PageNavbarComponents/NotificationModal';
import { useState } from 'react';
import { Icon } from '@iconify/react';

// The header that allows users to navigate from page to page
const PageNavbar: React.FC<{}> = () => {

    let [resourceArrowIcon, setResourceArrowIcon] = useState("material-symbols:keyboard-arrow-down-rounded");
    let [practiceArrowIcon, setPracticeArrowIcon] = useState("material-symbols:keyboard-arrow-down-rounded");
    
    function handleDropdownChange(isOpen: boolean, name: string): void {
        if(isOpen) {
            switch(name) {
                case "Resource": {
                    setResourceArrowIcon("material-symbols:keyboard-arrow-up-rounded");
                    break;
                }
                default: {
                    setPracticeArrowIcon("material-symbols:keyboard-arrow-up-rounded");
                    break;
                }
            }
        }
        else {
            switch(name) {
                case "Resource": {
                    setResourceArrowIcon("material-symbols:keyboard-arrow-down-rounded");
                    break;
                }
                default: {
                    setPracticeArrowIcon("material-symbols:keyboard-arrow-down-rounded");
                    break;
                }
            }
        }
    }

    const curAddress = window.location.pathname;

    function getTextColor(isActive: boolean): string {
        if(isActive) {
            return "text-primary-base";
        }
        return "text-black";
    }

    return (
        <div className="PageNavbar" style={{width: "100%", height: "fit-content"}}>
            <Navbar>
                <NavbarBrand className="flex w-fit h-fit">
                    <Button className="flex w-fit h-fit" radius='full' isIconOnly as={Link} variant="light" href="/">
                        <Image src={brandMark}/>
                    </Button>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem isActive>
                        <Button as={Link} variant="light" href="/">
                            <p className={getTextColor(curAddress == "/")}>Home</p>
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Dropdown onOpenChange={(isOpen) => handleDropdownChange(isOpen, "Resource")}>
                            <DropdownTrigger>
                                <Button variant="light">
                                    <p className={getTextColor(curAddress == "/resources/primer" || 
                                        curAddress == "/resources/videos" ||
                                        curAddress == "/resources/learning-guides" || 
                                        curAddress == "/resources/external-resources")}>
                                            Resources
                                    </p>
                                    <Icon icon={resourceArrowIcon} 
                                        className={getTextColor(curAddress == "/resources/primer" || 
                                        curAddress == "/resources/videos" ||
                                        curAddress == "/resources/learning-guides" || 
                                        curAddress == "/resources/external-resources")}/>
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Resource Page List">
                                <DropdownSection showDivider>
                                    <DropdownItem className={"flex py-3"} key="primer" href='/resources/primer' startContent={<Icon className={getTextColor(curAddress == "/resources/primer")} icon={"material-symbols:import-contacts-outline"} width={18} height={18}/>}>
                                        <p className={getTextColor(curAddress == "/resources/primer")}>Primer</p>
                                    </DropdownItem>
                                    <DropdownItem className={"flex py-3"} key="videos" href='/resources/videos' startContent={<Icon className={getTextColor(curAddress == "/resources/videos")} icon={"material-symbols:smart-display-outline"} width={18} height={18}/>}>
                                        <p className={getTextColor(curAddress == "/resources/videos")}>Videos</p>
                                    </DropdownItem>
                                    <DropdownItem className={"flex py-3"} key="guides" href='/resources/learning-guides' startContent={<Icon className={getTextColor(curAddress == "/resources/learning-guides")} icon={"material-symbols:book-2-outline"} width={18} height={18}/>}>
                                        <p className={getTextColor(curAddress == "/resources/learning-guides")}>Learning Guides</p>
                                    </DropdownItem>
                                    <DropdownItem className={"flex py-3"} key="externalResources" href='/resources/external-resources' startContent={<Icon className={getTextColor(curAddress == "/resources/external-resources")} icon={"material-symbols:article-outline"} width={18} height={18}/>}>
                                        <p className={getTextColor(curAddress == "/resources/external-resources")}>External Resources</p>
                                    </DropdownItem>
                                </DropdownSection>
                                <DropdownSection>
                                    <DropdownItem className={"flex py-3"} key="community" href='/resources/community' startContent={<Icon icon={"fa7-brands:discord"} width={18} height={18}/>}>
                                        Community
                                    </DropdownItem>
                                </DropdownSection>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                    <NavbarItem>
                        <Dropdown onOpenChange={(isOpen) => handleDropdownChange(isOpen, "Practice")}>
                            <DropdownTrigger>
                                <Button variant="light">
                                    <p className={getTextColor(curAddress == "/practice" || 
                                        curAddress == "/practice/gym" ||
                                        curAddress == "/practice/learning-paths" || 
                                        curAddress == "/practice/games")}>Practice</p>
                                    <Icon icon={practiceArrowIcon}
                                        className={getTextColor(curAddress == "/practice" || 
                                        curAddress == "/practice/gym" ||
                                        curAddress == "/practice/learning-paths" || 
                                        curAddress == "/practice/games")}/>
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Practice Page List">
                                <DropdownSection showDivider>
                                    <DropdownItem className={"flex py-3"} key="gym" href='/practice/gym' startContent={<Icon className={getTextColor(curAddress == "/practice/gym")} icon={"fa7-solid:dumbbell"} width={18} height={18}/>}>
                                        <p className={getTextColor(curAddress == "/practice/gym")}>Gym</p>
                                    </DropdownItem>
                                    <DropdownItem className={"flex py-3"} key="learning paths" href='/practice/learning-paths' startContent={<Icon className={getTextColor(curAddress == "/practice/learning-paths")} icon={"material-symbols:route-outline"} width={18} height={18}/>}>
                                        <p className={getTextColor(curAddress == "/practice/learning-paths")}>Learning Paths</p>
                                    </DropdownItem>
                                </DropdownSection>
                                <DropdownSection>
                                    <DropdownItem className={"flex py-3"} key="games" href='/practice/games' startContent={<Icon className={getTextColor(curAddress == "/practice/games")} icon={"material-symbols:joystick-outline"} width={18} height={18}/>}>
                                        <p className={getTextColor(curAddress == "/practice/games")}>Games</p>
                                    </DropdownItem>
                                </DropdownSection>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} variant="light" href="/compete">
                            <p className={getTextColor(curAddress == "/compete")}>Compete</p>
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} variant="light" href="/classroom">
                            <p className={getTextColor(curAddress == "/classroom")}>Classroom</p>
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <NotificationModal/>
                    </NavbarItem>
                    <NavbarItem>
                        <Dropdown>
                            <DropdownTrigger>
                                <Avatar as={Button} isIconOnly={true} radius={"full"} variant={"flat"} color='default'/>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Page List">
                                <DropdownSection showDivider>
                                    <DropdownItem className={"flex py-3"} key="profile" href='/profile' startContent={<Icon className={getTextColor(curAddress == "/profile")} icon={"material-symbols:person-outline"} width={18} height={18}/>}>
                                        <p className={getTextColor(curAddress == "/profile")}>Profile</p>
                                    </DropdownItem>
                                    <DropdownItem className={"flex py-3"} key="account settings" href="/profile/account-settings" startContent={<Icon className={getTextColor(curAddress == "/profile/account-settings")} icon={"material-symbols:settings-outline"} width={18} height={18}/>}>
                                        <p className={getTextColor(curAddress == "/profile/account-settings")}>Account Settings</p>
                                    </DropdownItem>
                                </DropdownSection>
                                <DropdownSection>
                                    <DropdownItem className={"flex py-3"} key="log out" href='/'>
                                        <p>Log Out</p>
                                    </DropdownItem>
                                </DropdownSection>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    );
}

export default PageNavbar;