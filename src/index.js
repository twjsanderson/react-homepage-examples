import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // must put these in to use bootstrap
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Main1 from './components/Main1'; 
import Main2 from './components/Main2'; 
import Main3 from './components/Main3'; 
import Main4 from './components/Main4'; 
import Main5 from './components/Main5'; 
import Main6 from './components/Main6';
import Main7 from './components/Main7';
import Main8 from './components/Main8';
import './index.css';


ReactDOM.render(
  <Router>
    <Navbar className="bg-warning">
      <Link className="p-3" to="/">Main1</Link>
      <Link className="p-3" to="/main2">Main2</Link>
      <Link className="p-3" to="/main3">Main3</Link>
      <Link className="p-3" to="/main4">Main4</Link>
      <Link className="p-3" to="/main5">Main5</Link>
      <Link className="p-3" to="/main6">Main6</Link>
      <Link className="p-3" to="/main7">Main7</Link>
      <Link className="p-3" to="/main8">Main8</Link>
    </Navbar>
    <Switch>
        <Route exact path="/" component={Main1} />
        <Route path="/main2" component={Main2} />
        <Route path="/main3" component={Main3} />
        <Route path="/main4" component={Main4} />
        <Route path="/main5" component={Main5} />
        <Route path="/main6" component={Main6} />
        <Route path="/main7" component={Main7} />
        <Route path="/main8" component={Main8} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
