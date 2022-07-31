import Carousel from 'react-bootstrap/Carousel';
import CardPlan from '../CardPlan';
import PropTypes from 'prop-types';

function ItemOfCarousel({ name, description, plans }) {
  console.log(name);
  return (
    <Carousel.Item>
      <div className="d-flex flex-column align-items-center">
        <div>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div>
        {plans.map((plan) => {
          <CardPlan
            name={plan.name}
            price={plan.price}
            priceWithDiscount={plan.priceWithDiscount}
            gift={plan.gift}
            promotion={plan.promotion}
          />;
        })}
      </div>
    </Carousel.Item>
  );
}

ItemOfCarousel.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  plans: PropTypes.arrayOf(PropTypes.object)
};

export default ItemOfCarousel;
