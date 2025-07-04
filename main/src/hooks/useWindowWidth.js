import React, { createContext, useState, useContext } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

// Context to share theme mode + toggle across the app
const ThemeContext = createContext();

// Wrapper component to provide light/dark mode
export const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light'); // default to light for now

  const toggleTheme = () => {
    // simple toggle — might expand to support system preference later
    setThemeMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // MUI theme config — basic palette + some component overrides
  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#2196f3', // blue
      },
      secondary: {
        main: '#ff9800', // orange — might switch this out later
      },
      background: {
        default: themeMode === 'light' ? '#f4f6f8' : '#121212',
        paper: themeMode === 'light' ? '#ffffff' : '#1e1e1e',
      },
    },
    typography: {
      fontFamily: 'Inter, sans-serif', // using Inter everywhere
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12, // feels right visually
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            borderRadius: 0, // app bars don’t really need curves
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8, // uniform look with buttons
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ mode: themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Resets default browser styles */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the theme context
export const useThemeContext = () => useContext(ThemeContext);
