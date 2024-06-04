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
<<<<<<< Updated upstream
  const buttonStyle = { borderRadius: '16px', backgroundColor: 'purple', color: 'white', '&:hover': { backgroundColor: 'darkviolet' } }
=======
  //const buttonStyle = { borderRadius: '16px', backgroundColor: 'purple', color: 'white', '&:hover': { backgroundColor: 'darkviolet' } }
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
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
=======
      <Button onClick={() => setSelectedCards(props.saudeCards)} className="button">Saúde</Button>
      <Button onClick={() => setSelectedCards(props.lazerCards)} className="button">Lazer</Button>
      <Button onClick={() => setSelectedCards(props.economiaCards)} className="button">Economia</Button>
    </Stack>
    <Grid className="Center" container columnSpacing={40}> 
     {
      //props tem: title, description, imgUrl, imgAlt, cardWidth  
      !!selectedCards ?  selectedCards.map(card => 
      <Grid item xs={12} sm={6} md={4} lg={3} > 
        <CardHome key={card.title} title={card.title} description={card.description} imgUrl={card.imgUrl} cardWidth={300}/> 
>>>>>>> Stashed changes
      </Grid>)
      : "Temos nada"
    }
    </Grid>
    
<<<<<<< Updated upstream
    <Button sx={buttonStyle}>Começar um novo conteúdo!</Button>
=======
    <Button className="fixedButton" >Começar um novo conteúdo!</Button>
>>>>>>> Stashed changes
    </div>
  );
}

export default Test;
