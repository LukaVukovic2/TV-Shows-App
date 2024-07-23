import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "buttonRadius",
  },
  sizes: {
    md: {
      fontSize: "md",
      h: "auto"
    },
  },
  variants: {
    contained: {
      bg: "#fff",
      color: "purple",
      textTransform: "uppercase",
      px: 47,
      py: 19,
      _hover: {
        boxShadow: "0px 0px 9px 0px #000000B2"
      },
      _disabled: {
        bg: "lightPurple",
        color: "darkPurple"
      }
    },
    outlined: {
      bg: "transparent",
      color: "white",
      textShadow: "0px 0px 9px 0px #000000B2",
      px: 3,
      py: 2,
      _hover: {
        bg: "purple",
      },
    },
    selected: {
      bg: "purple",
      color: "white",
      textShadow: "0px 0px 9px 0px #000000B2",
      px: 3,
      py: 2,
    }
  },
  defaultProps: {
    size: "md",
    variant: "contained",
  },
});

export default Button;