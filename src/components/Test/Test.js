import './Test.css'; 
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import CardHome from 'components/CardHome/CardHome';
import Grid from '@mui/material/Grid';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useNavigate } from "react-router-dom";
import useWindowSize from 'helpers/useWindowSize';

function Test(props) {
  const [selectedCards, setSelectedCards] = useState(props.saudeCards);
  const [filteredCards, setFilteredCards] = useState(props.saudeCards); 
  const [searchText, setSearchText] = useState('');
  const [selectedButton, setSelectedButton] = useState('saude'); // Default selected button

  const isMobileSize = useWindowSize().width <= 700;  

  const navigate = useNavigate();

  //const buttonStyle = { borderRadius: '16px', backgroundColor: 'purple', color: 'white', '&:hover': { backgroundColor: 'darkviolet' } }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  useEffect(() => {
    setFilteredCards(
      selectedCards.filter((card) => 
        card.description.toLowerCase().includes(searchText.toLowerCase()) ||
        card.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [selectedCards, searchText]);

  const handleButtonClick = (cards, button) => {
    setSelectedCards(cards);
    setSelectedButton(button);
  };

  return ( 
    <div className="App"> 
    <Box className="Center">
      <Box  className="searchField"> 
          <TextField id="input-with-sx" 
            label="Buscar por tópicos..." 
            variant="standard" 
            InputProps={{ className: 'searchInput' }} 
            sx={{input: {color: 'white'}, width: '100%'}}
            InputLabelProps={{ style: { color: 'white' } }} 
            onChange={(e) => setSearchText(e.target.value)}/>
          <SearchIcon sx={{ color: 'white', mr: 1, mt: 2 }} />
      </Box>
    </Box>
    <Stack spacing={2} direction="row"  className={isMobileSize ? "Center StackStyle" : "Center"}>
        <Button 
          onClick={() => handleButtonClick(props.saudeCards, 'saude')} 
          className={`filterButton ${selectedButton === 'saude' ? 'selectedButton' : ''}`}
        >
          Saúde
        </Button>
        <Button 
          onClick={() => handleButtonClick(props.lazerCards, 'lazer')} 
          className={`filterButton ${selectedButton === 'lazer' ? 'selectedButton' : ''}`}
        >
          Lazer
        </Button>
        <Button 
          onClick={() => handleButtonClick(props.economiaCards, 'economia')} 
          className={`filterButton ${selectedButton === 'economia' ? 'selectedButton' : ''}`}
        >
          Economia
        </Button>
    </Stack>
    <Box className="gridContainer">
      <div className="Center CardContainer" container columnSpacing={40} rowSpacing={4}> 
      {
        //props tem: title, description, imgUrl, imgAlt, cardWidth  
        !!filteredCards ?  filteredCards.map(card => 
          <CardHome key={card.title} title={card.title} description={card.description} imgUrl={card.imgUrl} cardWidth={300}/>
        )
        : "Temos nada"
      }
      </div>
    </Box>
    <Button className={isMobileSize ? "NewTopicMobile" : "NewTopic"} onClick={(e) => {navigate("/new-topic")}} style={{fontSize: isMobileSize ? "1em" : "1.5em", margin: isMobileSize ? "12px" : "48px", padding: "12px"}} >Começar um novo conteúdo!</Button> 
    <Button className="topButton" onClick={scrollToTop}>
        <ArrowUpwardIcon />
        Topo
    </Button>
    </div>
  );
}

export default Test;
