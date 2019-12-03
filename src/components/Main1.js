import React , { Fragment } from 'react';
import Nav1 from './NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import mountains from '../assets/mountains.jpg';

// 2 rows sharing whole container 50/50 Col md={4} controls width of content

const Main1 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container fluid style={{ backgroundImage: `url(${mountains})`, height: 1000 }}> 
        <Row className="h-50 justify-content-center align-items-center">
          <Col md={4} className="text-center">
            <h1>Main Title</h1>
          </Col>
        </Row>
        <Row className="h-50 justify-content-center align-items-center">
          <Col md={4} className="text-center">
            <p className="text-warning">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Main1;
