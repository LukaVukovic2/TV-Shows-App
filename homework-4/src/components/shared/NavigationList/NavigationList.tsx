import NextLink from "next/link";
import { Button, Flex } from "@chakra-ui/react"
import { navItems } from "../Data/NavigationItems"
import { usePathname } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import { clearLocalStorage } from "../utilities/LocalStorage/LocalStorage";

interface INavigationListProps {
  onClose?: () => void;
}

export default function NavigationList({onClose}: INavigationListProps) {
  const { mutate } = useUser();
  const path = usePathname();

  function onLogout() {
    clearLocalStorage();
    mutate(null, { revalidate: false });
  }
  return (
    <>
      <Flex direction="column" gap={3}>
        {navItems.map((item, index) => (
          <Button
            as={NextLink}
            variant={`${path === item.path ? "selected" : "outlined"}`}
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
      </Flex>
      <Button
        fontSize="xl"
        display="inline-block"
        variant="outlined"
        onClick={onLogout}
      >
        Log out
      </Button>
    </>
  );
}