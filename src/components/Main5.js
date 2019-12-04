import React, { Fragment } from 'react';
import Nav1 from './NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import mountains from '../assets/mountains.jpg';
import mountains2 from '../assets/mountains2.jpg';

// added second Container with similar properties played with the height % and the new background image to make it fit

const Main5 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container fluid style={{ backgroundImage: `url(${mountains})`, height: 750 }}> 
        <Row className="h-100 justify-content-center align-items-center">
          <Col md={4} className="text-center">
            <h1>Main Title</h1>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ backgroundImage: `url(${mountains2})`, backgroundPosition: "center", backgroundSize: "cover", height: 500 }}> 
        <Row className="h-75 justify-content-center align-items-center">
          <Col md={4}>
            <h2 className="text-center">Subtitle</h2>
            <p>
                Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                scelerisque purus semper eget duis
            </p>
            <p>
                Nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam 
                ultrices sagittis orci a scelerisque purus semper eget duis
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Main5;

