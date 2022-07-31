import './style.scss';

import { Nav } from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <div className="logo">
        <img alt="Wine" src="https://img.wine.com.br/logo/wine/black/wine.svg" />
      </div>
      <nav className="footer-navbar">
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
    </footer>
  );
}

export default Footer;
