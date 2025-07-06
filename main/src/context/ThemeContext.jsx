import React, { createContext, useState, useContext } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [currentThemeMode, setCurrentThemeMode] = useState('light');

  const handleThemeSwitch = () => {
    setCurrentThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  
  const theme = createTheme({
    typography: {
      fontFamily: 'Inter, sans-serif',
      fontSize: 15, 
      h6: {
        fontWeight: 600, 
      },
    },
    palette: {
      mode: currentThemeMode, 
      primary: {
        main: '#3f51b5', 
        light: '#757de8',
      },
      secondary: {
        main: '#f50057', 
      },
      background: {
        paper: currentThemeMode === 'light' ? '#ffffff' : '#303030', 
        default: currentThemeMode === 'light' ? '#f0f2f5' : '#1a1a1a', 
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 7, 
            textTransform: 'none', 
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 11, 
            padding: '16px', 
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            boxShadow: '0px 3px 6px rgba(0,0,0,0.15)', 
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 7, 
            fontWeight: 500, 
          },
        },
      },
      
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingTop: '20px',
            paddingBottom: '20px',
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ mode: currentThemeMode, toggleTheme: handleThemeSwitch }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
