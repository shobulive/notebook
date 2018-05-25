import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Pages/Login';
import InAppHeader from './Components/Common/Header/InAppHeader';
import { PostField } from './Components/Common/PostField';
import { dummyPostData } from './temp/dummyPosts';
import { FeedContent } from './Components/Common/FeedContent';

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
const Home = () => {
  return (
    <div>
      <InAppHeader />
      <div class="container">
        <PostField />
        {Object.values(dummyPostData).map((content, index) => (
          <FeedContent content={content} key={index} />
        ))}
      </div>
    </div>
  );
};
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
