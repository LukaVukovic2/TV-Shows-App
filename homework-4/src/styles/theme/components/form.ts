const activeLabelStyles = {
  transform: "scale(0.85) translateY(-30px)"
};

const Form = {
  variants: {
    floating: {
      container: {
        _focusWithin: {
          label: {
            ...activeLabelStyles
          }
        },
        "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
          ...activeLabelStyles
        },
        label: {
          top: 0,
          left: 0,
          zIndex: 2,
          position: "absolute",
          backgroundColor: "purple.700",
          pointerEvents: "none",
          mx: 10,
          px: 2,
          my: 4,
          transformOrigin: "left top",
          borderRadius: "26px",
        }
      }
    }
  }
}

export default Form;