import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import mountains from '../assets/mountains.jpg';

class Main4 extends Component {
  render() {
    return (
        <Container fluid className="p-0" style={{ backgroundImage: `url(${mountains})`, height: '100%' }}>
            <Jumbotron style={{ backgroundColor: 'transparent' }}>
                <h1 className="display-4">Hello, world 4!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </Jumbotron>
            <Container fluid style={{ marginTop: 100, backgroundColor: 'white', height: 300}}>
                <h1 className="display-4">New Jumbotron</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Another Button</a>
            </Container>
            <Container fluid style={{ marginTop: 200, backgroundColor: 'purple', height: 300 }}>
                <h1 className="display-4">New Jumbotron</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Another Button</a>
            </Container>
        </Container>
    );
  }
}

export default Main4;
