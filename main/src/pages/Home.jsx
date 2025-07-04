    import React, { useState } from 'react';
    import { Typography, Button, Container } from '@mui/material';

    const Home = () => {
      const [clickCount, setClickCount] = useState(0);

      return (
        <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Welcome to My Developer Journey!
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Exploring React fundamentals and building cool things.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 4, px: 5, py: 1.5 }}
            onClick={() => setClickCount(prevCount => prevCount + 1)}
          >
            Click Me to See `useState` in Action ({clickCount})
          </Button>
          <Typography variant="caption" display="block" sx={{ mt: 2, fontStyle: 'italic' }}>
            (This button demonstrates the `useState` hook for local component state.)
          </Typography>
        </Container>
      );
    };

    export default Home;
