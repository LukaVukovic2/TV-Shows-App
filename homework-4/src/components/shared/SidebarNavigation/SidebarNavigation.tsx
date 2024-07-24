"use client";
import { Flex, chakra } from "@chakra-ui/react";
import NavigationList from "../NavigationList/NavigationList";

export default function SidebarNavigation() {
  return (
    <chakra.nav
      mt={8}    
      height="100vh"
      as={Flex}
      direction="column"
      justify="space-between"
      alignItems="flex-start"
    >
      <NavigationList />
    </chakra.nav>
  );
}
