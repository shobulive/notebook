import React, { Component } from 'react';
import AppLandingHeader from '../../Components/Common/Header/AppLandingHeader';
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
                  <div class="major-padding">
                    <h3 class="white-text">Don't have an account?</h3>
                    <h4 class="white-text">It's free and will always be!</h4>
                  </div>
                  <form>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <input class="form-control" placeholder="First Name" />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <input class="form-control" placeholder="Last Name" />
                      </div>
                    </div>
                    <div class="row major-padding">
                      <input class="form-control" placeholder="Email" />
                    </div>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <input class="form-control" placeholder="Password" />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <input
                          class="form-control"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>
                    <div class="row major-padding">
                      <label class="radio-inline">
                        <input type="radio" name="gender" active />Male
                      </label>
                      <label class="radio-inline">
                        <input type="radio" name="gender" />Female
                      </label>
                    </div>
                    <div class="row major-padding ">
                      <label>Birthday</label>
                      <input type="date" name="bday" class="form-control" />
                    </div>
                    <div class="row minor-padding ">
                      <span class="terms-text">
                        By clicking Sign Up, you agree to our Terms, Data Policy
                        and Cookie Policy. You may receive SMS notifications
                        from us and can opt out at any time.
                      </span>
                    </div>
                    <button class="btn btn-default btn-signin">SignUp</button>
                  </form>
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
export default Login;
