"use client";
import { Flex, Text } from "@chakra-ui/react";
import { useUser } from "@/hooks/useUser";
import NextLink from "next/link";
import LogoImage from "@/components/core/LogoImage/LogoImage";
import { navItems } from "../Data/NavigationItems";
import styles from "./SidebarNavigation.module.css";
import { clearLocalStorage } from "../utilities/LocalStorage/LocalStorage";
import { usePathname } from "next/navigation";

export default function SidebarNavigation() {
  const path = usePathname();
  const { mutate } = useUser();

  function onLogout(){
    clearLocalStorage();
    mutate(null, {"revalidate": false});
  }

  return (
    <div className={styles.navWrapper}>
      <Flex
        className={styles.navbar}
        justifyContent="space-between"
      >
        <nav className={styles.navItems}>
          <LogoImage width={100} />
          <Flex
            flexWrap="wrap"
            flexDirection="column"
            alignItems="center"
            gap={3}
          >
            {
              navItems.map((item, index) => (
                <NextLink
                  href={item.path}
                  key={index}
                  className={`${styles.navLink} ${path === item.path && styles.active}`}
                >
                  {item.name}
                </NextLink>
              ))
            }
          </Flex>
        </nav>

        <Text as="button"
          onClick={onLogout}
          className={styles.logoutBtn}
        >Logout
        </Text>
      </Flex>
    </div>
  );
}
