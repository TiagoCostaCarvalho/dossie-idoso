import './MainHeader.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Image } from '@mui/icons-material';
import useWindowSize from 'helpers/useWindowSize';
import Logo from 'components/Logo/Logo';
import AccessibilityButtons from 'components/AccessibilityButtons/AccessibilityButtons';
import Navigation from 'components/Navigation/Navigation';

function MainHeader(props) {
  
  const isMobileSize = useWindowSize().width <= 600;  

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" className="MainHeader">
      <Toolbar>
        {!isMobileSize && 
        <>
          <div className='MainButtons'>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Logo />
            <AccessibilityButtons />
          </div>
          <Navigation />
        </>
        }
      </Toolbar>
    </AppBar>
  </Box>
  );
}

export default MainHeader;
