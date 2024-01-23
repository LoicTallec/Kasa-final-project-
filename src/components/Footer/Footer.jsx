
import logo from '../../assets/images/logo_f.png'; // Importe l'image de logo
import styles from './footer.css'; // Importe le fichier de style CSS

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Logo KASA"/>
            <h4> © 2020 Kasa. All rights reserved</h4>
        </footer>
    );
};

export default Footer;