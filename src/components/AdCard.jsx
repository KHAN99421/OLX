import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

function AdCard({ ad }) {
  return (
    <Card>
      <CardActionArea component={Link} to={`/ad/${ad.id}`}>
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
      </CardActionArea>
    </Card>
  );
}

export default AdCard;
