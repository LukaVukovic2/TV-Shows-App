import { chakra, Flex, Spinner } from "@chakra-ui/react";

export default function LoadingSpinner() {
  return (
    <chakra.div
>
      <Flex alignItems="center" gap="10px">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="purple.500"
          color="purple.400"
          size="xl"
        />
        Loading...
      </Flex>
    </chakra.div>
  );
}
