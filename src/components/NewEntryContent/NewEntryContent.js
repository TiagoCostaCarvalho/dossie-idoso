import ButtonWithDisable from 'components/ButtonWithDisable/ButtonWithDisable';
import './NewEntryContent.css';
import { FormControl, InputLabel, Select, MenuItem, TextField, Input, Box, Button, InputAdornment} from '@mui/material';
import CancelIcon from 'components/Icons/CancelIcon/CancelIcon';
import TextFieldWithDelete from 'components/TextFieldWithDelete/TextFieldWithDelete';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from "react-router-dom";

function NewEntryContent() {

  const topic = JSON.parse(localStorage.getItem("newTopic"));

  const navigate = useNavigate();

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [text, setText] = React.useState('');
  const [imgUrl, setImgUrl] = React.useState('');
  const [imgAlt, setImgAlt] = React.useState('');

  const isButtonDisabled = useMemo(() => {
    return !name || !description || !text
  }, [name, description, text])

  const submitAction = useCallback(() => {
    const newEntry = {name, description, text, imgUrl, imgAlt};
    const existingEntries = topic.entries ? topic.entries : [];
    topic.entries = [...existingEntries, newEntry];

    localStorage.setItem("newTopic", JSON.stringify(topic));
    navigate("/new-topic/example");
  }, [topic.entries, name, description, text, imgUrl, imgAlt]);

  return (
    <Box className="NewEntryContent" component="form">
      <h1>Novo Entrada no entrada {topic.name}</h1> 

      {/* <h2>Nome</h2> */}
      <FormControl variant="outlined" sx={{ minWidth: 120, gap: "12px" }}>
        <TextFieldWithDelete value={name} setValue={setName} label="Título da entrada" />
        <TextFieldWithDelete value={description} setValue={setDescription} label="Descrição do entrada" />
        <TextFieldWithDelete value={text} setValue={setText} label="Texto da entrada" />
        <TextFieldWithDelete required={false} value={imgUrl} setValue={setImgUrl} label="Link (URL) da imagem" />
        <TextFieldWithDelete required={false} value={imgAlt} setValue={setImgAlt} label="Texto alternativo (descritivo) da imagem" />
      </FormControl>


      <ButtonWithDisable label="Criar entrada" isDisabled={isButtonDisabled} onClick={(e) => {submitAction()}} />

    </Box>
  );
}

export default NewEntryContent;
