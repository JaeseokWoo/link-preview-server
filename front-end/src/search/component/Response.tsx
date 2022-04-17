import React from 'react';
import { TextField } from '@mui/material';

export type Metadata = {
  title: string | null;
  description: string | null;
  img: string | null;
  domain: string | null;
};

function transformPrettyJsonStringify(json: { [key: string]: string | null }) {
  return Object.keys(json).reduce(
    (acc: string, key: string, idx: number, origin: string[]) => {
      let ret = `${acc}\n\t${key}: ${json[key]}`;
      if (idx === origin.length - 1) {
        ret += '\n}';
      } else {
        ret += ',';
      }
      return ret;
    },
    '{'
  );
}

export default function Response({ metadata }: { metadata: Metadata }) {
  return (
    <TextField
      disabled
      fullWidth
      multiline
      value={transformPrettyJsonStringify(metadata)}
    />
  );
}
