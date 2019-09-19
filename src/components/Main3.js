import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import mountains from '../assets/mountains.jpg';

class Main3 extends Component {
  render() {
    return (
      <section>
        <Container fluid style={{ backgroundImage: `url(${mountains})`, height: 1200 }}>
            <Jumbotron style={{ backgroundColor: 'transparent' }}>
                <h1 className="display-4">Hello, world 3!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </Jumbotron>
            <Jumbotron style={{marginTop: 350}}>
                <h1 className="display-4">New Jumbotron</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Another Button</a>
            </Jumbotron>
        </Container>
      </section>
    );
  }
}

export default Main3;
