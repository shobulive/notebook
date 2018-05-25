import React, { Component } from 'react';
import logo from '../../../Assets/logo.png';
import faker from 'faker/locale/en';
import { Link } from 'react-router-dom';
export default class InAppHeader extends Component {
  render() {
    return (
      <div class="in-app-header-container">
        <div class="in-app-logo-container">
          <img src={logo} class="in-app-logo" alt="InAppLogo" />
        </div>
        <div class="header-icons">
          <Link to="/user/currentUserID">
            <img src={faker.image.avatar()} class="avatar" alt="avatar" />
            <span class="text-icon major-padding">{faker.name.findName()}</span>
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
            <div class="icon-nav col-lg-3 col-md-3 col-sm-3">
              <span>
                <i class="glyphicon glyphicon-globe" />
              </span>
            </div>
            <div class="icon-nav col-lg-3 col-md-3 col-sm-3">
              <span>
                <i class="glyphicon glyphicon-question-sign" />
              </span>
            </div>
            <div class="icon-nav col-lg-2 col-md-2 col-sm-2">
              <span>
                <i class="glyphicon glyphicon-triangle-bottom" />
              </span>
            </div>
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
