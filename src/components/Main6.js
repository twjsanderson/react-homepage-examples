import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron } from 'react-bootstrap';
import mountains from '../assets/mountains.jpg';

class Main6 extends Component {
  render() {
    return (
        <Container fluid>
        <Row style={{ backgroundImage: `url(${mountains})`, height: 1000 }}>
            <Col className="align-self-end"> 
                <Jumbotron style={{ backgroundColor: 'transparent' }}>
                    <h1 className="display-2 text-primary pb-2">Hello, world!</h1>
                    <p className="lead text-primary">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p className="text-primary">It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <Row>
                        <a className="btn btn-primary btn-lg m-2" href="#" role="button">Learn more</a>
                        <a className="btn btn-primary btn-lg m-2" href="#" role="button">Contact us</a>
                    </Row>
                </Jumbotron>
            </Col>
        </Row>
        </Container>
    );
  }
}

export default Main6;
