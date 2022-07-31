import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/modal';
import Video from './components/video';
import RedirectCard from './components/redirectCard';
import allCards from './utils/allCards';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';

function App() {
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    setModalShow(true);
  }, []);

  return (
    <>
      <div className="header-container" hidden={modalShow}>
        <Header />
      </div>
      <Video isHidden={modalShow} />
      <Container>
        <Modal show={modalShow} onHide={() => setModalShow(false)} />
        {allCards.map((e) => (
          <RedirectCard {...e} key={e.title} />
        ))}
      </Container>
    </>
  );
}

export default App;
