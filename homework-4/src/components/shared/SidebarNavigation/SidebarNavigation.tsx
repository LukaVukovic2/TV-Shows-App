"use client";
import { Button, Flex, chakra } from "@chakra-ui/react";
import NextLink from "next/link";
import { useUser } from "@/hooks/useUser";
import { usePathname } from "next/navigation";
import { navItems } from "../Data/NavigationItems";
import { clearLocalStorage } from "../utilities/LocalStorage/LocalStorage";
import Picker from "@/components/features/picker/Picker";

interface ISidebarNavigationProps {
  onClose?: () => void;
}

export default function SidebarNavigation({onClose}: ISidebarNavigationProps) {
  const { mutate } = useUser();
  const path = usePathname();

  function onLogout() {
    clearLocalStorage();
    mutate(null, { revalidate: false });
  }
  return (
    <chakra.nav
      mt={8}    
      height="100vh"
      as={Flex}
      direction="column"
      justify="space-between"
      alignItems="flex-start"
    >
      <Flex direction="column" gap={3}>
        {navItems.map((item, index) => (
          <Button
            as={NextLink}
            variant={`${path === item.path ? "selected" : "borderless"}`}
            fontSize="2xl"
            fontWeight="regular"
            href={item.path}
            key={index}
            onClick={() => {
              if (onClose) {
                onClose();
              }
            }}
          >
            {item.name}
          </Button>
        ))}
        <Picker />
      </Flex>
      <Button
        fontSize="xl"
        display="inline-block"
        variant="borderless"
        fontWeight="regular"
        onClick={onLogout}
      >
        Log out
      </Button>
    </chakra.nav>
  );
}
