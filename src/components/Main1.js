import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import mountains from '../assets/mountains.jpg';

class Main1 extends Component {
  render() {
    return (
      <section>
        <Jumbotron style={{ backgroundImage: `url(${mountains})`, height: 1000 }}> 
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </Jumbotron>
      </section>
    );
  }
}

export default Main1;
