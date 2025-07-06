import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <AppBar position="static" sx={{
      boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: mode === 'light' ? '#e0e0e0' : '#303030',
      padding: '8px 16px',
    }}>
      <Toolbar disableGutters sx={{ width: '100%', maxWidth: 'lg', margin: '0 auto' }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: '0.05em',
            color: mode === 'light' ? '#424242' : '#f5f5f5',
          }}
        >
          My Dev Journey
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              fontWeight: 500,
              padding: '6px 12px',
              minWidth: 'unset',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/projects"
            sx={{
              fontWeight: 500,
              padding: '6px 12px',
              minWidth: 'unset',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{
              fontWeight: 500,
              padding: '6px 12px',
              minWidth: 'unset',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            About
          </Button>
        </Box>

        <IconButton
          color="inherit"
          onClick={toggleTheme}
          aria-label="toggle theme"
          sx={{ marginLeft: '15px' }}
        >
          {mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
