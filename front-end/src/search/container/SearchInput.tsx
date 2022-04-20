import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchInput({
  setUrl,
}: {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [currentText, setCurrentText] = useState('');
  function setKeyword(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentText(event.target.value);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setUrl(currentText);
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
        type="url"
        value={currentText}
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
