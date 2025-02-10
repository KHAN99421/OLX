import React from 'react';
import { Container, Typography } from '@mui/material';

function Chat() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Chat
      </Typography>
      <Typography variant="body1">
        Chat functionality will be implemented here.
      </Typography>
    </Container>
  );
}

export default Chat;
