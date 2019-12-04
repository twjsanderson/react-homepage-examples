import React, { Fragment } from 'react';
import Nav1 from './NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import video from '../assets/video.mp4';

// requires videoContainer class with position: relative, and overlay with position absolute and a few other alignments

const Main8 = () => {
  return (
    <Fragment>
        <Nav1 />
        <Container fluid className="videoContainer" style={{ paddingRight: 0, paddingLeft: 0 }}>
            <video className="video" autoPlay loop muted>
                <source src={video} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <Container className="overlay">
                <Row className="h-100 justify-content-center align-items-center">
                    <Col md={4} className="text-center">
                        <h1>Main Title</h1>
                        <p className="text-warning">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </Col>
                </Row>
            </Container>
        </Container>
    </Fragment>
  );
}

export default Main8;
