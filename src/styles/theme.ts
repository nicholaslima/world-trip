import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "900": "#FFBA08",
    },
    gray: {
      light: "#DADADA",
      dark: "#47585B",
    },
    white: {
      light: "#F5F8FA",
    },
  },
  fonts: {
    body: "Poppins",
    cities: "Barlow",
  },
  styles: {
    global: {
      body: {
        bg: "white.light",
        body: "gray.dark",
      },
    },
  },
});
