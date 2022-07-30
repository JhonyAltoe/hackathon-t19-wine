import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/modal/modal';
import Container from './components/modal/Container';
import React, { useState, useEffect } from 'react';

function App() {
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    setModalShow(true);
  }, []);

  return (
    <Container>
      <Modal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}

export default App;
