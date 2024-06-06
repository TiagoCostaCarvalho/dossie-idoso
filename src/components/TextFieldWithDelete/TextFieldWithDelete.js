import './TextFieldWithDelete.css';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import CancelIcon from 'components/Icons/CancelIcon/CancelIcon';

function TextFieldWithDelete(props) {
  //props should have "value" and a "setValue" from an useState constant; check NewTopicContent.js for example
  //also an "label"

  const handleValueChange = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <TextField required={props.required != null ? props.required : false} label={props.label} variant="outlined" value={props.value} onChange={handleValueChange}
    multiline
    maxRows={10}
    fullWidth
    InputProps={{
      endAdornment: props.value && (
        <InputAdornment position="end">
          <IconButton
            aria-label="clear input"
            onClick={(e) => {props.setValue('')}}
            edge="end"
          >
            <CancelIcon />
          </IconButton>
        </InputAdornment>
      ),
    }}
    />
  );
}

export default TextFieldWithDelete;
