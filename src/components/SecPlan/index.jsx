import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import PlanCarousel from '../PlanCarousel';

function SecPlan({ items, modalities }) {
  const image = items[Math.floor(Math.random() * items.length)].image;
  return (
    // <div className="row">
    <div className="border border-dark rounded rounded-2 d-flex">
      <div className="w-50 d-flex flex-column align-items-center text-center">
        <h3 className="mt-1">Nossos Planos</h3>
        <div className="h-75">
          <img className="img-fluid" src={image} alt="wine image" />
        </div>
        <div className="mb-1">
          <Button>Saiba mais sobre o Clube Wine</Button>
        </div>
      </div>
      {/* <div>{modalities[0].name}</div> */}
      <div className="flex-grow-1 ">
        <PlanCarousel modalities={modalities} />
      </div>
    </div>
  );
}

SecPlan.propTypes = {
  items: PropTypes.array,
  modalities: PropTypes.arrayOf(PropTypes.object)
};

export default SecPlan;
