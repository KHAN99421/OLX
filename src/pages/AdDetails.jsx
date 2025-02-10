import React from 'react';
import { Container, Typography } from '@mui/material';

function AdDetails() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Ad Details
      </Typography>
      <Typography variant="body1">
        Details of the advertisement will be displayed here.
      </Typography>
    </Container>
  );
}

export default AdDetails;
