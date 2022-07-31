import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import Ofertas from '../Ofertas';
import './style.scss';

export default function RedirectCard({ title, img, description, color, order }) {
  return (
    <Container className="flex-row-reverse" fluid="sm">
      <Row className="justify-content-center mt-2 mb-2">
        <Col sm={6} className="redirectCard" xs={{ order }}>
          {order === 'first' ? <img src={img} className="img-fluid" /> : <Ofertas />}
        </Col>
        <Col
          sm={6}
          className="d-flex flex-column justify-content-center align-items-center redirectCard-info"
          style={{ backgroundColor: color }}>
          <Card className="card" style={{ backgroundColor: color }}>
            <Card.Body>
              <Card.Title>
                <h4 className="text-center">{title}</h4>
              </Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

RedirectCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  link1: PropTypes.string,
  color: PropTypes.string,
  order: PropTypes.string
};
