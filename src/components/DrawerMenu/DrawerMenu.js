import './DrawerMenu.css';
import { Drawer } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Logo from 'components/Logo/Logo';
import AccessibilityButtons from 'components/AccessibilityButtons/AccessibilityButtons';
import Button from '@mui/material/Button';
import Navigation from 'components/Navigation/Navigation';
import { useNavigate } from "react-router-dom";

function DrawerMenu(props) {
  const isLoggedIn = props.isLoggedIn ?? false;
  const user = props.user ?? '';
  const isInCreateAccountPage = props.isInCreateAccountPage ?? false;
  const isMobileSize = props.isMobileSize;

  const navigate = useNavigate();

  return (
    <Drawer open={props.open} onClose={props.onClose}>
      <div className='Drawer'>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="close drawer"
              sx={{ mr: 2 }}
              style={{width: '48px'}}
              onClick={props.onClose}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Logo />
          <div style={{width:'48px'}} />
        </div>
        <AccessibilityButtons className='SideButtons' style={{marginTop:'1rem'}} />
        {isLoggedIn ?
          <>
          <div className='User'>
            Olá, {user}!
          </div>
          <Button onClick={(e) => {props.handleLogout()}} variant="outlined" style={{border:'solid 1px white', color:'white', textTransform: 'none',  width:'300px', marginTop:'2rem', padding:'0.5rem 0', letterSpacing:'.1rem', fontSize:'1rem', fontWeight:'bold'}}>Sair da minha conta</Button>
        </>
        :
        <>
          {!isInCreateAccountPage &&
            <Button onClick={(e) => {navigate("/signup")}} variant="contained" style={{backgroundColor:'black', textTransform: 'none',  width:'300px', marginTop:'2rem', padding:'0.5rem 0', letterSpacing:'.1rem', fontSize:'1rem', fontWeight:'bold'}}>Criar conta</Button>
          }
          <Button onClick={(e) => {navigate("/login")}} variant="outlined" style={{border:'solid 1px white', color:'white', textTransform: 'none',  width:'300px', marginTop:'2rem', padding:'0.5rem 0',  letterSpacing:'.1rem', fontSize:'1rem', fontWeight:'bold'}}>Entrar</Button>
        </>
        }
        <Navigation isMobileSize={isMobileSize} />
      </div>
    </Drawer>
  );
}

export default DrawerMenu;
