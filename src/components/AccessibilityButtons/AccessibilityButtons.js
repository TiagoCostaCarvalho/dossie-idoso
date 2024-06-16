import { IconButton } from '@mui/material';
import './AccessibilityButtons.css';
import iconBoldMinus from 'assets/icon-L-bold-minus.png'
import iconBoldPlus from 'assets/icon-L-bold-plus.png'
import iconContrast from 'assets/icon-contrast.png'
import iconFontMinus from 'assets/icon-font-minus.png'
import iconFontPlus from 'assets/icon-font-plus.png'
import { useTheme } from 'views/themes/ThemeContext';

function AccessibilityButtons(props) {
  const { themeMode, toggleTheme, increaseFontSize, decreaseFontSize } = useTheme();

  return (
    <div className={props.className} style={props.style}>
      {/* <IconButton aria-label='Diminuir negrito do texto'>
        <img src={iconBoldMinus} alt="Letra L sem seriff em caixa alta da cor branca" />
      </IconButton>
      <IconButton aria-label='Aumentar negrito do texto'>
        <img src={iconBoldPlus}  alt="Letra L com seriff em caixa alta da cor branca" />
      </IconButton> */}
      <IconButton aria-label='Alterar contraste da página' onClick={toggleTheme}>
        <img src={iconContrast}  alt="Círculo branco preenchido pela metade com branco" />
      </IconButton>
      <IconButton aria-label='Diminuir tamanho do texto' onClick={decreaseFontSize}>
        <img src={iconFontMinus}  alt="Letra A com símbolo de menos ao lado em branco" />
      </IconButton>
      <IconButton aria-label='Aumentar tamanho do texto' onClick={increaseFontSize}>
        <img src={iconFontPlus}  alt="Letra A com símbolo de mais ao lado em branco" />
      </IconButton>
    </div>
  );
}

export default AccessibilityButtons;
