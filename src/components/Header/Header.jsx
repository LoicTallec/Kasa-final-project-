import logo from '../../assets/images/logo_h.png';
import { NavLink } from 'react-router-dom';
import style from './header.css';

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="Logo KASA" />
            <nav>
                <NavLink to="/" activeClassName="active">Accueil</NavLink>
                <NavLink to="/about" activeClassName="active" className='aboutlink'>À Propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;