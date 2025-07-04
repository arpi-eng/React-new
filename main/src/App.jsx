import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

// Theme setup — might move this somewhere else if it grows too big
import { ThemeContextProvider } from './context/ThemeContext';

// Pages & shared UI
import Navbar from './components/Navbar'; 
import HomeScreen from './pages/Home';    
import ProjectsPage from './pages/Projects'; 
import AboutSection from './pages/About'; 

const App = () => {
  return (
    <ThemeContextProvider>
      <Router>
        {/* Global navigation bar, stays the same across views */}
        <Navbar />

        {/* Padding feels about right, though might adjust for mobile */}
        <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutSection />} />
          </Routes>
        </Box>
      </Router>
    </ThemeContextProvider>
  );
};

export default App;  // leaving this as default for now — may switch to named exports later
