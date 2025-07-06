import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { ThemeContextProvider } from './context/ThemeContext'; // Corrected import path
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

const App = () => {
  return (
    <ThemeContextProvider>
      <Router>
        <Navbar />
        <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Box>
      </Router>
    </ThemeContextProvider>
  );
};
