import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import { userupdateRequest } from '../../../store/actions/usersActions';
import bcrypt  from 'bcryptjs';
import { userLogoutRequest } from '../../../store/actions/usersActions';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            id:jwt.decode(localStorage.getItem('jwtToken')).id,
          user:jwt.decode(localStorage.getItem('jwtToken')).username,  
          email: jwt.decode(localStorage.getItem('jwtToken')).email,
          password: '',
          opassword:'',
          cpassword:'',
          error: '',
        };
    
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleOPassChange = this.handleOPassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCpassChange = this.handleCpassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
      }
    
      dismissError() {
        this.setState({ error: '' });
      }
    
      handleSubmit(evt) {
          console.log("request");
        evt.preventDefault();
        
        if (!this.state.email) {
            alert("Email is required")
            return this.setState({ error: 'email is required' });
          }

        if (!this.state.user) {
            alert("UserName is required")
            return this.setState({ error: 'email is required' });
          }
      
        if (!this.state.password) {
            alert("Password is required")
            return this.setState({ error: 'Password is required' });
        }
        if(this.state.password!=this.state.cpassword){
            alert("New password is not match")
            return this.setState({ error: 'Password is required' });
        }
        bcrypt.compare(this.state.opassword, jwt.decode(localStorage.getItem('jwtToken')).password, (err, isMatch) => {
            if(!isMatch){
                alert("Enter the correct password")
                return this.setState({ error: 'password is not match' });
            }
        if(!this.state.error)
            {
                const signup_data = {
                    id:this.state.id,
                    name:this.state.name,
                    user:this.state.user,
                    email: this.state.email,
                    password: this.state.password,
                }
            this.props.userupdateRequest(signup_data);
            this.props.userLogoutRequest();
            }
        })
    
        
      }
    
      handleUserChange(evt) {
        this.setState({
          user: evt.target.value,
        });
      };
      handleEmailChange(evt) {
        this.setState({
          email: evt.target.value,
        });
      };
      
      handleOPassChange(evt) {
        this.setState({
          opassword: evt.target.value,
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
      console.log(jwt.decode(localStorage.getItem('jwtToken')))
    return (
        <div>
            {/* <h4 className="change-password-title">
                Change the current email/password
            </h4>
            <div className="row">
                <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12">
                    <hr className="password-form-hr" />
                </div>
            </div> */}
        <form className="editUserInfo row" onSubmit={this.handleSubmit} acceptCharset="UTF-8" method="post">
            <div className="info-holder form-group col-sm-6 col-md-12">
                <div className="row">
                    <div className="col-md-5 col-xs-12 no-desc">
                        <label htmlFor="betbetter_username">UserName
                        </label>
                    </div>
                    <div className="col-md-5 col-xs-12 setting_input">
                        <input autoFocus="autofocus" className="form-control" value={this.state.user} type="text" name="username" id="username" onChange={this. handleUserChange}/>
                        <span className="help-block hidden"></span>
                    </div>
                </div>
            </div>
            <div className="info-holder form-group col-sm-6 col-md-12">
                <div className="row">
                    <div className="col-md-5 col-xs-12 no-desc">
                        <label htmlFor="betburger_user_email">Email
                        </label></div>
                    <div className="col-md-5 col-xs-12 setting_input">
                        <input className="form-control" value={this.state.email} type="text" name="betburger_user[email]" onChange={this.handleEmailChange} />
                        <span className="help-block hidden"></span>
                    </div>
                </div>
            </div>
            <div className="info-holder form-group col-sm-6 col-md-12 current-password-holder">
                <div className="row">
                    <div className="col-md-5 col-xs-12 with-desc">
                        <label className="with_description" htmlFor="betburger_user_current_password">Current
                            Password
                        </label><span className="small">(we need your current password to confirm your changes)</span>
                    </div>
                    <div className="col-md-5 col-xs-12 setting_input">
                        <input autoComplete="off" className="form-control" type="password" name="cpass" value={this.state.opassword} onChange={this.handleOPassChange}/>
                        <span className="help-block hidden"></span>
                    </div>
                </div>
            </div>
            <div className="info-holder form-group col-sm-6 col-md-12 new-password-holder">
                <div className="row">
                    <div className="col-md-5 col-xs-12 with-desc">
                        <label className="with_description" htmlFor="betburger_user_password">New password
                        </label>
                        <span className="small">(leave blank if you don't want to change it)</span>
                    </div>
                    <div className="col-md-5 col-xs-12 setting_input">
                        <input autoComplete="off" className="form-control" type="password"
                               name="betburger_user[password]" value={this.state.password} onChange={this.handlePassChange} />
                        <span className="help-block hidden"></span>
                    </div>
                </div>
            </div>
            <div className="info-holder form-group conform col-sm-6 col-md-12 password-confirmation-holder">
                <div className="row">
                    <div className="col-md-5 col-xs-12 no-desc">
                        <label htmlFor="betburger_user_password_confirmation">Password confirmation
                        </label></div>
                    <div className="col-md-5 col-xs-12 setting_input">
                        <input autoComplete="off" className="form-control" type="password"
                               name="betburger_user[password_confirmation]"
                               value={this.state.cpassword} onChange={this.handleCpassChange} />
                        <span className="help-block hidden"></span>
                    </div>
                </div>
            </div>
            <div className="info-holder form-group conform col-xs-12 password-update-holder">
                <div className="row">
                    <div className="col-md-10 col-xs-12 text-right">
                        <button className="btn btn-md green" type="submit">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </form>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {userupdateRequest,userLogoutRequest})(Dashboard)

