import React from 'react';
import TextField from '@mui/material/TextField';

export type Metadata = {
  title: string | null;
  description: string | null;
  img: string | null;
  domain: string | null;
};

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
