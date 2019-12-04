import React, { Fragment } from 'react';
import Nav1 from './NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import mountains from '../assets/mountains.jpg';
import mountains2 from '../assets/mountains2.jpg';
import animal1 from '../assets/animal1.jpg';
import animal2 from '../assets/animal2.jpg';
import animal3 from '../assets/animal3.jpg';


const Main7 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container fluid style={{ backgroundImage: `url(${mountains})`, backgroundPosition: "center", backgroundSize: "cover", height: 1000 }}> 
        <Row className="h-100 justify-content-center align-items-center">
            <Col md={4}>
                <h1 className="text-center">Title</h1>
                <p className="text-center text-warning">
                    Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                    eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                    scelerisque purus semper eget duis
                </p>
                <p className="text-center text-warning">
                    Nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam 
                    ultrices sagittis orci a scelerisque purus semper eget duis
                </p>
                <Row className="justify-content-center">
                    <a className="btn btn-primary btn-lg m-3" href="#" role="button">Learn more</a>
                    <a className="btn btn-primary btn-lg m-3" href="#" role="button">Learn more</a>
                </Row>
            </Col>
        </Row>
      </Container>
      <Container fluid style={{ backgroundImage: `url(${mountains2})`, backgroundPosition: "center", backgroundSize: "cover", height: 1000 }}> 
        <Row className="h-100 justify-content-center align-items-center">
          <Col md={5}>
            <Carousel autoPlay infiniteLoop className="pt-3">
                <div>
                    <img src={animal1} alt="animal1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={animal2} alt="animal2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={animal3} alt="animal3" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Main7;