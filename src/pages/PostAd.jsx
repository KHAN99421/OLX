import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

function PostAd() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Post an Ad
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Title" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Description" multiline rows={4} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Price" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Post Ad
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PostAd;
