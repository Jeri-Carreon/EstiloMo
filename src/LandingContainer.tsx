import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <src></src>
      <Container maxWidth={false}>
        <Box sx={{ bgcolor: '#286da6', height: '100vh' }} >
            <h1>Hello World!</h1>
            <p>Is this inside the box</p>
        </Box>
      </Container>
    </React.Fragment>
  );
}