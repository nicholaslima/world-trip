import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      light: "rgba(255, 186, 8, 0.5)",
      "900": "#FFBA08",
    },
    gray: {
      light: "#DADADA",
      medium: "#999999",
      dark: "#47585B",
    },
    white: {
      normal: "#FFFFFF",
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
