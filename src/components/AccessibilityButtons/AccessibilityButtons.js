import { IconButton } from '@mui/material';
import './AccessibilityButtons.css';
import iconBoldMinus from 'assets/icon-L-bold-minus.png'
import iconBoldPlus from 'assets/icon-L-bold-plus.png'
import iconContrast from 'assets/icon-contrast.png'
import iconFontMinus from 'assets/icon-font-minus.png'
import iconFontPlus from 'assets/icon-font-plus.png'

function AccessibilityButtons() {
  return (
    <div >
      <IconButton>
        <img src={iconBoldMinus} className="App-logo" alt="logo" />
      </IconButton>
      <IconButton>
        <img src={iconBoldPlus} className="App-logo" alt="logo" />
      </IconButton>
      <IconButton>
        <img src={iconContrast} className="App-logo" alt="logo" />
      </IconButton>
      <IconButton>
        <img src={iconFontMinus} className="App-logo" alt="logo" />
      </IconButton>
      <IconButton>
        <img src={iconFontPlus} className="App-logo" alt="logo" />
      </IconButton>
    </div>
  );
}

export default AccessibilityButtons;
