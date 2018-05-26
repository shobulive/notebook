import React, { Component } from 'react';
import logo from '../../../Assets/logo.png';
import { Link } from 'react-router-dom';
import { userSignOut } from '../../../Actions/auth';
import { connect } from 'react-redux';
class InAppHeader extends Component {
  render() {
    if (!this.props.uID) {
      this.props.notSignedAction();
    }
    return (
      <div class="in-app-header-container">
        <div class="in-app-logo-container">
          <img src={logo} class="in-app-logo" alt="InAppLogo" />
        </div>
        <div class="header-icons">
          <Link to={`/user/${this.props.uID}`}>
            <img
              src={this.props.currentUser && this.props.currentUser.profilePic}
              class="avatar"
              alt="avatar"
            />
            <span class="text-icon major-padding">
              {this.props.currentUser &&
                this.props.currentUser.fName +
                  ' ' +
                  this.props.currentUser.lName}
            </span>
          </Link>
          <Link to="/home">
            <span class="text-icon major-padding">Home</span>
          </Link>
          <div class="float-right row">
            <div class="icon-nav col-lg-2 col-md-2 col-sm-2">
              <span class="icon-nav">
                <i class="glyphicon glyphicon-user" />
              </span>
            </div>
            <div class="icon-nav col-lg-2 col-md-2 col-sm-2">
              <span>
                <i class="glyphicon glyphicon-send" />
              </span>
            </div>
            <div class="icon-nav col-lg-2 col-md-2 col-sm-2">
              <span>
                <i class="glyphicon glyphicon-globe" />
              </span>
            </div>
            <div class="icon-nav col-lg-2 col-md-2 col-sm-2">
              <span>
                <i class="glyphicon glyphicon-question-sign" />
              </span>
            </div>
            <div class="icon-nav col-lg-1 col-md-1 col-sm-1">
              <span>
                <i class="glyphicon glyphicon-triangle-bottom" />
              </span>
            </div>
            <button
              class="btn btn-default btn-login"
              onClick={() => {
                this.props.userSignOut();
                this.props.redirect();
              }}
            >
              Sign out
            </button>
          </div>
        </div>
        <div class="input-group search-input-container">
          <input class="form-control search-input " placeholder="Search" />
          <span class="input-group-addon search-icon">
            <i class="glyphicon glyphicon-search" />
          </span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log('[[MAP STATE TO PROPS Header]]', state);
  return {
    currentUser: state.auth.currentUser,
    uID: state.auth.uID
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userSignOut: () => dispatch(userSignOut())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InAppHeader);
