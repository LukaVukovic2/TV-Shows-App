import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Image,
  DrawerCloseButton,
  chakra,
  Flex,
} from "@chakra-ui/react";
import SidebarNavigation from "../SidebarNavigation/SidebarNavigation";

export default function SidebarNavigationDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        variant="borderless"
        onClick={onOpen}
      >
        <Image
          src="/images/menu.svg"
          alt="menu"
        />
      </Button>
      <Drawer
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="darkPurple"
          borderRadius="30px 0 0 0"
        >
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <chakra.nav
              as={Flex}
              direction="column"
              alignItems="flex-start"
              justify="space-between"
              height="calc(100vh - 56px)"
            >
              <SidebarNavigation onClose={onClose} />
            </chakra.nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
