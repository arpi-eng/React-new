import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useThemeContext } from '../context/ThemeContext'; // Corrected import path

const Navbar = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <AppBar position="static" elevation={3}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          My Dev Journey
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/projects">
          Projects
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <IconButton color="inherit" onClick={toggleTheme} aria-label="toggle theme">
          {mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
