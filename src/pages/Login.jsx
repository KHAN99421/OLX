import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

function Login() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Email" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" type="password" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
