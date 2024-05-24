import './TextFieldWithDelete.css';
import { TextField, InputAdornment } from '@mui/material';
import CancelIcon from 'components/Icons/CancelIcon/CancelIcon';

function TextFieldWithDelete(props) {
  //props should have "value" and a "setValue" from an useState constant; check NewTopicContent.js for example
  //also an "label"

  const handleValueChange = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <TextField required label={props.label} variant="outlined" value={props.value} onChange={handleValueChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" onClick={(e) => {props.setValue('')}}>
            <CancelIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default TextFieldWithDelete;
