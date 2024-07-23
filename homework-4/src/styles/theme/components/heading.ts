import { defineStyleConfig } from '@chakra-ui/react'

const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
  },
  variants: {
    web: {
      fontSize: '5xl',
      lineHeight: '52px'
    },
    tablet: {
      fontSize: '3xl',
      lineHeight: '30px'
    },
    mobile: {
      fontSize: '2xl',
      lineHeight: '20px'
    }
  },
  defaultProps: {
    size: 'xl',
    variant: 'mobile',
    colorScheme: 'brand',
  }
})

export default Heading;