import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo from '../../assets/logo.png';

export type Metadata = {
  title: string;
  description: string;
  img: string | null;
  domain: string;
};

export default function LinkPreview({ metadata }: { metadata: Metadata }) {
  const { title, description, domain, img } = metadata;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={domain}>
        <CardMedia
          component="img"
          height="140"
          image={img || logo}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {domain}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
