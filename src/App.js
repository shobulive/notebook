import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/user/:id" component={User} />
      <Route path="/post/:id" component={Post} />
    </div>
  </Router>
);
class User extends Component {
  render() {
    return (
      <div>
        <h2>USER ID:{this.props.match.params.id}</h2>
      </div>
    );
  }
}
const Post = ({ match }) => (
  <div>
    <h2>POST ID:{match.params.id}</h2>
  </div>
);
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export default Routes;
