import React, { Component } from 'react';
import AppLandingHeader from '../../Components/Common/Header/AppLandingHeader';
import { connect } from 'react-redux';
import {
  checkForUserSession,
  userSignIn,
  userSignUp
} from '../../Actions/auth';
class Login extends Component {
  state = {
    loginEmail: '',
    loginPassword: '',
    signInGender: 'Male',
    signInFName: '',
    signInLName: '',
    signInPassword: '',
    signInEmail: '',
    signInConfirmPassword: '',
    singInDOB: ''
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn) {
      this.props.history.push('/home');
    }
  }
  componentWillMount() {
    this.props.checkForUserSession();
  }
  _renderPgMessage() {
    return (
      <div
        class="message"
        style={{
          backgroundColor:
            this.props.message.type !== 'error' ? '#4CAF50' : '#F44336'
        }}
      >
        <div class="container">
          <div class="row feed-margin">
            <div class="col-lg-1 col-md-1 col-sm-1">
              {this.props.message.type !== 'error' ? (
                <span class="glyphicon glyphicon-ok" />
              ) : (
                <span class="glyphicon glyphicon-remove" />
              )}
            </div>
            <div class="col-lg-11 col-md-11 col-sm-11">
              {this.props.message.message}
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.props.message && this._renderPgMessage()}
        <AppLandingHeader
          onChangeEmailLogin={event => {
            this.setState({ loginEmail: event.target.value });
          }}
          onChangePasswordLogin={event => {
            this.setState({ loginPassword: event.target.value });
          }}
          loginPress={() => {
            this.props.userSignIn(
              this.state.loginEmail,
              this.state.loginPassword
            );
          }}
        />
        <div class="comments background">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-md-5 col-sm-5 left-column">
                <hr />
                <span class="quote-text">
                  &ldquo;Every human being is the author of his own health or
                  disease&rdquo;
                </span>
                <hr />
                <span class="quote-text quote-author">- Shobu_Live!</span>
              </div>
              <div class="col-lg-1 col-md-1 col-sm-1" />
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="sign-up-card">
                  <div>
                    <h2 class="head-color">Don't have an account?</h2>
                    <h3 class="head-color">It's free and will always be!</h3>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <input
                          class="form-control"
                          onChange={event => {
                            this.setState({
                              signInFName: event.target.value
                            });
                          }}
                          placeholder="First Name"
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <input
                          class="form-control"
                          onChange={event => {
                            this.setState({
                              signInLName: event.target.value
                            });
                          }}
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div class="row major-padding">
                      <input
                        class="form-control"
                        onChange={event => {
                          this.setState({
                            signInEmail: event.target.value
                          });
                        }}
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <input
                          class="form-control"
                          onChange={event => {
                            this.setState({
                              signInPassword: event.target.value
                            });
                          }}
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <input
                          class="form-control"
                          onChange={event => {
                            this.setState({
                              signInConfirmPassword: event.target.value
                            });
                          }}
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>
                    <div class="row major-padding">
                      <label class="radio-inline">
                        <input
                          type="radio"
                          name="gender"
                          onChange={() => {
                            this.setState({ signInGender: 'Male' });
                          }}
                          checked={this.state.signInGender === 'Male'}
                        />Male
                      </label>
                      <label class="radio-inline">
                        <input
                          type="radio"
                          name="gender"
                          onChange={() => {
                            this.setState({ signInGender: 'Female' });
                          }}
                          checked={this.state.signInGender === 'Female'}
                        />Female
                      </label>
                    </div>
                    <div class="row major-padding ">
                      <label>Birthday</label>
                      <input
                        type="date"
                        name="bday"
                        class="form-control"
                        onChange={event => {
                          this.setState({ singInDOB: event.target.value });
                        }}
                      />
                    </div>
                    <div class="row minor-padding ">
                      <span class="terms-text">
                        By clicking Sign Up, you agree to our Terms, Data Policy
                        and Cookie Policy. You may receive SMS notifications
                        from us and can opt out at any time.
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        this.props.userSignUp(
                          this.state.signInFName,
                          this.state.signInLName,
                          this.state.signInEmail,
                          this.state.signInPassword,
                          this.state.signInConfirmPassword,
                          this.state.signInGender,
                          this.state.singInDOB
                        );
                      }}
                      class="btn btn-default btn-signin"
                    >
                      SignUp
                    </button>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log('[[MAP STATE TO PROPS LOGIN]]', state);
  return {
    uID: state.auth.uID,
    message: state.auth.message,
    isLoggedIn: state.auth.isLoggedIn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    checkForUserSession: () => dispatch(checkForUserSession()),
    userSignIn: (loginEmail, loginPassword) =>
      dispatch(userSignIn(loginEmail, loginPassword)),
    userSignUp: (fName, lName, email, pass, cPass, gender, dob) =>
      dispatch(userSignUp(fName, lName, email, pass, cPass, gender, dob))
    // searchUsers: text => dispatch(searchUsers(text))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
