import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

const cardStyle = {
  baseStyle: definePartsStyle({
    container: {
      borderRadius: "cardRadius",
      h: "auto",
      boxShadow: "0px 0px 9px 0px #000000B2",
    }
  }),
  variants: {
    small: {
      container: {
        bg: 'white',
        color: 'purple.500'
      }
    },
    medium: {
      container: {
        bg: 'purple.700',
        color: 'white',
      }
    },
    huge: {
      container: {
        bg: 'purple.700',
        color: 'white',
        px: [ "40px", "53px"],
        py: [ "0px ", "56px"],
        w: ["100vw", "auto"],
        borderRadius: [0, "cardRadius"],
        height: ["100vh", "auto"],
        m: [0, "10px", "auto"],
      }
    },
  }
}
const Card = defineMultiStyleConfig(cardStyle)
export default Card;
