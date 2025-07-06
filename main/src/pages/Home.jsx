import React from 'react';
import { Typography, Container, Button } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
        Hey there! Welcome to my React Journey!
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Exploring React fundamentals and building cool things, one step at a time.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 4, px: 5, py: 1.5 }}
        href="/#/projects" // Link to projects page
      >
        View My Projects
      </Button>
      <Typography variant="caption" display="block" sx={{ mt: 2, fontStyle: 'italic' }}>
        (This page introduces my journey and offers a quick link to projects.)
      </Typography>
    </Container>
  );
};

export default Home;
