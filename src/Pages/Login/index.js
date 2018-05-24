import React, { Component } from 'react';
import AppLandingHeader from '../../Components/Common/Header/AppLandingHeader';
import background from '../../Assets/background.jpg';
import { Redirect } from 'react-router-dom';
class Login extends Component {
  state = {
    redirect: false
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
    return (
      <div>
        <AppLandingHeader />
        <div class="background">
          <img src={background} class="bg-image" alt="bg" />
        </div>
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
              <div class="w3-card-4 sign-up-card">
                <div class="w3-container w3-orange center-text">
                  <h3 class="white-text">Don't have an account?</h3>
                  <p class="white-text">It's free and will always be!</p>
                </div>
                <form class="w3-container">
                  <div>
                    <div class="w3-half">
                      <label>First Name</label>
                      <input class="w3-input" type="text" />
                    </div>
                    <div class="w3-half">
                      <label>Last Name</label>
                      <input class="w3-input" type="text" />
                    </div>
                  </div>
                  <div>
                    <label>Email</label>
                    <input class="w3-input" type="email" />
                  </div>
                  <div>
                    <label>Password</label>
                    <input class="w3-input" type="password" />
                  </div>
                  <div>
                    <label>Confirm Password</label>
                    <input class="w3-input" type="password" />
                  </div>
                  <div>
                    <label>Gender</label>
                    <div>
                      <input
                        class="w3-radio"
                        type="radio"
                        name="gender"
                        value="male"
                        checked
                      />
                      <label>Male</label>
                      <input
                        class="w3-radio"
                        type="radio"
                        name="gender"
                        value="female"
                      />
                      <label>Female</label>
                    </div>
                  </div>
                  <div>
                    <label>D.O.B</label>
                    <input
                      class="w3-input"
                      type="date"
                      data-date-inline-picker="true"
                    />
                  </div>
                  <button class="btn-signin open-padding w3-block w3-round-xxlarge">
                    SignUp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
