import './Test.css'; 
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import CardHome from 'components/CardHome/CardHome';
import Grid from '@mui/material/Grid';

function Test(props) {
  const [selectedCards, setSelectedCards] = useState(props.saudeCards)
  const buttonStyle = { borderRadius: '16px', backgroundColor: 'purple', color: 'white', '&:hover': { backgroundColor: 'darkviolet' } }

  return (
    <div className="App"> 
    <Box className="Center">
      <Box  className="searchField"> 
          <TextField id="input-with-sx" 
            label="Buscar por tópicos..." 
            variant="standard" 
            InputProps={{ className: 'searchInput' }}
            InputLabelProps={{ style: { color: 'white' } }} />
          <SearchIcon sx={{ color: 'white', mr: 1 }} />
      </Box>
    </Box>
    <Stack spacing={2} direction="row"  className="Center">
      <Button onClick={() => setSelectedCards(props.saudeCards)}  sx={buttonStyle}>Saúde</Button>
      <Button onClick={() => setSelectedCards(props.lazerCards)} sx={buttonStyle}>Lazer</Button>
      <Button onClick={() => setSelectedCards(props.economiaCards)} sx={buttonStyle}>Economia</Button>
    </Stack>
    <Grid className="Center" container sx={{ flexGrow: 1 }} spacing={2}> 
     {
      //props tem: title, description, imgUrl, imgAlt, cardWidth  
      !!selectedCards ?  selectedCards.map(card => 
      <Grid item xs={3}> 
        <CardHome key={card.title} title={card.title} description={card.description} jmgUrl={card.imgUrl} cardWidth={180}/> 
      </Grid>)
      : "Temos nada"
    }
    </Grid>
    
    <Button sx={buttonStyle}>Começar um novo conteúdo!</Button>
    </div>
  );
}

export default Test;
