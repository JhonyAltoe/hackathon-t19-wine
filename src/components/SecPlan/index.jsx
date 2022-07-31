import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Container } from 'react-bootstrap';
// import PlanCarousel from '../PlanCarousel';
import SwipperCarousel from '../SwipperCarousel';
import './style.scss';

function SecPlan({ items, modalities }) {
  const image = items[Math.floor(Math.random() * items.length)].image;
  return (
    // <div className="row">
    <Container className="container-planos border rounded rounded-2 justify-content-center bg-light ">
      {/* <Row className="justify-content-around"> */}
      <Col lg={2} className="flex-planos text-center">
        <div>
          <h3 className="mt-1">Nossos Planos</h3>
          <div className="mb-1 hide-on-big">
            <Button>Saiba mais sobre o Clube Wine</Button>
          </div>
        </div>
        <div>
          <img className="img-fluid" src={image} alt="wine image" />
        </div>
        <div className="mb-1 hide-desktop">
          <Button>Saiba mais sobre o Clube Wine</Button>
        </div>
      </Col>
      {/* <div>{modalities[0].name}</div> */}
      <Col sm={10} className="">
        {/* <div className="flex-shrink-1"> */}
        {/* <PlanCarousel modalities={modalities} /> */}
        <SwipperCarousel modalities={modalities} />
      </Col>
      {/* </Row> */}
    </Container>
  );
}

{
  /* <Container className="flex-row-reverse" fluid="sm" as="a" href={link1} target="_blank">
  <Row className="justify-content-center">
    <Col sm={6} className="redirectCard" xs={{ order }}>
      {order === 'first' ? <img src={img} className="img-fluid" /> : 'ola'}
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
          <Card.Text>
            <p>{description}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>; */
}

SecPlan.propTypes = {
  items: PropTypes.array,
  modalities: PropTypes.arrayOf(PropTypes.object)
};

export default SecPlan;
