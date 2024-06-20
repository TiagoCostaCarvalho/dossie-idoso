import { IconButton, Tooltip } from '@mui/material';
import './AccessibilityButtons.css';
import iconBoldMinus from 'assets/icons8-bold-48.png'
import iconBoldPlus from 'assets/icons8-bold-50.png'
import iconContrast from 'assets/icon-contrast.png'
import iconFontMinus from 'assets/icon-font-minus.png'
import iconFontPlus from 'assets/icon-font-plus.png'
import { useTheme } from 'views/themes/ThemeContext';

function AccessibilityButtons(props) {
  const { themeMode, toggleTheme, increaseFontSize, decreaseFontSize, increaseFontWeight, decreaseFontWeight } = useTheme();

  return (
    <div className={props.className} style={props.style}>
      <Tooltip title="Diminuir negrito do texto" arrow>
        <IconButton aria-label='Diminuir negrito do texto' onClick={decreaseFontWeight}>
          <img style={{maxWidth:'min-content', fontSize:'1rem'}} src={iconBoldMinus} alt="Botão para diminuir negrito do texto" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Aumentar negrito do texto" arrow>
        <IconButton aria-label='Aumentar negrito do texto' onClick={increaseFontWeight}>
          <img style={{maxWidth:'min-content', fontSize:'1rem'}} src={iconBoldPlus}  alt="Botão para aumentar negrito do texto" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Alterar contraste da página" arrow>
        <IconButton aria-label='Alterar contraste da página' onClick={toggleTheme}>
          <img style={{maxWidth:'min-content', fontSize:'1rem'}} src={iconContrast}  alt="Botão para alterar contraste" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Diminuir tamanho do texto" arrow>
        <IconButton aria-label='Diminuir tamanho do texto' onClick={decreaseFontSize}>
          <img style={{maxWidth:'min-content', fontSize:'1rem'}} src={iconFontMinus}  alt="Botão para reduzir tamanho do texto" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Aumentar tamanho do texto" arrow>
        <IconButton aria-label='Aumentar tamanho do texto' onClick={increaseFontSize}>
          <img style={{maxWidth:'min-content', fontSize:'1rem'}} src={iconFontPlus}  alt="Botão para aumentar tamanho do texto" />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default AccessibilityButtons;
