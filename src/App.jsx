import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/modal';
import Video from './components/video';
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
      </Container>
    </>
  );
}

export default App;
