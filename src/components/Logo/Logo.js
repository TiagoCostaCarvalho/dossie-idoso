import './Logo.css';
import logo from 'assets/logo.png';

function Logo(props) {
  const imageSize = props.imageSize ?? 200;
  return (
    <div style={props.style} >
      <a    className="App-link"
            href="/"
            rel="noopener noreferrer">
        <img src={logo} className="App-logo" alt="logo" width={imageSize} />
      </a>
    </div>
  );
}

export default Logo;
