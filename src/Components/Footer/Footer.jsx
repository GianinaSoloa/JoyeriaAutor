import "../Footer/footer.css";
import { Link } from "react-router-dom";
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <footer>
            <div className="footer__contact">
                <a href="mailto:comodecirtelojoyas@gmail.com" target="_blank" rel="noreferrer"><MailIcon className="icon__contact"/></a>
                <p>comodecirtelojoyas@gmail.com</p>
            </div>
            <div className="footer__contact">
                <a href="https://api.whatsapp.com/send?phone=0123456789&text=Hola, Nececito mas informacion sobre" target="_blank" rel="noreferrer"><PhoneIcon className="icon__contact"/></a>
                <p>221.613.0884</p>
            </div>
            <div className="footer__contact">
                <div className="social__media">
                    <a href="https://www.instagram.com/comodecirtelojoyas/" target="_blank" rel="noreferrer"><InstagramIcon className="icon__contact"/></a>
                    <a href="https://www.instagram.com/comodecirtelojoyas/" target="_blank" rel="noreferrer"><FacebookIcon className="icon__contact"/></a>
                </div>
                <p>@comodecirtelojoyas</p>
            </div>
        </footer>
);
}

export default Footer