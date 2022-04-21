import React from 'react';
import Alert from '@mui/material/Alert';

export default function Error({ error }: { error: Error }) {
  return <Alert severity="error">{error.message}</Alert>;
}
