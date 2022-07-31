import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getModalities } from '../../redux/features/globalActions/getModalities';
import { getProductsWine } from '../../redux/features/globalActions/getProductsWine';
import Modal from '../../components/modal';
import Video from '../../components/video';
import Header from '../../components/Header';
import SecPlan from '../../components/SecPlan';
import RedirectCard from '../../components/redirectCard';
import PalateTest from '../../components/PalateTest';
import allCards from '../../utils/allCards';
import IntroCard from '../../components/IntroCard';
import Footer from '../../components/footer';

function Homepage() {
  const [modalShow, setModalShow] = useState(true);
  const { items, modalities } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsWine());
    dispatch(getModalities());
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
            <IntroCard />
            {items.length > 0 && modalities.length > 0 && (
              <SecPlan items={items} modalities={modalities} />
            )}
            <PalateTest />
            {allCards.map((e) => (
              <RedirectCard {...e} key={e.title} />
            ))}
          </Container>
          <Footer />
        </>
      )}
    </>
  );
}

export default Homepage;
