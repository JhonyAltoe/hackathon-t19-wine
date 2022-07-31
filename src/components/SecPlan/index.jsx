import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import SwipperCarousel from '../SwipperCarousel';
import './style.scss';

function SecPlan({ modalities }) {
  return (
    <Container className="container-planos border rounded rounded-2 justify-content-center bg-light ">
      <SwipperCarousel modalities={modalities} />
    </Container>
  );
}

SecPlan.propTypes = {
  items: PropTypes.array,
  modalities: PropTypes.arrayOf(PropTypes.object)
};

export default SecPlan;
