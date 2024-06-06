import './MainHeader.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import useWindowSize from 'helpers/useWindowSize';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import  IconButton  from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccessibilityButtons from 'components/AccessibilityButtons/AccessibilityButtons';
import DrawerMenu from 'components/DrawerMenu/DrawerMenu';

function MainHeader(props) {
  const isLoggedIn = props.isLoggedIn ?? false;
  const user = props.user ?? '';
  const isInCreateAccountPage = props.isInCreateAccountPage ?? false;
  const isMobileSize = useWindowSize().width <= 1000;  
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1, letterSpacing:'.2rem' }}>
    <AppBar position="static" className="MainHeader">
      <Toolbar style={{flexDirection:'column'}}>
        {isMobileSize ?
        <>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              style={{width: '48px'}}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Logo />
            <div style={{width:'48px'}} />
          </div>
          <DrawerMenu isMobileSize={isMobileSize} open={open} onClose={toggleDrawer(false)} user={user} isLoggedIn={isLoggedIn} isInCreateAccountPage={isInCreateAccountPage} />
        </> :
        <>
          <div className='MainButtons' style={{width:'100%'}}>
            <div className='SideButtons'>
              {isLoggedIn &&
                <>
                  <div className='User'>
                    Olá, {user}!
                  </div>
                </>
              }
              {!isLoggedIn && 
                <>
                    {!isInCreateAccountPage &&
                      <Button variant="contained" style={{backgroundColor:'black', textTransform: 'none', width:'150px', marginRight: '40px', letterSpacing:'.1rem', fontSize:'16px'}}>Criar conta</Button>
                    }
                    <Button variant="outlined" style={{border:'solid 1px white', color:'white', textTransform: 'none',  width:'150px', letterSpacing:'.1rem', fontSize:'16px'}}>Entrar</Button>
                </>
              }
            </div>
            <Logo />
            <AccessibilityButtons className='SideButtons' style={{marginTop:'1rem'}} />
          </div>
          <Navigation isMobileSize={isMobileSize} />
        </>
        }
      </Toolbar>
    </AppBar>
  </Box>
  );
}

export default MainHeader;
