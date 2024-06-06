import './Navigation.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Navigation(props) {
  const isMobileSize = props.isMobileSize;

  return (
    <div className={isMobileSize ? 'NavigationMobile' : 'NavigationDesktop'}>
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
    </div>
  );
}

export default Navigation;
