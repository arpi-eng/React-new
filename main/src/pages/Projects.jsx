import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Interactive Todo List',
      description: 'A simple todo application demonstrating basic CRUD operations and state management.',
      link: '#',
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Fetches and displays weather data for a given city using an external API (simulated).',
      link: '#',
    },
    {
      id: 3,
      title: 'Quiz Application',
      description: 'A multi-choice quiz app with score tracking and question navigation.',
      link: '#',
    },
    {
      id: 4,
      title: 'Theme Switcher',
      description: 'A small utility to toggle between light and dark themes using React Context API.',
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
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="caption" display="block" sx={{ mt: 4, textAlign: 'center', fontStyle: 'italic' }}>
        (This page demonstrates reusable components and mapping over data.)
      </Typography>
    </Container>
  );
};

export default Projects;
