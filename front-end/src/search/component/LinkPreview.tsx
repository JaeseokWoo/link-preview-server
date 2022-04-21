import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo from '../../assets/logo.png';

export type Metadata = {
  title: string | null;
  description: string | null;
  img: string | null;
  domain: string;
  requestUrl: string;
};

export default function LinkPreview({ metadata }: { metadata: Metadata }) {
  const { title, description, domain, img, requestUrl } = metadata;
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea href={requestUrl} target="_blank">
        <CardMedia
          component="img"
          height="140"
          image={img || logo}
          alt={title || undefined}
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
