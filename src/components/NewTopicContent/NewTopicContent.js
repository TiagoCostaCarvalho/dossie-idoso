import ButtonWithDisable from 'components/ButtonWithDisable/ButtonWithDisable';
import './NewTopicContent.css';
import { FormControl, InputLabel, Select, MenuItem, TextField, Input, Box, Button, InputAdornment} from '@mui/material';
import CancelIcon from 'components/Icons/CancelIcon/CancelIcon';
import TextFieldWithDelete from 'components/TextFieldWithDelete/TextFieldWithDelete';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from "react-router-dom";

function NewTopicContent() {

  const navigate = useNavigate();

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [bannerUrl, setBannerUrl] = React.useState('');
  const [bannerAlt, setBannerAlt] = React.useState('');

  const isButtonDisabled = useMemo(() => {
    return !name || !description || !category;
  }, [name, description, category])

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  //uso para fazer logs
  //vai fazer o que estiver dentro da função
  useEffect(() => {
    console.log({category, name})
  },
  //se algum desses valores mudar
  [category, name]);

  const submitAction = useCallback(() => {
    const newTopic = {name, description, category, bannerUrl, bannerAlt};
    localStorage.setItem("newTopic", JSON.stringify(newTopic));
    navigate("/new-topic/example");
  }, [name, description, category, bannerUrl, bannerAlt]);

  return (
    <Box className="NewTopicContent" component="form">
      <h1>Novo Tópico</h1> 

      {/* <h2>Nome</h2> */}
      <FormControl variant="outlined" sx={{ minWidth: 120, gap: "12px" }}>
        <TextFieldWithDelete value={name} setValue={setName} label="Nome do tópico" />
        <TextFieldWithDelete value={description} setValue={setDescription} label="Descrição do Tópico" />
      </FormControl>

      {/* <h2>Categoria do Novo Tópico</h2> */}
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Categoria do Tópico *</InputLabel>
        <Select
          value={category}
          onChange={handleCategoryChange}
          label="Categoria do Tópico *"
          required
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={"Saude"}>Saúde</MenuItem>
          <MenuItem value={"Lazer"}>Lazer</MenuItem>
          <MenuItem value={"Economia"}>Economia</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" sx={{ minWidth: 120, gap: "12px" }}>
        <TextFieldWithDelete required={false} value={bannerUrl} setValue={setBannerUrl} label="Link (URL) do banner" />
        <TextFieldWithDelete required={false} value={bannerAlt} setValue={setBannerAlt} label="Texto alternativo (descritivo) da imagem" />
      </FormControl>


      <ButtonWithDisable label="Criar tópico" isDisabled={isButtonDisabled} onClick={(e) => {submitAction()}} />

    </Box>
  );
}

export default NewTopicContent;
