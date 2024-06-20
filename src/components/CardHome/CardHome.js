 import './CardHome.css';  
import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'; 
import CardActions from '@mui/material/CardActions';  
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'; 
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';


export default function CardImpl(props) { 
 
  return (
    <Card variant="outlined" className="cardHome" sx={{maxWidth: props.cardWidth || "200px", minWidth:props.cardWidth || "300px", minHeight: 200}}>
       <CardHeader 
        title={props.title}
        sx={{minHeight:100, fontWeight: "bold"}}
      /> 
      {  
        <CardMedia
          component="img"
          height="200"
          image={props.imgUrl}
          alt={props.imgAlt || ""}
 
          sx={{ height: 200, objectFit: 'cover' }}  
        />
      }
      <CardContent>
        <Typography variant="body2" className="textPurple" style={{fontSize:'1rem', letterSpacing:'0.2rem', fontWeight:500}}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{justifyContent: "right"}}>
        <Button variant="contained" color="primary" sx={{textTransform: 'none'}}>
          Conferir
        </Button>
      </CardActions>
    </Card>
  );
}
