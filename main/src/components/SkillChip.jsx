    import React from 'react';
    import { Chip } from '@mui/material';

    const SkillChip = ({ name }) => {
      return (
        <Chip
          label={name}
          color="primary"
          variant="outlined"
          sx={{ m: 0.5, fontWeight: 'medium' }}
        />
      );
    };

    export default SkillChip;