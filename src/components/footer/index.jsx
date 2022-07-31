import './style.scss';
import Container from 'react-bootstrap/Container';

import { Nav } from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <Container className="d-flex align-items-center">
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
      </Container>
    </footer>
  );
}

export default Footer;
