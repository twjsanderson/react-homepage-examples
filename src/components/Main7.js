import React, { Fragment } from 'react';
import Nav1 from './NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import mountains from '../assets/mountains.jpg';


const Main7 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container fluid style={{ backgroundImage: `url(${mountains})`, backgroundPosition: "center", backgroundSize: "cover", height: 1000 }}> 
        <Row className="h-100 justify-content-end align-items-center">
            <Col md={5} className="text-center h-75 bg-dark m-3 p-3 border border-dark">
                <Container className="h-100 bg-light">
                    <h1 className="p-2">Title</h1>
                    <h3 className="p-2">
                        Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                        tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                        eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                        scelerisque purus semper eget duisd<br/>
                        <br/>
                        Nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam 
                        ultrices sagittis orci a scelerisque purus semper eget duis<br/>
                        <br/>
                        Enim tortor at auctor urna nunc id cursus metus aliquam 
                        eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                        scelerisque purus semper eget duisd
                    </h3>
                    <a className="btn btn-primary btn-lg p-2" href="#" role="button">Learn more</a>
                </Container>
            </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Main7;