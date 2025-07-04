import React, { useEffect } from 'react';
import { Typography, Container, Box, Chip } from '@mui/material';
import useWindowWidth from '../hooks/useWindowWidth';
import SkillChip from '../components/SkillChip';

const About = () => {
  // Update tab title on mount, reset when navigating away
  useEffect(() => {
    document.title = 'About Me | My Dev Journey'; // might refactor this into a helper later

    return () => {
      document.title = 'My Developer Journey';
    };
  }, []);

  const windowWidth = useWindowWidth(); // simple custom hook — good practice

  const skillTags = [
    'React', 'JavaScript', 'HTML', 'CSS',
    'UI/UX', 'Git/Github', 'Design',
    'Java', 'Moderation' 
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 9 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        sx={{ textAlign: 'center', fontWeight: 'bold' }}
      >
        About Me
      </Typography>

      {/* Main bio box – text might be too long for mobile but oh well */}
      <Box sx={{ mt: 4, p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
        <Typography paragraph variant="body1">
          Hey there, I'm Abhigyan Dwivedi — part designer, part coder, and full-time tinkerer.
          I study computer science and dabble in UI/UX when I’m not trying to fix bugs I created 10 minutes ago.
          Lately, I've been really into frontend stuff — mostly React, because it just clicks for me.
        </Typography>
        <Typography paragraph variant="body1">
          This site is basically me putting React concepts into action:
          function components, hooks (`useState`, `useEffect`, `useContext`), client-side routing, and MUI to make things look semi-decent without CSS headaches.
        </Typography>
      </Box>

      {/* Skills section – maybe animate these later? */}
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          My Skills
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5 }}>
          {skillTags.map((skill, idx) => (
            <SkillChip key={idx} name={skill} />
          ))}
        </Box>
      </Box>

      {/* Window width section – could’ve made this its own component, maybe later */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          Window Information
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Current window width: <Chip label={`${windowWidth}px`} color="secondary" size="small" />
        </Typography>

        {/* Slightly excessive captions, but I like the documentation feel */}
        <Typography 
          variant="caption" 
          display="block" 
          sx={{ mt: 1, fontStyle: 'italic' }}
        >
          Using <code>useWindowWidth</code> to track screen size — custom hooks FTW.
        </Typography>
        <Typography 
          variant="caption" 
          display="block" 
          sx={{ mt: 1, fontStyle: 'italic' }}
        >
          Also using `useEffect` to dynamically update the page title.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
