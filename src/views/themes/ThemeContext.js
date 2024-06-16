// src/views/themes/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';
import dossieIdosoLightTheme from './dossieIdosoLightTheme';
import dossieIdosoDarkTheme from './dossieIdosoDarkTheme';
import { createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  const [fontSize, setFontSize] = useState(14); // Tamanho de fonte padrão em pixels
  const [fontChangeCount, setFontChangeCount] = useState(0);

  const toggleTheme = () => {
    setThemeMode((prevThemeMode) => (prevThemeMode === 'light' ? 'dark' : 'light'));
  };

  const increaseFontSize = () => {
    if (fontChangeCount < 2) {
      setFontSize((prevFontSize) => prevFontSize + 2); // Aumenta o tamanho da fonte em 2px
      setFontChangeCount((prevCount) => prevCount + 1);
    }
  };

  const decreaseFontSize = () => {
    if (fontChangeCount > -2) {
      setFontSize((prevFontSize) => prevFontSize - 2); // Diminui o tamanho da fonte em 2px, mínimo 12px
      setFontChangeCount((prevCount) => prevCount - 1);
    }
  };

  const createCustomTheme = (mode, fontSize) => {
    const baseTheme = mode === 'light' ? dossieIdosoLightTheme : dossieIdosoDarkTheme;
    return createTheme({
      ...baseTheme,
      typography: {
        ...baseTheme.typography,
        fontSize: fontSize,
        h1: { fontSize: `${fontSize * 2.5 / 14}rem` },
        h2: { fontSize: `${fontSize * 2 / 14}rem` },
        h3: { fontSize: `${fontSize * 1.75 / 14}rem` },
        h4: { fontSize: `${fontSize * 1.5 / 14}rem` },
        h5: { fontSize: `${fontSize * 1.25 / 14}rem` },
        h6: { fontSize: `${fontSize / 14}rem` },
        body1: { fontSize: `${fontSize / 14}rem` },
        body2: { fontSize: `${fontSize * 0.875 / 14}rem` },
      },
    });
  };

  const theme = createCustomTheme(themeMode, fontSize);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme, increaseFontSize, decreaseFontSize, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
