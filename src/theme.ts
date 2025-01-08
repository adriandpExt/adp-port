import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#e1edfc",
      paper: "#2A3335",
    },
    warning: {
      main: "#F97300",
    },
    common: {
      black: "#0C0C0C",
    },
  },
  typography: {
    fontFamily: "Atma-Meduim",
    h2: {
      fontFamily: "Rubik",
    },
  },
  components: {
    // Customizing the default style of Card component
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#fcfbf7",
          boxShadow: "1px 4px 10px 1px rgb(180, 180, 180)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          gap: "0.5rem",
          alignItems: "center",
          backgroundColor: "#0C0C0C",
          boxShadow: "8px 8px 1px 0px #F97300",
        },
      },
    },
  },
});
