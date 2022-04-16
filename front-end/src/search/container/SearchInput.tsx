import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Metadata } from '../component/LinkPreview';

export default function SearchInput({
  setMetadata,
}: {
  setMetadata: React.Dispatch<React.SetStateAction<Metadata | null>>;
}) {
  const [url, setUrl] = useState('');
  function setKeyword(event: React.ChangeEvent<HTMLInputElement>) {
    setUrl(event.target.value);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const res = await fetch(
      `http://localhost:5000/api/link-preview/?url=${url}`
    );
    const metadata = await res.json();
    console.log(metadata);
    setMetadata(metadata);
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="url"
        name="url"
        label="URL"
        value={url}
        onChange={setKeyword}
        autoFocus
        sx={{ flexGrow: 1, m: 1 }}
      />
      <Button type="submit" variant="contained" sx={{ m: 1 }}>
        Get!
      </Button>
    </Box>
  );
}
