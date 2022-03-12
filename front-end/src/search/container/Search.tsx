import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SearchInput from './SearchInput';
import LinkPreview, { Metadata } from '../component/LinkPreview';

export default function Search() {
  const [metadata, setMetadata] = useState<null | Metadata>(null);
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
        <SearchInput setMetadata={setMetadata} />
        {metadata && <LinkPreview metadata={metadata} />}
      </Box>
    </Container>
  );
}
