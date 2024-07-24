import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "buttonRadius",
  },
  variants: {
    contained: {
      bg: "white",
      color: "purple",
      textTransform: "uppercase",
      fontWeight: "bolder",
      fontSize: "sm",
      px: [47, 41.5],
      py: [19],
      _hover: {
        boxShadow: "0px 0px 9px 0px #000000B2"
      },
      _disabled: {
        bg: "lightPurple",
        color: "darkPurple"
      }
    },
    borderless: {
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
    variant: "contained",
  },
});

export default Button;