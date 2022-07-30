import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FiGift } from 'react-icons/fi';

function CardPlan({ name, price, priceWithDiscount, gift, promotion }) {
  console.log(name);
  const type = name.includes('Anual') ? 'Anual' : 'Mensal';
  <style type="text/css">
    {`
      .small-text {
      color: red;
      }`}
  </style>;
  return (
    <Card style={{ width: '14rem' }}>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{name}</Card.Title>
          <span className="text-center">{promotion}</span>
          {/* <DiscountTag discount={discount} /> */}
        </div>
        <Card.Text className="d-flex flex-column align-items-center text-center">
          <p className="fs-6 mb-0 mt-2">{`R$ ${price.toFixed(2)} por`}</p>
          <p className="fs-6 m-0">
            {'R$ '}
            <span className="fs-3">{`${priceWithDiscount.toFixed(2)}`}</span>
            {'/mês'}
          </p>
          <p style={{ fontSize: '0.7rem' }} className="x-small m-0 fs-sm">
            {`Economia de R$ ${((price - priceWithDiscount) * 12).toFixed(2)} em 12 meses`}
          </p>
        </Card.Text>
        <div className="d-flex flex-column align-items-center">
          <span className="border p-1 mb-2 rounded-2">
            <FiGift />
            {` ${gift}`}
          </span>
          <Button>{`Assine ${type}!`}</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

CardPlan.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  priceWithDiscount: PropTypes.number,
  gift: PropTypes.string,
  promotion: PropTypes.string
};

export default CardPlan;
