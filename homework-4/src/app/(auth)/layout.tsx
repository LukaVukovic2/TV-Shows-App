import { Card, Flex } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card
        variant="huge"
        alignItems="center"
      >
        <Flex alignItems="center" height="100%">
          {children}
        </Flex>
      </Card>
    </Flex>
  );
}
