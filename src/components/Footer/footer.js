import { Link } from "@mui/material";
import "components/Footer/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import useWindowSize from 'helpers/useWindowSize';

function Footer() {
  const isMobileSize = useWindowSize().width <= 1000;  

  return (
    <footer className="FooterLinks">
      <div className={isMobileSize ? 'FooterTopMobile' : 'FooterTop'}>
        <div className={isMobileSize ? 'SupportPagesMobile' : 'SupportPages'}>
          <ul>
            <li>
              <Link to="/" href="#" underline="always">
                {"Sobre"}
              </Link>
            </li>
            <li style={{marginTop: '1rem'}}>
              <Link href="#" underline="always">
                {"Perguntas Frequentes"}
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link href="#" underline="always">
                {"Termos de uso"}
              </Link>
            </li>
            <li style={{marginTop: '1rem'}}>
              <Link href="#" underline="always">
                {"Políticas de Privacidade"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="SocialMedia">
          <FacebookIcon />
          <WhatsAppIcon />
          <XIcon />
          <InstagramIcon />
        </div>
      </div>
      <div className="FooterBottom">
        <p>
          &copy; 2024 DossiêIdoso, {isMobileSize && <br />} <strong>Todos direitos reservados</strong>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
