import './Navigation.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';

function Navigation(props) {
  const isMobileSize = props.isMobileSize;
  const isLoggedIn = props.isLoggedIn;
  const handleLogout = props.handleLogout;

  return (
    <div className={isMobileSize ? 'NavigationMobile' : isLoggedIn ? 'LoggedNavigationDesktop' : 'NavigationDesktop'}>
      <div className={isMobileSize ? 'MenuAnchorMobile' : 'MenuAnchor'}>
        <a href="/"
            rel="noopener noreferrer">
          Home
          {isMobileSize && <ArrowForwardIosIcon />}
        </a>
      </div>
      <div className={isMobileSize ? 'MenuAnchorMobile' : 'MenuAnchor'}>
        <a href="/"
            rel="noopener noreferrer">
          Saúde
          {isMobileSize && <ArrowForwardIosIcon />}
        </a>
      </div>
      <div className={isMobileSize ? 'MenuAnchorMobile' : 'MenuAnchor'}>
        <a href="/"
            rel="noopener noreferrer">
          Lazer
          {isMobileSize && <ArrowForwardIosIcon />}
        </a>
      </div>
      <div className={isMobileSize ? 'MenuAnchorMobile' : 'MenuAnchor'}>
        <a href="/"
            rel="noopener noreferrer">
          Economia
          {isMobileSize && <ArrowForwardIosIcon />}
        </a>
      </div>
      <div className={isMobileSize ? 'MenuAnchorMobile' : 'MenuAnchor'}>
        <a href="/"
            rel="noopener noreferrer">
          Sobre
         {isMobileSize && <ArrowForwardIosIcon />}
        </a>
      </div>
      <div className={isMobileSize ? 'MenuAnchorMobile' : 'MenuAnchor'}>
        <a href="/"
            rel="noopener noreferrer">
          Ajuda
         {isMobileSize && <ArrowForwardIosIcon />}
        </a>
      </div>
      {isLoggedIn &&
        <div className='LogoutButtonContainer'>
          <Button onClick={(e) => {props.handleLogout()}} variant="outlined" style={{border:'solid 1px white', color:'white', textTransform: 'none',  width:'300px', padding:'0.5rem 0', letterSpacing:'.1rem', fontSize:'16px', fontWeight:'bold'}}>Sair da minha conta</Button>
        </div>
      }
    </div>
  );
}

export default Navigation;
