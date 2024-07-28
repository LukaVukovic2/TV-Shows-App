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
import typography from "./foundations/typography";
import styles from "./styles";
import Form from "./components/form";

const theme = extendTheme({
  breakpoints,
  components: {
    Button,
    Card,
    Input,
    Heading,
    Form
  },
  fonts: typography.fonts,
  fontWeights: typography.fontWeights,
  fontSizes,
  colors,
  radii,
  styles
});

export default theme;
