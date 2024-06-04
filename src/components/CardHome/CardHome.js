<<<<<<< Updated upstream
=======
import './CardHome.css'; 
>>>>>>> Stashed changes
import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
<<<<<<< Updated upstream
import CardActions from '@mui/material/CardActions'; 
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share'; 
=======
import CardActions from '@mui/material/CardActions';  
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
>>>>>>> Stashed changes
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Button from '@mui/material/Button';


export default function CardImpl(props) {
    //props tem: title, description, imgUrl, imgAlt, cardWidth
<<<<<<< Updated upstream

  return (
    <Card sx={{maxWidth: props.cardWidth, minWidth:props.cardWidth, minHeight: 200}}>
=======
 
  return (
    <Card className="cardHome" sx={{maxWidth: props.cardWidth, minWidth:props.cardWidth, minHeight: 200}}>
>>>>>>> Stashed changes
      <CardHeader 
        action={
        <IconButton aria-label="audio">
            <VolumeUpIcon />
        </IconButton>
        }
        title={props.title}
        sx={{minHeight:100}}
      />
<<<<<<< Updated upstream
      {props.imgAlt && 
=======
      { 
>>>>>>> Stashed changes
        <CardMedia
          component="img"
          height="200"
          image={props.imgUrl}
          alt={props.imgAlt || ""}
<<<<<<< Updated upstream
          sx={{ height: 200, objectFit: 'cover' }}
=======
          sx={{ height: 200, objectFit: 'cover' }} 
>>>>>>> Stashed changes
        />
      }
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" color="primary">
          Conferir
        </Button>
      </CardActions>
    </Card>
  );
}
