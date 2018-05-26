import React, { Component } from 'react';
import InAppHeader from '../../Components/Common/Header/InAppHeader';
import PostField from '../../Components/Common/PostField';
import { FeedContent } from '../../Components/FeedContent';
import { connect } from 'react-redux';
import {
  fetchUserFeedListenerOn,
  fetchUserFeedListenerOff,
  fetchUserDetails
} from '../../Actions/FetchUserData';
class User extends Component {
  userData;
  componentWillUnmount() {
    if (this.props.uID)
      this.props.fetchUserFeedListenerOff(this.props.match.params.id);
  }
  render() {
    // console.log(this.userData);

    const ownProfile = this.props.uID === this.props.match.params.id;
    return (
      <div>
        <InAppHeader
          notSignedAction={() => this.props.history.push('/')}
          redirect={() => this.props.history.push('/')}
        />
        <div class="container">
          <div class="row">
            <div class="col-lg-1 col-md-1 col-sm-1" />
            <div class="col-lg-10 col-md-10 col-sm-10">
              <div class="float-left avatar-profile-container">
                <img
                  alt="profile-pic"
                  src={
                    this.props.currentUser && this.props.currentUser.profilePic
                    // : this.props.userData && this.props.userData.profilePic
                  }
                  class="avatar-profile"
                />
              </div>
              <img
                alt="cover"
                src={
                  ownProfile
                    ? this.props.currentUser &&
                      this.props.currentUser.coverPhoto
                    : this.props.userData && this.props.userData.coverPhoto
                }
                class="cover-photo"
              />
              <span class="user-name">
                {ownProfile
                  ? this.props.currentUser &&
                    this.props.currentUser.fName +
                      ' ' +
                      this.props.currentUser.lName
                  : this.props.userData &&
                    this.props.userData.fName + ' ' + this.props.userData.lName}
              </span>
              <div class="content">
                <div class="w3-card app-bar">
                  <div class="float-right">
                    <button class="btn btn-default reply-btn app-bar-button ">
                      Timeline
                    </button>
                    <button class="btn btn-default reply-btn app-bar-button ">
                      About
                    </button>
                    <button class="btn btn-default reply-btn app-bar-button ">
                      Friends
                    </button>
                    <button class="btn btn-default reply-btn app-bar-button ">
                      Photos
                    </button>
                    <button class="btn btn-default reply-btn app-bar-button ">
                      <span>
                        {' '}
                        More <i class="glyphicon glyphicon-triangle-bottom" />
                      </span>
                    </button>
                  </div>
                </div>
                <div class="feed-margin">
                  <PostField />
                  {this.props.feeds &&
                    this.props.feed.map((content, i) => (
                      <FeedContent key={i} content={content} />
                    ))}
                </div>
              </div>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1" />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log('[[MAP STATE TO PROPS Profile]]', state);
  return {
    uID: state.auth.uID,
    currentUser: state.auth.currentUser,
    feed: state.user.userFeed
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUserFeedListenerOn: uID => dispatch(fetchUserFeedListenerOn(uID)),
    fetchUserFeedListenerOff: uID => dispatch(fetchUserFeedListenerOff(uID)),
    fetchUserDetails: uID => dispatch(fetchUserDetails(uID))
    // userSignIn: (loginEmail, loginPassword) =>
    //   dispatch(userSignIn(loginEmail, loginPassword)),
    // userSignUp: (fName, lName, email, pass, cPass, gender, dob) =>
    //   dispatch(userSignUp(fName, lName, email, pass, cPass, gender, dob))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
