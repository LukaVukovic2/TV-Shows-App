import LogoImage from "@/components/core/LogoImage/LogoImage";
import SidebarNavigation from "../SidebarNavigation/SidebarNavigation";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import SidebarNavigationDrawer from "../SidebarNavigationDrawer/SidebarNavigationDrawer";
import styles from "./Header.module.css";

export default function Header() {
  const layoutSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  return (
    <Flex
      className={styles.header}
      justify="space-between"
      alignItems="flex-start"
      mb={{base: 6, lg: 0}}
      mr={{base: 0, lg: 6}}
    >
      <LogoImage width={199} />
      {layoutSize == "sm" || layoutSize == "md" ? 
        <SidebarNavigationDrawer /> : 
        <SidebarNavigation />
      }
    </Flex>
  );
}
