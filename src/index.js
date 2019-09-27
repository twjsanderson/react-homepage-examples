import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // must put these in to use bootstrap
// import Popper from 'popper.js'; // import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Main1 from './components/Main1'; 
import Main2 from './components/Main2'; 
import Main3 from './components/Main3'; 
import Main4 from './components/Main4'; 
import Main5 from './components/Main5'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';


ReactDOM.render(
  <Router>
        <Row className="link">
            <Col>
                <Link className="link" to="/">Main1</Link>
                <Link className="link" to="/main2">Main2</Link>
                <Link className="link" to="/main3">Main3</Link>
                <Link className="link" to="/main4">Main4</Link>
                <Link className="link" to="/main5">Main5</Link>
                {/* <Link className="link" to="/main6">Main6</Link> */}
            </Col>
        </Row>
        <Switch>
            <Route exact path="/" component={Main1} />
            <Route path="/main2" component={Main2} />
            <Route path="/main3" component={Main3} />
            <Route path="/main4" component={Main4} />
            <Route path="/main5" component={Main5} />
            {/* <Route path="/main6" component={Main6} /> */}

        </Switch>
    </Router>,
  document.getElementById('root')
);
