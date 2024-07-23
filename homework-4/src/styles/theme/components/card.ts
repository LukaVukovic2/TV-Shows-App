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
        bg: '#fff',
        color: 'purple'
      }
    },
    huge: {
      container: {
        bg: 'purple',
        color: '#fff',
      }
    },
    medium: {
      container: {
        bg: 'purple2',
        color: 'white',
      }
    },
  }
}
const Card = defineMultiStyleConfig(cardStyle)
export default Card;
