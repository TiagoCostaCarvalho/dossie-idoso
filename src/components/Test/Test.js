import './Test.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import { Button } from '@mui/base/Button';
import Stack from '@mui/material/Stack';
import CardImpl from 'components/CardImpl/CardImpl';
import Grid from '@mui/material/Grid';

function Test(props) {
  return (
    <div className="App"> 
    <Box  > 
        <TextField id="input-with-sx" label="With sx" variant="standard" />
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
    </Box>
    <Stack spacing={2} direction="row"  className="Center">
      <Button>Saúde</Button>
      <Button>Lazer</Button>
      <Button>Economia</Button>
    </Stack>
    <Grid container spacing={2}>
     <Grid item xs={8}>
     {
      //props tem: title, description, imgUrl, imgAlt, cardWidth
      props.cards.map(card => <CardImpl key={card.title} title={card.title} description={card.description}/>)
     }
     </Grid>
    </Grid>
    
    <Button >Começar um novo conteúdo!</Button>
    </div>
  );
}

export default Test;
