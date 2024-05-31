import './Test.css'; 
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import CardImpl from 'components/CardImpl/CardImpl';
import Grid from '@mui/material/Grid';

function Test(props) {
  const [selectedCards, setSelectedCards] = useState([{}])
  const buttonStyle = { borderRadius: '16px', backgroundColor: 'purple', color: 'white', '&:hover': { backgroundColor: 'darkviolet' } }

  return (
    <div className="App"> 
    <Box  > 
        <TextField id="input-with-sx" label="With sx" variant="standard" />
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
    </Box>
    <Stack spacing={2} direction="row"  className="Center">
      <Button onClick={() => setSelectedCards(props.saudeCards)}  sx={buttonStyle}>Saúde</Button>
      <Button onClick={() => setSelectedCards(props.lazerCards)} sx={buttonStyle}>Lazer</Button>
      <Button onClick={() => setSelectedCards(props.economiaCards)} sx={buttonStyle}>Economia</Button>
    </Stack>
    <Grid container spacing={2}>
     <Grid item xs={8}>
     {
      //props tem: title, description, imgUrl, imgAlt, cardWidth  
      !!selectedCards ?  selectedCards.map(card => <CardImpl key={card.title} title={card.title} description={card.description} cardWidth={200}/>)
      : "Temos nada"
    }
     </Grid>
    </Grid>
    
    <Button >Começar um novo conteúdo!</Button>
    </div>
  );
}

export default Test;
