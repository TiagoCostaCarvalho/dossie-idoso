import ButtonWithDisable from 'components/ButtonWithDisable/ButtonWithDisable';
import './NewTopicExampleContent.css';
import React, { useCallback, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import CardImpl from 'components/CardImpl/CardImpl';
import { Box } from '@mui/material';
import CardHome from 'components/CardHome/CardHome';

function NewTopicExampleContent(props) {

  const navigate = useNavigate();

  const newTopic = JSON.parse(localStorage.getItem("newTopic"));
  const entries = newTopic.entries;

  const newEntryOnClick = useCallback(() => {
    navigate("/new-topic/example/new-entry");
  }, [navigate]);

  useEffect(() => {console.log({newTopic, entries})}, [newTopic, entries]);
  
  return (
    <Box className='NewTopicExampleContent'>
      <header className='Section Bottom-Bordered'>
        <div aria-label={newTopic.bannerAlt} style={{backgroundImage: newTopic.bannerUrl ? `url(${newTopic.bannerUrl})` : "linear-gradient(to right, #6750A4, #ffffff)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundColor: "#6750A4", minHeight: "300px", backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <h2 className='Centered' style={{color: "#000000"}}>Em {newTopic.category.toLowerCase()}:</h2>
          <h1 className='Centered' style={{color: "#000000"}}>{newTopic.name}</h1>
        </div>

        <p>{newTopic.description}</p>

        <ul className='List'> 
          <li>
            <a>Subtópicos</a>
          </li>
          <li>
            <a>Glossários</a>
          </li>
          <li>
            <a>Entradas em A-Z</a>
          </li>
        </ul>
      </header>
      
      <h2>Assuntos recentes</h2>
      <section className='Section Centered'>
        {!entries ? (
          <h3>Sem entradas nesse tópico ainda</h3>
        ) : (
          <div className='EntriesDiv'>
            {entries.map((entry) => 
              <CardHome title={entry.name} description={entry.description} imgUrl={entry.imgUrl} imgAlt={entry.imgAlt}/>
            )}
          </div>
        )}

        {/* <CardImpl title="Teste" description="descricao descricao descricao" imgUrl="https://www.w3schools.com/images/w3schools_green.jpg"/> */}

        <ButtonWithDisable label="Crie uma entrada no tópico agora!" isDisabled={false} onClick={(e) => newEntryOnClick()}/>
        {/* <img src='https://www.w3schools.com/images/w3schools_green.jpg'/> */}
      </section>
    </Box>
  );
}

export default NewTopicExampleContent;
