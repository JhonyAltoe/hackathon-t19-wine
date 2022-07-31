import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getModalities } from '../../redux/features/globalActions/getModalities';
import { getProductsWine } from '../../redux/features/globalActions/getProductsWine';
import Modal from '../../components/modal';
import Video from '../../components/video';
import Header from '../../components/Header';
import CardPlan from '../../components/CardPlan';
import SecPlan from '../../components/SecPlan';
import RedirectCard from '../../components/redirectCard';
import allCards from '../../utils/allCards';

function Homepage() {
  const [modalShow, setModalShow] = useState(false);
  const { items, modalities } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  // console.log(items);
  // console.log(loading);
  // console.log(modalities);
  useEffect(() => {
    dispatch(getProductsWine());
    dispatch(getModalities());
    setModalShow(true);
  }, []);
  return (
    <>
      {modalShow ? (
        <>
          <Modal show={modalShow} onHide={() => setModalShow(false)} />
          <Video isHidden={modalShow} />
        </>
      ) : (
        <>
          <div className="header-container" hidden={modalShow}>
            <Header />
          </div>
          <Container>
            <Container></Container>

            {items.length > 0 && modalities.length > 0 && (
              <SecPlan items={items} modalities={modalities} />
            )}
            <CardPlan
              name="Plano Anual"
              price={99.9}
              priceWithDiscount={65.93}
              gift="2 taças de cristal"
              promotion="4 MESES OFF"
            />
            {allCards.map((e) => (
              <RedirectCard {...e} key={e.title} />
            ))}
          </Container>
        </>
      )}
    </>
  );
}

export default Homepage;
