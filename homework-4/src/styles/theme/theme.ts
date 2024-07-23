import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import Button from "./components/button";
import Card from "./components/card";
import Input from "./components/input";
import radii from "./foundations/radius";
import Heading from "./components/heading";

const colors = {
  lightPurple: "#8D5CE5",
  purple: "#3F00B2",
  darkPurple: "#1B004C",
  error: "#FF2498",
  white: "#fff",
  purple2: "#371687",
};

const typography = {
  fonts: {
    heading: "Roboto, Arial, sans-serif",
    body: "Roboto, Arial, sans-serif",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "32px",
    "5xl": "40px",
    "6xl": "52px",
  },
  fontWeights: {
    regular: 400,
    bolder: 500,
    bold: 700,
  },
};

const styles = {
  global: {
    "html, body": {
      color: "white",
      bg: "darkPurple",
    },
    "#body": {
      m: 0,
      p: 0,
      color: "white",
      position: "relative",
      minHeight: "100vh",
    },
  },
};

const breakpoints = {
  sm: "23.4375em",
  md: "48em",
  lg: "62em",
  xl: "80em",
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
  fontSizes: typography.fontSizes,
  fontWeights: typography.fontWeights,
  colors,
  radii,
  styles
});

export default theme;
