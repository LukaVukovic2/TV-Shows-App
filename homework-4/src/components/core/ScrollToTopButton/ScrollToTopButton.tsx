'use client';

import { Image, Flex } from "@chakra-ui/react";

export default function ScrollToTopButton() {
  return (
    <Flex
      justify="center"
      alignItems="center"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      style={{
        position: 'fixed',
        width: 56,
        height: 56,
        top: 557,
        right: 15,
        gap: 0,
        opacity: 0,
        backgroundColor: "purple",
        borderRadius: "50%",
        cursor: "pointer",
      }}
    >
      <Image src="/images/up.svg" alt="Scroll to top" />
    </Flex>
  );
}