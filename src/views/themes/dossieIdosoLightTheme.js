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
      // main: "black",
      // contrastText: "white",
    },
    createAccountButton: {
      main: "black",
      contrastText: "white",
    },
    disableButton: {
      main: "#40484C",
      contrastText: "#ffffff",
    },
    link: {
      main: "#21005D",
    },
    error: {
      main: "#B3261E",
    },
    background: {
      default: "#ffffff",
      drawer: "#6750A4",
    },
    action: {
      disabledBackground: "#40484C",
      disabled: "white",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: 20, // Set base font size (default is 14px)
    fontWeightRegular: 400, // Default font weight
    h1: {
      fontSize: '2.5rem', // Example heading size
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.75rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    h6: {
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
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
