// src/views/themes/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';
import dossieIdosoLightTheme from './dossieIdosoLightTheme';
import dossieIdosoDarkTheme from './dossieIdosoDarkTheme';
import { createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  const [fontSize, setFontSize] = useState(14); // Default font size in pixels
  const [fontChangeCount, setFontChangeCount] = useState(0);
  const [fontWeight, setFontWeight] = useState(400); // Default font weight
  const [fontWeightChangeCount, setFontWeightChangeCount] = useState(0);

  const toggleTheme = () => {
    setThemeMode((prevThemeMode) => (prevThemeMode === 'light' ? 'dark' : 'light'));
  };

  const increaseFontSize = () => {
    if (fontChangeCount < 2) {
      setFontSize((prevFontSize) => prevFontSize + 2); // Increase font size by 2px
      setFontChangeCount((prevCount) => prevCount + 1);
    }
  };

  const decreaseFontSize = () => {
    if (fontChangeCount > -2) {
      setFontSize((prevFontSize) => Math.max(12, prevFontSize - 2)); // Decrease font size by 2px, minimum 12px
      setFontChangeCount((prevCount) => prevCount - 1);
    }
  };

  const increaseFontWeight = () => {
    if (fontWeightChangeCount < 2) {
      setFontWeight((prevFontWeight) => Math.min(900, prevFontWeight + 50)); // Increase font weight by 50, max 900
      setFontWeightChangeCount((prevCount) => prevCount + 1);
    }
  };

  const decreaseFontWeight = () => {
    if (fontWeightChangeCount > -2) {
      setFontWeight((prevFontWeight) => Math.max(100, prevFontWeight - 50)); // Decrease font weight by 50, minimum 100
      setFontWeightChangeCount((prevCount) => prevCount - 1);
    }
  };

  const createCustomTheme = (mode, fontSize, fontWeight) => {
    const baseTheme = mode === 'light' ? dossieIdosoLightTheme : dossieIdosoDarkTheme;
    return createTheme({
      ...baseTheme,
      typography: {
        ...baseTheme.typography,
        fontSize: fontSize,
        fontWeightRegular: fontWeight,
        h1: { fontSize: `${fontSize * 2.5 / 14}rem`, fontWeight: fontWeight },
        h2: { fontSize: `${fontSize * 2 / 14}rem`, fontWeight: fontWeight },
        h3: { fontSize: `${fontSize * 1.75 / 14}rem`, fontWeight: fontWeight },
        h4: { fontSize: `${fontSize * 1.5 / 14}rem`, fontWeight: fontWeight },
        h5: { fontSize: `${fontSize * 1.25 / 14}rem`, fontWeight: fontWeight },
        h6: { fontSize: `${fontSize / 14}rem`, fontWeight: fontWeight },
        body1: { fontSize: `${fontSize / 14}rem`, fontWeight: fontWeight },
        body2: { fontSize: `${fontSize * 0.875 / 14}rem`, fontWeight: fontWeight },
        button: { fontSize: `${fontSize / 14}rem`, fontWeight: fontWeight },
        caption: { fontSize: `${fontSize * 0.75 / 14}rem`, fontWeight: fontWeight },
        overline: { fontSize: `${fontSize * 0.75 / 14}rem`, fontWeight: fontWeight },
      },
    });
  };

  const theme = createCustomTheme(themeMode, fontSize, fontWeight);

  return (
    <ThemeContext.Provider value={{
      themeMode, toggleTheme, increaseFontSize, decreaseFontSize,
      increaseFontWeight, decreaseFontWeight, theme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
