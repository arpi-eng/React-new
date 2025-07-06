import React from 'react';
import { Chip } from '@mui/material';

const SkillChip = ({ name }) => {
  return (
    <Chip
      label={name}
      color="primary"
      variant="outlined"
      sx={{
        margin: 4, 
        fontWeight: 500,
        backgroundColor: 'rgba(33, 150, 243, 0.08)', 
        borderColor: '#2196f3', 
        '&:hover': {
          backgroundColor: 'rgba(33, 150, 243, 0.15)', 
          boxShadow: '0px 2px 4px rgba(0,0,0,0.1)', 
        },
      }}
    />
  );
};

export default SkillChip;
