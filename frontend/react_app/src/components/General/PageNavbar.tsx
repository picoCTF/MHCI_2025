import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Avatar, Image } from '@heroui/react';

// import { MaterialSymbol } from "react-material-symbols";

import NotificationModal from '../NotificationModal';
import ResourcesDropdown from './PageNavbarComponents/ResourcesDropdown';
import PracticeDropdown from './PageNavbarComponents/PracticeDropdown';

function PageNavbar() {
    return (
        <div className="Header" style={{width: "100%", height: "fit-content"}}>
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

export default PageNavbar;