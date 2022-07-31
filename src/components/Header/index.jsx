import './styles.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import hamburguerIcon from '../../assets/icons/hamburguer.png';
import { Nav } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <div className="logo">
        <img alt="Wine" src="https://img.wine.com.br/logo/wine/black/wine.svg" />
      </div>
      <DropdownButton
        align="end"
        title={<img src={hamburguerIcon} alt="menu hamburguer" />}
        id="header-menu-hamburger">
        <Dropdown.Item eventKey="1">Perfil</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2">Clube</Dropdown.Item>
        <Dropdown.Item eventKey="3">Loja</Dropdown.Item>
        <Dropdown.Item eventKey="4">Ofertas</Dropdown.Item>
        <Dropdown.Item eventKey="5">Cupons</Dropdown.Item>
      </DropdownButton>
      <nav className="header-navbar">
        <Nav.Item>
          <Nav.Link eventKey="#">Clube</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#">Loja</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#">Ofertas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#">Cupons</Nav.Link>
        </Nav.Item>
      </nav>
      <div className="header-icon-profile">
        <FaUser className="perfil-icon" />
        Perfil
      </div>
    </header>
  );
}

export default Header;
