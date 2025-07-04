    import React from 'react';
    import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

    const ProjectCard = ({ title, description, link }) => {
      return (
        <Card sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 2,
          boxShadow: 3,
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: 6,
          }
        }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            {link && (
              <Button
                size="small"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                color="primary"
              >
                View Project
              </Button>
            )}
          </CardActions>
        </Card>
      );
    };

    export default ProjectCard;