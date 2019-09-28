import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron, Carousel } from 'react-bootstrap';
import mountains from '../assets/mountains.jpg';
import animal1 from '../assets/animal1.jpg';
import animal2 from '../assets/animal2.jpg';
import animal3 from '../assets/animal3.jpg';

// TODO: fix background to stretch and not repeat, confine carousel slider image size

class Main7 extends Component {
  render() {
    return (
        <Jumbotron className="vertical-center no-repeat" style={{ backgroundImage: `url(${mountains})`, height: 1800 }}>
            <Container fluid className="text-center align-items-center" style={{ backgroundColor: 'transparent', width: '75%' }}>
                <h2 className="text-primary">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</h2>
                <h4 className="text-primary p-2">It uses utility classes for typography and spacing to space content out within the larger container.</h4>
                <Row>
                    <Col className="align-self-center">
                        <a className="btn btn-primary btn-lg m-2" href="#" style={{ width: '25%' }} role="button">Learn more</a>
                        <a className="btn btn-primary btn-lg m-2" href="#" style={{ width: '25%' }} role="button">Contact us</a>
                    </Col>
                </Row>
                <Row className="p-4">
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={animal1}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={animal2}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 h-100"
                                src={animal3}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
  }
}

export default Main7;
