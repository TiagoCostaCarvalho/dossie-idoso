import { createTheme } from "@mui/material/styles";
import { buttonClasses } from "@mui/material/Button";

const dossieIdosoLightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6750A4",
    },
    secondary: {
      main: "#625B71",
    },
    tertiary: {
      main: "#171C1F",
      contrastText: "white",
    },
    quaternary: {
      main: "white",
      contrastText: "#1B1736",
    },
    error: {
      main: "#B3261E",
    },
    background: {
      default: "#ffffff",
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
    action: {
      disabledBackground: "#40484C",
      disabled: "white",
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '2em',
          [`&.${buttonClasses.disabled}`]: {
            opacity: 0.9
          },
          textTransform: 'none',
        },
      },
    },
  },
});

export default dossieIdosoLightTheme;
