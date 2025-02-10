import React from 'react';
import Header from '../components/Header';
import AdCard from '../components/AdCard';
import { Container, Grid, Typography } from '@mui/material';

const ads = [
  { id: 1, title: 'Mobile Phone for Sale', description: 'Used mobile phone in good condition.', price: '$200', imageUrl: 'https://images.unsplash.com/photo-1511407397580-01966bc53325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
  { id: 2, title: 'Laptop for Sale', description: 'Like new laptop with warranty.', price: '$500', imageUrl: 'https://images.unsplash.com/photo-1547328574-2b38359c2139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
  { id: 3, title: 'Car for Sale', description: 'Well-maintained car with low mileage.', price: '$10000', imageUrl: 'https://images.unsplash.com/photo-1494976388535-8800c99869ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
];

function HomePage() {
  return (
    <div>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Featured Ads
        </Typography>
        <Grid container spacing={2}>
          {ads.map((ad) => (
            <Grid item xs={12} sm={6} md={4} key={ad.id}>
              <AdCard ad={ad} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default HomePage;
