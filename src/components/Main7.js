import React, { Component } from 'react';
import { Row, Col, Container, Image, Carousel, Button } from 'react-bootstrap';
import animal1 from '../assets/animal1.jpg';
import animal2 from '../assets/animal2.jpg';
import animal3 from '../assets/animal3.jpg';

class Main7 extends Component {
  render() {
    return (
        <section className="py-5 home">
            <Container fluid>
                <Row className="m-2">
                    <Col>
                        <h1>Main Title</h1>
                        <h5>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</h5>
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col sm>
                            <Button className="btn btn-primary btn-lg w-75 mb-2">
                                Learn More
                            </Button>
                        </Col>
                        <Col sm>
                            <Button className="btn btn-primary btn-lg w-75 mb-2">
                                Courses
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="py-3">
                <Carousel>
                    <Carousel.Item>
                        <Image
                            src={animal1}
                            width={'100%'}
                            height={800}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            src={animal2}
                            width={'100%'}
                            height={800}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            src={animal3}
                            width={'100%'}
                            height={800}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>


        // <Jumbotron className="vertical-center" style={{ backgroundImage: `url(${mountains})` }}>
        //     <Container fluid className="text-center align-items-center" style={{ backgroundColor: 'transparent', width: '75%' }}>
        //         <h2 className="text-primary">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</h2>
        //         <h4 className="text-primary p-2">It uses utility classes for typography and spacing to space content out within the larger container.</h4>
        //         <Row>
        //             <Col className="align-self-center">
        //                 <a className="btn btn-primary btn-lg m-2" href="#" style={{ width: '25%' }} role="button">Learn more</a>
        //                 <a className="btn btn-primary btn-lg m-2" href="#" style={{ width: '25%' }} role="button">Contact us</a>
        //             </Col>
        //         </Row>
        //         <Row>
        //         <Carousel>
        //             <Carousel.Item>
        //                 <img
        //                     src={animal1}
        //                     width={800}
        //                     height={600}
        //                     alt="First slide"
        //                 />
        //                 <Carousel.Caption>
        //                 <h3>First slide label</h3>
        //                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //                 </Carousel.Caption>
        //             </Carousel.Item>
        //             <Carousel.Item>
        //                 <img
        //                 src={animal2}
        //                 width={800}
        //                 height={600}
        //                 alt="Second slide"
        //                 />

        //                 <Carousel.Caption>
        //                 <h3>Second slide label</h3>
        //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //                 </Carousel.Caption>
        //             </Carousel.Item>
        //             <Carousel.Item>
        //                 <img
        //                 src={animal3}
        //                 width={800}
        //                 height={600}
        //                 alt="Third slide"
        //                 />

        //                 <Carousel.Caption>
        //                 <h3>Third slide label</h3>
        //                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        //                 </Carousel.Caption>
        //             </Carousel.Item>
        //             </Carousel>
        //         </Row>
        //      </Container>
        //  </Jumbotron>
    );
  }
}

export default Main7;
