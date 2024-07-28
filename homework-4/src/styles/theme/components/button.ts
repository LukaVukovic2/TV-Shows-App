import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "buttonRadius",
  },
  variants: {
    contained: {
      bg: "white",
      color: "purple.500",
      textTransform: "uppercase",
      fontWeight: "bolder",
      fontSize: "sm",
      px: [47, 41.5],
      py: [19],
      _hover: {
        boxShadow: "0px 0px 9px 0px #000000B2"
      },
      _disabled: {
        bg: "purple.400",
        color: "purple.900"
      }
    },
    borderless: {
      bg: "transparent",
      color: "white",
      textShadow: "0px 0px 9px 0px #000000B2",
      px: 3,
      py: 2,
      _hover: {
        bg: "purple.500",
      },
    },
    selected: {
      bg: "purple.500",
      color: "white",
      textShadow: "0px 0px 9px 0px #000000B2",
      px: 3,
      py: 2,
    }
  },
  defaultProps: {
    variant: "contained",
  },
});

export default Button;