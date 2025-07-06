import React, { useEffect } from 'react';
import { Typography, Container, Box, Chip } from '@mui/material';
import SkillChip from '../components/SkillChip';
import '../index.css';

const About = () => {
  useEffect(() => {
    document.title = 'About Me';

    return () => {
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
          Hello! I'm aFirst-year Computer Science student at LNCTE College with a passion for software development, UI/UX design, and cloud computing. I have hands-on experience with Google Cloud Platform (GCP) and a keen eye for user-centered design, having contributed to the UI of the LNUniverse website. I am proficient in Java & React.js and am eager to collaborate on innovative projects that merge technology and creative design. Let's connect!
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

