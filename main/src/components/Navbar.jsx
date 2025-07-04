    import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <AppBar position="static" elevation={2}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 700 }}
        >
          My Dev Journey
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/projects" color="inherit">
          Projects
        </Button>
        <Button component={Link} to="/about" color="inherit">
          About
        </Button>
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
