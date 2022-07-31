import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
// import ItemOfCarousel from './ItemOfCarousel';
import CardPlan from '../CardPlan';
import { Card } from 'react-bootstrap';

// const testCard = (mod) => (
//   <Card style={{ width: '10rem' }} className="mt-3">
//     <Card.Img
//       className="d-block w-100"
//       src="https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/24168-01.png"
//     />
//     <Card.Body>
//       <div className="d-block w-100">
//         <div className="d-flex flex-column align-items-center">
//           <div>
//             <h4>{mod.name}</h4>
//             <p>{mod.description}</p>
//           </div>
//         </div>
//         <div>
//           {mod.plans.map((plan) => {
//             <CardPlan
//               name={plan.name}
//               price={plan.price}
//               priceWithDiscount={plan.priceWithDiscount}
//               gift={plan.gift}
//               promotion={plan.promotion}
//             />;
//           })}
//         </div>
//       </div>
//     </Card.Body>
//   </Card>
// );

function PlanCarousel({ modalities }) {
  console.log(modalities);
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.w3schools.com/bootstrap/la.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="https://site.groupe-psa.com/content/uploads/sites/9/2016/12/white-background-2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.w3schools.com/bootstrap/la.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // <Carousel>
    //   {/* {modalities.map((mod) => {
    //     <ItemOfCarousel name={mod.name} description={mod.description} plans={mod.plans} />;
    //   })} */}
    //   {/* {modalities.map((mod) => {
    //     <Carousel.Item>

    //       <Card style={{ width: '10rem' }} className="mt-3">
    //         <Card.Img
    //           className="d-block w-100"
    //           src="https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/24168-01.png"
    //         />
    //         <Card.Body>
    //           {console.log(mod.description)}
    //           <div className="d-block w-100">
    //             <div className="d-flex flex-column align-items-center">
    //               <div>
    //                 <h4>{mod.name}</h4>
    //                 <p>{mod.description}</p>
    //               </div>
    //             </div>
    //             <div>
    //               {mod.plans.map((plan) => {
    //                 <CardPlan
    //                   name={plan.name}
    //                   price={plan.price}
    //                   priceWithDiscount={plan.priceWithDiscount}
    //                   gift={plan.gift}
    //                   promotion={plan.promotion}
    //                 />;
    //               })}
    //             </div>
    //           </div>
    //         </Card.Body>
    //       </Card>
    //     </Carousel.Item>;
    //   })} */}
    //   <Carousel.Item className="flex-grow-2">
    //     <img
    //       className="d-block w-100"
    //       src="https://www.w3schools.com/colors/colors_picker.asp"
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://site.groupe-psa.com/brasil/pt-br/homepage/white-background-2/"
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  );
}

PlanCarousel.propTypes = {
  modalities: PropTypes.arrayOf(PropTypes.object)
};

export default PlanCarousel;
