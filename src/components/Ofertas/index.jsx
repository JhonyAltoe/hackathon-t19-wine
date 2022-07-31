import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import './style.scss';

export default function ofertas() {
  const { items } = useSelector((state) => state.global);
  const winesForCarrousel = items.filter(({ id }) => id <= 2);

  return (
    <>
      {winesForCarrousel.length > 0 && (
        <Carousel className="bg-carousel-oferta" interval={3000}>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center item-ofertas">
              <img
                src={winesForCarrousel[0].image}
                style={{ width: '8rem' }}
                alt="image of ofert"
              />
              <div>
                <p>{winesForCarrousel[0].name}</p>
                <div>
                  <p>{`Preço: R$ ${winesForCarrousel[0].price.toFixed(2)}`}</p>
                  <span>{`Preço assinantes Wine: R$ ${winesForCarrousel[0].priceMember.toFixed(
                    2
                  )} `}</span>
                  <span className="discount">{`(${winesForCarrousel[0].discount}% Off)`}</span>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center item-ofertas">
              <img
                src={winesForCarrousel[1].image}
                style={{ width: '8rem' }}
                alt="image of ofert"
              />
              <div>
                <p>{winesForCarrousel[1].name}</p>
                <div>
                  <p>{`Preço: R$ ${winesForCarrousel[1].price.toFixed(2)}`}</p>
                  <span>{`Preço assinantes Wine: R$ ${winesForCarrousel[1].priceMember.toFixed(
                    2
                  )} `}</span>
                  <span className="discount">{`(${winesForCarrousel[1].discount}% Off)`}</span>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center item-ofertas">
              <img
                src={winesForCarrousel[2].image}
                style={{ width: '8rem' }}
                alt="image of ofert"
              />
              <div>
                <p>{winesForCarrousel[2].name}</p>
                <div>
                  <p>{`Preço: R$ ${winesForCarrousel[2].price.toFixed(2)}`}</p>
                  <span>{`Preço assinantes Wine: R$ ${winesForCarrousel[2].priceMember.toFixed(
                    2
                  )} `}</span>
                  <span className="discount">{`(${winesForCarrousel[2].discount}% Off)`}</span>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
}
