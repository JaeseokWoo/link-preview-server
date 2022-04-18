import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Box sx={{ m: 3, display: 'flex', justifyContent: 'center' }}>
      <CircularProgress size={60} />
    </Box>
  );
}
