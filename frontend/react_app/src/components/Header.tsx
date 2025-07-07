import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Avatar, Image } from '@heroui/react';

// import { MaterialSymbol } from "react-material-symbols";

import NotificationModal from './Header/NotificationModal';
import ResourcesDropdown from './Header/ResourcesDropdown';
import PracticeDropdown from './Header/PracticeDropdown';

function GearIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            {/*Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ */}
            <path fill="heroui-default-foreground" fillRule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.62 1.62 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.03 2.03 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361s-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a2 2 0 0 0-.399 1.479c.053.394.287.798.757 1.605s.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a2 2 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361s.306-1.064.782-1.36c.324-.203.533-.364.682-.556a2 2 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605s-.704-1.21-1.022-1.453a2.03 2.03 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.62 1.62 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 0 0-1.09-1.083M12.5 15c1.67 0 3.023-1.343 3.023-3S14.169 9 12.5 9s-3.023 1.343-3.023 3s1.354 3 3.023 3" clipRule="evenodd"/>
        </svg>
    );
}

function Header() {
    return (
        <div className="Header" style={{width: "100%", height: "100%"}}>
            <Navbar>
                <NavbarBrand>
                    <Image></Image>
                    <p className="font-bold text-inherit">picoCTF</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Button as={Link} variant="light" href="/">
                            Home
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <ResourcesDropdown/>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <PracticeDropdown/>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} variant="light" href="/compete">
                            Compete
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} variant="light" href="/classroom">
                            Classroom
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <NotificationModal/>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">
                        <Button as={Link} color="default" href="/preferences" variant="flat" radius="full" isIconOnly={true}>
                            {/* <MaterialSymbol icon="settings" size={24} fill grade={-25} color='red'/> */}
                            <GearIcon/>
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="default" href="/profile" variant="flat" radius="full" isIconOnly={true}>
                            <Avatar size='sm'/>
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    );
}

export default Header;