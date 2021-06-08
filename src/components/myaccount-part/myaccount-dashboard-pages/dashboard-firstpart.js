import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import { SetFreeze } from '../../../store/actions/adminActions';
import { userLogoutRequest } from '../../../store/actions/usersActions';

class DashboardFirstPart extends Component {

    constructor() {
        super();
        this.state = {
          day:'',
          id:''
        };    
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }
    
      handleSubmit(evt) {
        evt.preventDefault();
        console.log("requesrt");
        const freeze_data = {
            freeze_day:this.state.day,
            id:this.state.id
        }
    
        this.props.SetFreeze(freeze_data);
        this.props.userLogoutRequest();
      }
    
  render() {
    const ending=jwt.decode(localStorage.getItem('jwtToken')).Ending;
    const end=new Date(ending).getTime();
    const current_date=new Date().getTime();
    const dif=(end-current_date)/(1000*3600*24);
    if(parseInt(dif)<dif)
        this.state.day=parseInt(dif)+1;
    else{
        this.state.day=parseInt(dif);
    }
    this.state.id=jwt.decode(localStorage.getItem('jwtToken')).id;
    return (
        <div className="col-md-10 col-sm-12 col-xs-12 feature" id="isUnfrozen">
            <div id="frozenAccount">
                <h3>Account is frozen</h3>
                <p>
                    During this time our service won’t be available to you, but on resuming your
                    subscription you will be able to use our service again. Your assets will
                    stay untouched.
                </p>
                <div className="counts row">
                    <div className="col-xs-6">
                        <span className="used">
                        Used:
                        <span className="count">
                        0 day
                        </span>
                        </span>
                    </div>
                    <div className="col-xs-6">
                        <span className="left">
                        Left:
                        <span className="count">
                        28 days
                        </span>
                        </span>
                    </div>
                </div>
                <div className="row withForm">
                    <div className="col-xs-6">
                        <div className="btn-holder col-static">
                            <img alt="Loading..." className="preLoading"
                                 src="data:image/gif;base64,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"
                                 style={{display: "none",}}/>

                            <a className="btn btn-md btn-success" id="unfreezButton" rel="nofollow"
                               data-method="put"
                               href="#">UnFreeze
                                Account</a>
                        </div>
                    </div>
                </div>
            </div>
            <form acceptCharset="UTF-8" action="#"
                  id="freezAccount" method="post" onSubmit={this.handleSubmit}>
                <div>
                    <input name="utf8" type="hidden" value="✓" />
                    <input name="_method" type="hidden" value="put" />
                    <input name="authenticity_token" type="hidden"
                           value="GB0GDkXPyERGrgiKCS6rrNks71A1zfi+YtpiRh1d8RPxty3GUy4j2hOTrd7uqr6JN9g/h44BiunOw6IcaK8WGg==" />
                </div>
                <h3 className="title-small">Freeze Account</h3>
                <p>
                    You have an opportunity to “freeze” your subscription for a certain period
                    during the year without losing any money.
                    <br />
                    Minimum “freezing” period of your account is 1 week, maximum - 4 weeks.
                    <br />
                    During this time our service won’t be available to you, but on resuming your
                    subscription you will be able to use our service again. Your assets will
                    stay untouched.
                </p>
                <div className="form-container">
                    <div className="hide noFreezeAvailable row withForm">
                        <div className="col-xs-12">
                            <span>
                            <b>
                            You have used all freezings
                            </b>
                            </span>
                        </div>
                    </div>
                    <div className="freezeFormAndCounts">
                        <div className="counts row">
                            <div className="col-xs-6">
                                <span className="left">
                                Left:
                                <span className="count">
                                {this.state.day} days
                                </span>
                                </span>
                            </div>
                        </div>
                        <div className="row withForm">
                            <div className="col-xs-6">
                                <span>
                                <span className="translation_missing" title="translation missing: en.dashboard.period">Period</span>
                                </span>
                                <select className="freeze_days" id="freeze_days"
                                        className="form-control">
                                    <option value="7">7 days</option>
                                    <option value="8">8 days</option>
                                    <option value="9">9 days</option>
                                    <option value="10">10 days</option>
                                    <option value="11">11 days</option>
                                    <option value="12">12 days</option>
                                    <option value="13">13 days</option>
                                    <option value="14">14 days</option>
                                    <option value="15">15 days</option>
                                    <option value="16">16 days</option>
                                    <option value="17">17 days</option>
                                    <option value="18">18 days</option>
                                    <option value="19">19 days</option>
                                    <option value="20">20 days</option>
                                    <option value="21">21 days</option>
                                    <option value="22">22 days</option>
                                    <option value="23">23 days</option>
                                    <option value="24">24 days</option>
                                    <option value="25">25 days</option>
                                    <option value="26">26 days</option>
                                    <option value="27">27 days</option>
                                    <option value="28">28 days</option>
                                </select>
                            </div>
                            <div className="col-xs-6">
                                <img alt="Loading..." className="preLoading"
                                     src="data:image/gif;base64,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"
                                     style={{display: "none",}} />

                                <input className="btn btn-md green" name="commit" type="submit" value="Freeze Account"/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <p>
                If you unfreeze your account before the stated time, you'll be additionally
                charged a one day subscription price.
            </p>
            <table className="table table-striped frozenLogs" id="noRows">
                <thead>
                <tr>
                    <th style={{width: "35%",}}>Frozen At</th>
                    <th>Frozen Till</th>
                    <th>Unfrozen At</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps,  {SetFreeze,userLogoutRequest})(DashboardFirstPart)

