import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ads = [
  { id: 1, title: 'Mobile Phone for Sale', description: 'Used mobile phone in good condition.', price: '$200', imageUrl: 'https://images.unsplash.com/photo-1511407397580-01966bc53325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
  { id: 2, title: 'Laptop for Sale', description: 'Like new laptop with warranty.', price: '$500', imageUrl: 'https://images.unsplash.com/photo-1547328574-2b38359c2139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
  { id: 3, title: 'Car for Sale', description: 'Well-maintained car with low mileage.', price: '$10000', imageUrl: 'https://images.unsplash.com/photo-1494976388535-8800c99869ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
];

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('Featured Ads')}
        </Typography>
        <Grid container spacing={2}>
          {ads.map((ad) => (
            <Grid item xs={12} sm={6} md={4} key={ad.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={ad.imageUrl}
                  alt={ad.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {ad.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {ad.description}
                  </Typography>
                  <Typography variant="h6">
                    {ad.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
