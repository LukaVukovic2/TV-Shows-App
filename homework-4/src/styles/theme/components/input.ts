import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  field: {
    display: 'flex',
    alignItems: 'center',
    gap: 3,
    height: "56px",
    py: 4,
    pl: 12,
    borderRadius: "inputRadius",
    _placeholder: {
      color: 'white',
    },
    w: ["288px", "320px", "388px"],
  }
})

const Input = defineMultiStyleConfig({ baseStyle })

export default Input;