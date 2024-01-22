import logo from '../../assets/images/logo_h.png';
import { Link } from 'react-router-dom';
 // Importe le fichier de style SCSS
const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="Logo KASA" />
            <nav>
                <Link href="/">Accueil</Link>
                <Link href="/About">A Propos</Link>
            </nav>
        </header>
    );
};

export default Header;