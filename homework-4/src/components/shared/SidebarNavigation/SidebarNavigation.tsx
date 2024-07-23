"use client";
import { Button, Flex, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import LogoImage from "@/components/core/LogoImage/LogoImage";
import { navItems } from "../Data/NavigationItems";
import styles from "./SidebarNavigation.module.css";
import { useUser } from "@/hooks/useUser";
import { clearLocalStorage } from "../utilities/LocalStorage/LocalStorage";

export default function SidebarNavigation() {
  const path = usePathname();
  const { mutate } = useUser();

  function onLogout() {
    clearLocalStorage();
    mutate(null, { revalidate: false });
  }

  return (
    <Flex
      className={styles.navbar}
      justifyContent="space-between"
    >
      <nav className={styles.navItems}>
        <LogoImage width={199} />
        <Flex
          flexWrap="wrap"
          flexDirection="column"
          alignItems="center"
          gap={3}
        >
          {navItems.map((item, index) => (
            <Button
              as={NextLink}
              variant={`${path === item.path ? "selected" : "outlined"}`}
              href={item.path}
              key={index}
            >
              {item.name}
            </Button>
          ))}
        </Flex>
      </nav>
      <Flex justify="center">
        <Button
          display="inline-block"
          variant="outlined"
          onClick={onLogout}
        >
          Log out
        </Button>

      </Flex>
    </Flex>
  );
}
