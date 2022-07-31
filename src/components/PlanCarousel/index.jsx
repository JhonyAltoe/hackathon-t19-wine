import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import ItemOfCarousel from './ItemOfCarousel';

function PlanCarousel({ modalities }) {
  return (
    <Carousel>
      {modalities.map((mod) => {
        <ItemOfCarousel name={mod.name} description={mod.description} plans={mod.plans} />;
      })}
    </Carousel>
  );
}

PlanCarousel.propTypes = {
  modalities: PropTypes.arrayOf(PropTypes.object)
};

export default PlanCarousel;
