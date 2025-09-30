import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Avatar, Image } from '@heroui/react';

// It might be a good idea to just put these components inside this file because they are only used once
import NotificationModal from './PageNavbarComponents/NotificationModal';
import ResourcesDropdown from './PageNavbarComponents/ResourcesDropdown';
import PracticeDropdown from './PageNavbarComponents/PracticeDropdown';

// The header that allows users to navigate from page to page
function PageNavbar() {
    return (
        <div className="PageNavbar" style={{width: "100%", height: "fit-content"}}>
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
                    <NavbarItem> {/* GRAPHICS_ISSUE - this item is not showing up on the webpage as of 9/23/25 */}
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