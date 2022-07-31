import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import CardPlan from '../components/CardPlan';
import { getModalities } from '../redux/features/globalActions/getModalities';
import { getProductsWine } from '../redux/features/globalActions/getProductsWine';

function Homepage() {
  const { items, loading, modalities } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  console.log(items);
  console.log(loading);
  console.log(modalities);
  useEffect(() => {
    dispatch(getProductsWine());
    dispatch(getModalities());
  }, []);
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
