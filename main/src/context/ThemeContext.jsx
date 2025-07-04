    import React, { createContext, useState, useContext } from 'react';
    import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

    const ThemeContext = createContext();

    export const ThemeContextProvider = ({ children }) => {
      const [mode, setMode] = useState('light');

      const toggleTheme = () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      };

      const theme = createTheme({
        palette: {
          mode: mode,
          primary: {
            main: '#2196f3',
          },
          secondary: {
            main: '#ff9800',
          },
          background: {
            default: mode === 'light' ? '#f4f6f8' : '#121212',
            paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
          },
        },
        typography: {
          fontFamily: 'Inter, sans-serif',
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
                borderRadius: 12,
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                borderRadius: 0,
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                borderRadius: 8,
              },
            },
          },
        },
      });

      return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ThemeContext.Provider>
      );
    };

    export const useThemeContext = () => useContext(ThemeContext);