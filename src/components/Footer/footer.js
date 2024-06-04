import { Link } from "@mui/material";
import "components/Footer/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        
                <Link>Sobre</Link>
            
                <Link>Termos de uso</Link>
          
                <Link>Perguntas Frequentes</Link>
           
                <Link>Políticas de Privacidade</Link>
          
        </div>
        <div className="footer">
         <span>Todos direitos reservados</span> &copy; 2024
        </div>
    </footer>
  );
}
export default Footer;
