import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user/about">About</Link>
        </li>
        <li>
          <Link to="/post/topics">Topics</Link>
        </li>
      </ul>

      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/user/:id" component={User} />
      <Route path="/post/:id" component={Post} />
    </div>
  </Router>
);
class User extends Component {
  render() {
    console.log(this.props.match);
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

export default BasicExample;
