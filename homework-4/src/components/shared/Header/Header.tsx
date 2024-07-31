import LogoImage from "@/components/core/LogoImage/LogoImage";
import SidebarNavigation from "../SidebarNavigation/SidebarNavigation";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import SidebarNavigationDrawer from "../SidebarNavigationDrawer/SidebarNavigationDrawer";
import styles from "./Header.module.css";

export default function Header() {
  const [isSmallerScreen] = useMediaQuery("(max-width: 991.9px)");
  const [isLargerScreen] = useMediaQuery("(min-width: 992px)");

  return (
    <Flex
      className={styles.header}
      justify="space-between"
      alignItems="flex-start"
      mb={{base: 6, lg: 0}}
      mr={{base: 0, lg: 12}}
      bg="purple.900"
      py={{base: 4, lg: 0}}
    >
      <LogoImage width={199} />
      {isSmallerScreen && <SidebarNavigationDrawer />}
      {isLargerScreen && <SidebarNavigation />}
    </Flex>
  );
}
