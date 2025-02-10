import React from 'react';
import { Container, Typography } from '@mui/material';

function AdminPanel() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Panel
      </Typography>
      <Typography variant="body1">
        Admin panel functionalities will be implemented here.
      </Typography>
    </Container>
  );
}

export default AdminPanel;
