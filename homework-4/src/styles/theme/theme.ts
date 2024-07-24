import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import Button from "./components/button";
import Card from "./components/card";
import Input from "./components/input";
import radii from "./foundations/radius";
import Heading from "./components/heading";
import fontSizes from "./foundations/font-sizes";
import colors from "./foundations/colors";
import breakpoints from "./foundations/breakpoints";
import styles from "./styles";

const typography = {
  fonts: {
    heading: "Roboto, Arial, sans-serif",
    body: "Roboto, Arial, sans-serif",
  },
  fontWeights: {
    regular: 400,
    bolder: 500,
    bold: 700,
  },
};

const theme = extendTheme({
  breakpoints,
  components: {
    Button,
    Card,
    Input,
    Heading
  },
  fonts: typography.fonts,
  fontWeights: typography.fontWeights,
  fontSizes,
  colors,
  radii,
  styles
});

export default theme;
