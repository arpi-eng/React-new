import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectItems = [  
    {
      id: 1,
      title: 'Interactive Todo List',
      description: 'Basic CRUD with hooks – just a classic practice app.',
      link: '#',
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Fake weather data from a dummy API. Just wanted to test fetch + loading states.',
      link: '#',
    },
    {
      id: 3,
      title: 'Quiz Application',
      description: 'Multiple choice quiz, tracks score. A bit hacky but works.',
      link: '#',
    },
    {
      id: 4,
      title: 'Theme Switcher',
      description: 'Dark/light toggle using React Context — It's also the one you're viewing rn',
      link: '#',
    },
    // 
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 9 }}>
      {/* Page title – tried using h2 but it looked too small */}
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        sx={{ textAlign: 'center', fontWeight: 600 }}
      >
        My Projects
      </Typography>

      {/* Introductory line – might remove this later */}
      <Typography 
        variant="h6" 
        color="text.secondary" 
        sx={{ textAlign: 'center', mb: 6 }}
      >
        These are mostly experiments in React — different patterns, state, and some UI bits.
      </Typography>

      <Grid container spacing={4}>
        {projectItems.map((proj) => (
          <Grid item xs={12} sm={6} md={4} key={proj.id}>
            <ProjectCard {...proj} />
          </Grid>
        ))}
      </Grid>

      
      <Typography 
        variant="caption" 
        display="block" 
        sx={{ mt: 5, textAlign: 'center', fontStyle: 'italic' }}
      >
        Built with reusable components and map(). Simple, but effective.
      </Typography>
    </Container>
  );
};

export default Projects;

