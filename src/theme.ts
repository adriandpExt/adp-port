import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#e1edfc",
      paper: "#2A3335",
    },
  },
  components: {
    // Customizing the default style of Card component
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#fcfbf7",
          boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});
