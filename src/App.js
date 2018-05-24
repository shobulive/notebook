import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Pages/Login';
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
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
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
