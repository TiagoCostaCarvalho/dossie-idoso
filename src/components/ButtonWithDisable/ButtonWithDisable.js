import './ButtonWithDisable.css';
import { Button, useTheme } from '@mui/material';

function ButtonWithDisable(props) {
  //props should have "isDisabled"; check NewTopicContent.js for example
  //also an "label"

  const theme = useTheme();

  return (
    <Button variant="contained" disabled={props.isDisabled}  onClick={props.onClick}
      sx={{
        "&.Mui-disabled": {
          background: theme.palette.disableButton.main,
          color: theme.palette.disableButton.contrastText,
        },
        "&:hover": { 
          background: "#1B1736"
        },
        borderRadius: 28,
        background: "#1B1736",
        color: "#ffffff",
        marginBottom: "4em"
      }}>
        {props.label}
    </Button>
  );
}

export default ButtonWithDisable;
