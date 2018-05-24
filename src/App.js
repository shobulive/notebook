import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppLandingHeader from './Components/Common/Header/AppLandingHeader';
import background from './Assets/background.jpg';
const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/user/:id" component={User} />
      <Route path="/post/:id" component={Post} />
    </div>
  </Router>
);
class Home extends Component {
  render() {
    return (
      <div>
        <AppLandingHeader />
        <div class="background">
          <img src={background} class="left-image" />
        </div>
      </div>
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
