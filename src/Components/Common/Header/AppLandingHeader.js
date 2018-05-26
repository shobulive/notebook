import React, { Component } from 'react';
import logo from '../../../Assets/logo.png';
export default class AppLandingHeader extends Component {
  render() {
    return (
      <div class="app-landing-container">
        <div class="landing-logo-container">
          <img src={logo} class="landing-logo" alt="Logo" />
          <span class="logo-text">NOTEBOOK</span>
        </div>
        <div class="login-form-container">
          <div class="form-group form-internal-left spacing">
            <label class="login-form-text">Email address:</label>
            <input
              type="email"
              class="form-control text-input"
              id="email"
              onChange={this.props.onChangeEmailLogin}
            />
          </div>
          <div class="form-group form-internal-left spacing">
            <label class="login-form-text">Password:</label>
            <input
              type="password"
              class="form-control text-input"
              id="password"
              onChange={this.props.onChangePasswordLogin}
            />
          </div>
          <div class="form-internal-right">
            <button
              class="btn btn-default btn-login"
              onClick={this.props.loginPress}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
