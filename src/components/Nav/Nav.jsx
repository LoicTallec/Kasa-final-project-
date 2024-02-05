import logo from '../../assets/images/logo_h.png';
import { NavLink } from 'react-router-dom';
import './nav.css';

function Nav() {
  return (
    <nav className='header'>
      <img src={logo} alt="Logo KASA" />
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" className='aboutlink'>À Propos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
