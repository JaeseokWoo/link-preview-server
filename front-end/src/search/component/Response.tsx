import React from 'react';
import { TextField } from '@mui/material';

export type Metadata = {
  title: string | undefined;
  description: string | undefined;
  img: string | undefined;
  domain: string | undefined;
};

export default function Response({ metadata }: { metadata: Metadata }) {
  return (
    <TextField disabled multiline defaultValue={JSON.stringify(metadata)} />
  );
}
