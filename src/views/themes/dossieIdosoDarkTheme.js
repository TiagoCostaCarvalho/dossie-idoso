import { createTheme } from "@mui/material/styles";
import { buttonClasses } from "@mui/material/Button";

const dossieIdosoDarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6750A4", // Inversão da cor principal do tema claro
    },
    secondary: {
      main: "#A1A7BA", // Inversão da cor secundária do tema claro
    },
    tertiary: {
      main: "#F4F6F7", // Cor de fundo escura para textos claros
      contrastText: "#171C1F", // Texto principal em cor clara
    },
    quaternary: {
      main: "#1B1736", // Cor de fundo clara para textos escuros
      contrastText: "white", // Texto secundário em cor escura
      // main: "white", // Cor de fundo clara para textos escuros
      // contrastText: "#1B1736", // Texto secundário em cor escura
    },
    createAccountButton: {
      main: "white", // Cor de fundo clara para textos escuros
      contrastText: "#1B1736", // Texto secundário em cor escura
    },
    disableButton: {
      main: "#121212",
      contrastText: "#ffffff",
    },
    link: {
      main: "#ffffff",
    },
    error: {
      main: "#FF867B", // Inversão da cor de erro do tema claro
    },
    background: {
      default: "#171C1F", // Cor de fundo principal escura
      drawer: "#272727",
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
    action: {
      disabledBackground: "#121212", // Cor de fundo para elementos desativados
      disabled: "white", // Texto de elementos desativados
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

export default dossieIdosoDarkTheme;
