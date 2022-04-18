import React from 'react';
import Box from '@mui/material/Box';

export default function Error({ error }: { error: Error }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <p>{error.message}</p>
    </Box>
  );
}
