"use client";
import { Flex, Heading } from "@chakra-ui/react";
import NextLink from "next/link";
import styles from "./SidebarNavigation.module.css";
import { navItems } from "../Data/NavigationItems";
import { usePathname } from "next/navigation";

export default function SidebarNavigation() {
  const path  = usePathname();

  return (
    <div className={styles.navWrapper}>
      <Flex
        className={styles.navbar}
        justifyContent="space-between"
      >
        <nav className={styles.navItems}>
          <Heading
            mb={10}
            size="s"
            whiteSpace="nowrap"
          >
            <i className="fa-solid fa-tv"></i> TV shows APP
          </Heading>
          <Flex
            flexWrap="wrap"
            flexDirection="column"
            gap={3}
          >
            {
              navItems.map((item, index) => (
                <NextLink
                  key={index}
                  href={item.path}
                  className={`${styles.navLink} ${path === item.path && styles.active}`}
                >
                  {item.name}
                </NextLink>
              ))
            }
          </Flex>
        </nav>

        <NextLink 
          href={`#`}
        >Logout</NextLink>
      </Flex>
    </div>
  );
}
