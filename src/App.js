import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Pages/Login';
// import InAppHeader from './Components/Common/Header/InAppHeader';
import { Home } from './Pages/Home';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/user/:id" component={User} />
          <Route path="/post/:id" component={Post} />
        </div>
      </Router>
    );
  }
}
const Post = ({ match }) => (
  <div>
    <h2>POST ID:{match.params.id}</h2>
  </div>
);
const User = ({ match }) => (
  <div>
    <h2>User ID:{match.params.id}</h2>
  </div>
);

export default Routes;
