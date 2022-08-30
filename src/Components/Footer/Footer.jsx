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
                <a href="https://api.whatsapp.com/send?phone=+5492216130884&text=Hola!%20Ingres%C3%A9%20a%20la%20web%20de%20C%C3%B3mo%20Dec%C3%ADrtelo%20Joyas,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre" target="_blank" rel="noreferrer"><PhoneIcon className="icon__contact"/></a>
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