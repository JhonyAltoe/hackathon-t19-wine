import React from 'react';
import Container from 'react-bootstrap/Container';
import CardPlan from '../components/CardPlan';

function Homepage() {
  return (
    <Container>
      <CardPlan
        name="Plano Anual"
        price={99.9}
        priceWithDiscount={65.93}
        gift="2 taças de cristal"
        promotion="4 MESES OFF"
      />
    </Container>
  );
}

export default Homepage;
