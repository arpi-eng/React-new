import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Simple Counter App',
      description: 'My very first React app, learning `useState` for basic increment/decrement.',
      link: '#',
    },
    {
      id: 2,
      title: 'Basic Calculator',
      description: 'A simple calculator to practice state management and event handling.',
      link: '#',
    },
    {
      id: 3,
      title: 'To-Do List with Filters',
      description: 'Building a classic to-do app, focusing on component communication and array manipulation.',
      link: '#',
    },
    {
      id: 4,
      title: 'Theme Switcher Demo',
      description: 'Exploring React Context to implement a simple dark/light mode toggle.', // Corrected this line
      link: '#',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        My Projects
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 5 }}>
        Here are some basic projects showcasing different React concepts.
      </Typography>

      <Grid container spacing={4}>
        {projects.map((projectItem) => (
          <Grid item xs={12} sm={6} md={4} key={projectItem.id}>
            <ProjectCard {...projectItem} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="caption" display="block" sx={{ mt: 4, textAlign: 'center', fontStyle: 'italic' }}>
        (This page demonstrates reusable components and mapping over data.)
      </Typography>
      {/* TODO: Consider adding a simple search/filter functionality here */}
    </Container>
  );
};

export default Projects;
