import React from 'react';
import TextField from '@mui/material/TextField';
import { Metadata } from 'use-link-preview';

export default function Response({ metadata }: { metadata: Metadata }) {
  return (
    <TextField
      disabled
      fullWidth
      multiline
      value={JSON.stringify(metadata, null, 2)}
    />
  );
}
