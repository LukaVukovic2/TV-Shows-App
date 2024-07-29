'use client'
import Header from "@/components/shared/Header/Header";
import { Flex } from "@chakra-ui/react";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {  
  return (
    <Flex flexWrap="wrap" p={8}>
      <Header />
      <Flex flex={1} justifyContent="center" wrap="wrap" alignItems="center">
        {children}
      </Flex>
    </Flex>
  );
}