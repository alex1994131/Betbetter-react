import React, { Component } from 'react';
import './main.css';

import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { userLoginRequest } from '../store/actions/usersActions';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.email) {
      return this.setState({ error: 'email is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    const login_data = {
        email: this.state.email,
        password: this.state.password
    }

    this.props.userLoginRequest(login_data);
  }

  handleUserChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    return (
        <div className="pricing-surebets">
        <div className="s-wrapper">
            <a alt="Arbitrage betting service №1" className="logo" href="https://www.betburger.com/" title="BetBurger">
                <img alt="BETBURGER" src="../assets/img/logo-ce6adc712c4db3a61a1e47681e6996115423fdb19d67bd685091c4c0682dd385.svg" />
            </a>
            <span className="subtitle">Sign in</span>
            <div className="s-wrapper__inner">
                <form className="action-form" id="new_session" role="form"  onSubmit={this.handleSubmit} method="post">
                    {
                        this.state.error &&
                        <h3 data-test="error" onClick={this.dismissError}>
                        <button onClick={this.dismissError}>✖</button>
                        {this.state.error}
                        </h3>
                    }
                    <input name="utf8" type="hidden" value="✓" />
                    <input type="hidden" name="authenticity_token" value="jVj/nIN7AjdOjSNIlq1d2RlPvw4z0eTHB6k8UpjLl3y/wX85wKg3dYW0fOxDHEoTKGO6K/Ap6WBXMpVljuKyTw==" />
                    <ul className="form_errors_list"></ul>
                    <div className="form-group required valid">
                        <label>Email address</label>
                        <div className="form-group-input">
                            <input className="form-control" placeholder="example@example.com"  value={this.state.email} onChange={this.handleUserChange} error="false" type="text" name="betburger_user[email]" id="betburger_user_email" />
                        </div>
                    </div>
                    <div className="form-group required valid view">
                        <label>Password</label>
                        <div className="form-group-input">
                            <input className="form-control"  value={this.state.password} onChange={this.handlePassChange} placeholder="Password" error="false" type="password" name="betburger_user[password]" id="betburger_user_password" />
                            <span className="field-icon toggle-password" toggle="#betburger_user_password"></span>
                        </div>
                    </div>
                    <div className="checkboxes-block">
                        <div className="form-check form-check-center">
                            <input name="betburger_user[remember_me]" type="hidden" value="false" />
                            <input className="form-check-input" type="checkbox" value="true" name="betburger_user[remember_me]" id="betburger_user_remember_me" />
                            <span className="custom-checkbox"></span>
                            <label className="form-check-label">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <button className="btn btn-submit submit" type="submit">
                        Sign in to my account
                    </button>
                </form>
            </div>
            <div className="support-links">
                <p>
                Don't have an account?
                <a href="https://www.betburger.com/users/sign_up">Create one here</a>
                </p>
                <p>
                Forgot your password?
                <a href="https://www.betburger.com/users/password/new">Reset password</a>
                </p>
                <p>
                Didn't receive confirmation instructions?
                <a href="https://www.betburger.com/users/confirmation/new">Send again</a>
                </p>
            </div>
        </div>
        </div>
    );
  }
}

SignIn.propTypes = {
    userLoginRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {userLoginRequest})(SignIn)