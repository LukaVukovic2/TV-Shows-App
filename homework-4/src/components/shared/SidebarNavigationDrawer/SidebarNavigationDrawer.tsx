import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, Image, 
  DrawerCloseButton, Flex } from "@chakra-ui/react";
import NavigationList from "../NavigationList/NavigationList";

export default function SidebarNavigationDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        variant="outlined"
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
            <Flex direction="column" alignItems="flex-start" justify="space-between" height="calc(100vh - 56px)">
              <NavigationList onClose={onClose} />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
