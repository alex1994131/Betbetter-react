import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { adminGetToken } from '../../../store/actions/adminActions';


class Payments extends Component {

    constructor() {
        super();
        this.state = {
          token: '',
        };
        this.handleTokenChange = this.handleTokenChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
    
        if (!this.state.token) {
          return this.setState({ error: 'apitoken is required' });
        }
        this.props.adminGetToken(this.state.token);
      }
    
      handleTokenChange(evt) {
        this.setState({
          token: evt.target.value,
        });
      };


  render() {
    return (
        <div className="tab-pane fade" id="apitoken_tab">
            <div className="margin">
                <div className="col-lg-10 col-md-9">
                    <div className="alert alert-danger fade hide" style={{margin_top: "10px"}}>
                        <span aria-hidden="true" className="glyphicon glyphicon-exclamation-sign"></span>

                    </div>
                    <div className="page-header title font">
                        <h1>API Settings</h1>
                    </div>
                    <form className="row" id="form_api_token" role="form"  onSubmit={this.handleSubmit} method="post">
                        <div className="info-holder form-group col-sm-6 col-md-12 required">
                            <div className="row" style={{alignItems:"center", display:"flex"}}>
                                <div className="col-md-1 col-xs-12">
                                    <label>TOKEN:</label>  
                                </div>
                                <div className="col-md-9 col-xs-12">
                                    <input className="form-control"  type="text" name="api" id="api_token" value={this.state.token} onChange={this.handleTokenChange}/>
                                </div>
                                <div className="col-md-2 col-xs-12">
                                    <input type="submit" className="btn blue" name="api" value="Update" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

// Payments.propTypes = {
//     userLoginRequest: PropTypes.func.isRequired,
// };

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {adminGetToken})(Payments)

