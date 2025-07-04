    import React, { useEffect } from 'react';
    import { Typography, Container, Box, Chip } from '@mui/material';
    import useWindowWidth from '../hooks/useWindowWidth';
    import SkillChip from '../components/SkillChip';

    const About = () => {
      useEffect(() => {
        document.title = 'About Me | My Dev Journey';

        return () => {
          document.title = 'My Developer Journey';
        };
      }, []);

      const windowWidth = useWindowWidth();

      const skills = [
        'React', 'JavaScript', 'HTML', 'CSS', 'UI/UX', 'Git/Github', 'Design', 'Java', 'Moderation'
      ];

      return (
        <Container maxWidth="md" sx={{ mt: 8 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            About Me
          </Typography>
          <Box sx={{ mt: 4, p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
            <Typography paragraph variant="body1">
              Hi, I'm Abhigyan Dwivedi — a passionate UI/UX designer and computer science student with a keen eye for detail and a love for creating intuitive, user-friendly digital experiences. I enjoy blending creativity with functionality to build products that not only look good but feel great to use. Currently exploring frontend development and continuously learning to grow as a designer and developer.
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

          <Box sx={{ mt: 5, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Window Information
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Current window width: <Chip label={`${windowWidth}px`} color="secondary" size="small" />
            </Typography>
            <Typography variant="caption" display="block" sx={{ mt: 1, fontStyle: 'italic' }}>
              (This demonstrates a custom hook (`useWindowWidth`) for reusable logic.)
            </Typography>
            <Typography variant="caption" display="block" sx={{ mt: 1, fontStyle: 'italic' }}>
              (The page title update demonstrates the `useEffect` hook.)
            </Typography>
          </Box>
        </Container>
      );
    };

    export default About;