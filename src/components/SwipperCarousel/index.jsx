import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import CardPlan from '../CardPlan';

function SwipperCarousel({ modalities }) {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="w-100 ">
      <SwiperSlide className="p-4 d-flex h-100 justify-content-center bg-light">
        <div>
          <div className="d-flex flex-column align-items-center text-center">
            <div>
              <h4>{modalities[0].name}</h4>
              <p>{modalities[0].description}</p>
            </div>
          </div>
          <div className="d-flex align-items-center flex-row justify-content-between ">
            <CardPlan
              name={modalities[0].plans[0].name}
              price={modalities[0].plans[0].price}
              priceWithDiscount={modalities[0].plans[0].priceWithDiscount}
              gift={modalities[0].plans[0].gift}
              promotion={modalities[0].plans[0].promotion}
            />
            <CardPlan
              name={modalities[0].plans[1].name}
              price={modalities[0].plans[1].price}
              priceWithDiscount={modalities[0].plans[1].priceWithDiscount}
              gift={modalities[0].plans[1].gift}
              promotion={modalities[0].plans[1].promotion}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="p-4 d-flex h-100 justify-content-center bg-light">
        <div>
          <div className="d-flex flex-column align-items-center text-center">
            <div>
              <h4>{modalities[0].name}</h4>
              <p>{modalities[0].description}</p>
            </div>
          </div>
          <div className="d-flex align-items-center flex-row justify-content-between ">
            <CardPlan
              name={modalities[0].plans[0].name}
              price={modalities[0].plans[0].price}
              priceWithDiscount={modalities[0].plans[0].priceWithDiscount}
              gift={modalities[0].plans[0].gift}
              promotion={modalities[0].plans[0].promotion}
            />
            <CardPlan
              name={modalities[0].plans[1].name}
              price={modalities[0].plans[1].price}
              priceWithDiscount={modalities[0].plans[1].priceWithDiscount}
              gift={modalities[0].plans[1].gift}
              promotion={modalities[0].plans[1].promotion}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

SwipperCarousel.propTypes = {
  modalities: PropTypes.arrayOf(PropTypes.object)
};

export default SwipperCarousel;
