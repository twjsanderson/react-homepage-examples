import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import mountains from '../assets/mountains.jpg';
import mountains2 from '../assets/mountains2.jpg';

class Main5 extends Component {
  render() {
    return (
        <Container fluid className="p-0" style={{ backgroundImage: `url(${mountains})`, height: 800 }}>
            <Row className="text-center" style={{ height: 300}}>
                <Col className="align-self-center">
                    <h1 className="mt-5 display-1">Main Title</h1>
                    <p className="mt-5 lead">Making stuff with other stuff</p>
                </Col>
            </Row>
            <Container fluid stretch className="p-0" style={{ marginTop: 500, backgroundImage: `url(${mountains2})`, height: 800, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <Row className="ml-5">
                    <Col className="mt-5">
                        <h1 className="display-4">New Row Unit</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <a className="btn btn-primary btn-lg" href="#" role="button">Another Button</a>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
  }
}

export default Main5;
