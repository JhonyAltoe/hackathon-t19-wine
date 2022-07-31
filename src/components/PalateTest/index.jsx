import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import wineShelf from '../../assets/vine-shelf.jpeg';
import './style.scss';

const PalateTest = () => {
  return (
    <Container className="palat-test-wrapper">
      <Row>
        <Col style={{ padding: 0 }}>
          <img src={wineShelf} className="image-style" />
        </Col>
        <Col className="wine-palate-description">
          <h4>Não sabe qual vinho escolher?</h4>
          <Button
            as="a"
            href="https://www.wine.com.br/winebox-do-seu-jeito/teste-de-paladar/?fromsite#"
            className="custom-btn">
            Teste seu paladar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PalateTest;
