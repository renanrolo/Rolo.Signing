import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './pages/components/header'
import Footer from './pages/components/footer'
import Home from './pages/home'
import In from './pages/in'
import On from './pages/on'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Header />

      <Switch>
        <Route path="/in" component={In} />
        <Route path="/on" component={On} />
        <Route path="/" component={Home} />
      </Switch>

      <Footer />
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
