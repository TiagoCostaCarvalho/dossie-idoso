import { Link } from "@mui/material";
import "components/Footer/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <footer className="footer-top">
      <ul>
        <li>
          <Link className="sobre" to="/" href="#" underline="always">
            {"Sobre"}
          </Link>
        </li>
        <li>
          <Link className="perguntas-frequentes" href="#" underline="always">
            {"Perguntas Frequentes"}
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link className="termos-uso" href="#" underline="always">
            {"Termos de uso"}
          </Link>
        </li>
        <li>
          <Link className="politica-privacidade" href="#" underline="always">
            {"Políticas de Privacidade"}
          </Link>
        </li>
      </ul>
      
      <span>
        <FacebookIcon />
        <WhatsAppIcon />
        <XIcon />
        <InstagramIcon />
      </span>

      <span className="footer-botton">
        &copy; 2024 DossiêIdoso, Todos direitos reservados
      </span>
    </footer>
  );
}
export default Footer;
