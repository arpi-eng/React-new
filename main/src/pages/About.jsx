import React, { useEffect } from 'react';
import { Typography, Container, Box, Chip } from '@mui/material';
import SkillChip from '../components/SkillChip';
import '../index.css'; // Make sure to import your global CSS

const About = () => {
  useEffect(() => {
    // Changed the title to remove "My Dev Journey"
    document.title = 'About Me';

    return () => {
      // You can set a default title here if you want, e.g., 'My Portfolio'
      document.title = 'My Portfolio';
    };
  }, []);

  const skills = [
    'React', 'JavaScript', 'HTML', 'CSS', 'Material UI', 'Git', 'Responsive Design', 'Hooks', 'Context API'
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        About Me
      </Typography>
      <Box sx={{ mt: 4, p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2 }} className="main-content-box">
        <Typography paragraph variant="body1">
          Hello! I'm a passionate student developer at **[Your College Name]**, constantly exploring the world of web development.
          My journey with React has been exciting, focusing on building intuitive and efficient user interfaces.
          I'm particularly interested in how components, hooks, and state management come together to create scalable applications.
        </Typography>
        <Typography paragraph variant="body1">
          This website is a small demonstration of my understanding of core React concepts,
          including functional components, various hooks (`useState`, `useEffect`, `useContext`),
          client-side routing with `react-router-dom`, and leveraging UI libraries like Material UI for a polished look.
        </Typography>
      </Box>

      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          My Skills
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
          {skills.map((skill, index) => (
            <SkillChip key={index} name={skill} />
          ))}
        </Box>
      </Box>

      <Typography variant="caption" display="block" sx={{ mt: 1, fontStyle: 'italic' }}>
        (The page title update demonstrates the `useEffect` hook.)
      </Typography>
    </Container>
  );
};

export default About;
