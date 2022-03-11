import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material';

export default function Search() {
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
  }

  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography component="h1" variant="h3" sx={{ textAlign: 'center' }}>
          Link Preview
        </Typography>
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
      </Box>
    </Container>
  );
}
