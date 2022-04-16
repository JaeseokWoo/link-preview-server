import React from 'react';
import { TextField } from '@mui/material';

export type Metadata = {
  title: string;
  description: string;
  img: string | null;
  domain: string;
};

export default function Response({ metadata }: { metadata: Metadata }) {
  return (
    <TextField disabled multiline defaultValue={JSON.stringify(metadata)} />
  );
}
