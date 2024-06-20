import './Logo.css';
import logo from 'assets/logo.png';

function Logo(props) {
  const imageSize = props.imageSize ?? 200;
  return (
    <div style={props.style} >
      <a    className="App-link"
            href="/"
            rel="noopener noreferrer"
            aria-label='ir para Homepage' >
        <img style={{maxWidth:'min-content', fontSize:'1rem'}} src={logo} className="App-logo" alt="círculo com um rosto sorrindo, à direita escrito Dossiê Idoso, tudo em branco" width={imageSize} />
      </a>
    </div>
  );
}

export default Logo;
