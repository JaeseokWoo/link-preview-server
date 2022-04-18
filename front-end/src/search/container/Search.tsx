import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SearchInput from './SearchInput';
import Result from './Result';

export default function Search() {
  const [url, setUrl] = useState<string>('');
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
        <SearchInput setUrl={setUrl} />
        {url && <Result url={url} />}
      </Box>
    </Container>
  );
}
