import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import './styles.scss';
import img1Intro from '../../assets/carousel-intro-1.jpeg';
import img4Intro from '../../assets/carousel-intro-4.jpeg';
import img5Intro from '../../assets/carousel-intro-5.jpeg';
import img2Intro from '../../assets/carousel-intro-2.jpeg';

const IntroCard = () => {
  return (
    <Container className="container-lg intro-card-wrapper .col-md-6">
      <Col className="text-wrapper">
        <div>
          <h1>Transformando o dia a dia em experiências únicas</h1>
          <p>
            Com o nosso clube, você recebe todo mês, 2 rótulos escolhidos a dedo das melhores
            vinícolas do mundo. Você pode optar por 6 clubes diferentes, e o melhor, todo mês você
            recebe no seu local de escolha.
          </p>
          <h4>Brinde à vida com Wine. </h4>
        </div>
      </Col>
      <Col className="col-md-6">
        <Carousel fade controls={false} indicators={false} interval={2500}>
          <Carousel.Item>
            <img className="d-block w-100 image-style" src={img2Intro} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 image-style" src={img5Intro} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 image-style" src={img1Intro} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 image-style" src={img4Intro} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Container>
  );
};

export default IntroCard;
