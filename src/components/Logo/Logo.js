import './Logo.css';
import logo from 'assets/logo.png';

function Logo() {
  return (
    <div >
      <a    className="App-link"
            href="/"
            rel="noopener noreferrer">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
    </div>
  );
}

export default Logo;
