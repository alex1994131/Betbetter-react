import React, { Component } from 'react';
import './main.css';

import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { userSignupRequest } from '../store/actions/usersActions';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name:'',
      user:'',  
      email: '',
      password: '',
      cpassword:'',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange=this.handleNameChange.bind(this);
    this.handleCpassChange = this.handleCpassChange.bind(this);
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

    const signup_data = {
        name:this.state.name,
        user:this.state.user,
        email: this.state.email,
        password: this.state.password,
        c_password:this.state.cpassword
    }

    this.props.userSignupRequest(signup_data);
  }

  handleUserChange(evt) {
    this.setState({
      user: evt.target.value,
    });
  };

  handleNameChange(evt) {
    this.setState({
      name: evt.target.value,
    });
  };
  handleEmailChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  };

  handleCpassChange(evt) {
    this.setState({
      cpassword: evt.target.value,
    });
  };

  render() {
    return (
        <div className="pricing-surebets">
        <div className="s-wrapper">
            <a alt="Arbitrage betting service №1" className="logo" href="/" title="BetBurger">
                <img alt="BETBURGER" src="../assets/img/logo_black.png" />
            </a>
            <span className="subtitle">Sign Up</span>
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
                    <div className="form-group required valid view">
                        <label>Name</label>
                        <div className="form-group-input">
                            <input className="form-control"  value={this.state.name} onChange={this.handleNameChange} placeholder="Jhon" error="false" type="text" name="register_name" id="register_name" />
                        </div>
                    </div>
                    <div className="form-group required valid view">
                        <label>UserName</label>
                        <div className="form-group-input">
                            <input className="form-control"  value={this.state.user} onChange={this.handleUserChange} placeholder="Jhon123" error="false" type="text" name="register_user" id="register_user" />
                        </div>
                    </div>
                    <div className="form-group required valid">
                        <label>Email address</label>
                        <div className="form-group-input">
                            <input className="form-control" placeholder="example@example.com"  value={this.state.email} onChange={this.handleEmailChange} error="false" type="text" name="register_email" id="register_email" />
                        </div>
                    </div>
                    <div className="form-group required valid view">
                        <label>Password</label>
                        <div className="form-group-input">
                            <input className="form-control"  value={this.state.password} onChange={this.handlePassChange} placeholder="Password" error="false" type="password" name="register_password" id="register_password" />
                            <span className="field-icon toggle-password" toggle="#betburger_user_password"></span>
                        </div>
                    </div>
                    <div className="form-group required valid view">
                        <label>Confirm Password</label>
                        <div className="form-group-input">
                            <input className="form-control"  value={this.state.cpassword} onChange={this.handleCpassChange} placeholder="Password" error="false" type="password" name="register_conpass" id="register_conpass" />
                            <span className="field-icon toggle-password" toggle="#betburger_user_password"></span>
                        </div>
                    </div>
                    <button className="btn btn-submit submit" type="submit">
                        Sign Up
                    </button>
                </form>
            </div>
            <div className="support-links">
                <p>
                    <a href="/signin">Sign In</a>
                </p>
            </div>
        </div>
        </div>
    );
  }
}

SignUp.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {userSignupRequest})(SignUp)