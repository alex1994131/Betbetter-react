import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import {getAllPayments} from '../../../store/actions/adminActions';
import {GETClient} from '../../../store/actions/adminActions';

class Payments extends Component {
    constructor() {
        super();
        this.state = {
          client_id: '',
          secret:'',
        };
        this.handleSecChange = this.handleSecChange.bind(this);
        this.handleIDChange = this.handleIDChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
    
        if (!this.state.secret) {
          return this.setState({ error: ' is required' });
        } 
        if (!this.state.client_id) {
            return this.setState({ error: ' is required' });
          }
        const client_data={
            id:this.state.client_id,
            secret:this.state.secret
        }
        this.props.GETClient(client_data);
      }
    
      handleSecChange(evt) {
        this.setState({
          secret: evt.target.value,
        });
      };

      handleIDChange(evt) {
        this.setState({
            client_id: evt.target.value,
        });
      };
    componentDidMount() {
        this.props.getAllPayments();
    }
    
  render() {
    const payments = this.props.payments;
    console.log(payments);
    const tablebody=payments.map(value => 
        <tr>
            <td style={{textAlign:"center"}}>
                {value.id}
            </td>
            <td style={{textAlign:"center"}}>
                {value.email}
            </td>
            <td style={{textAlign:"center"}}>
                {value.price}
            </td>
            <td style={{textAlign:"center"}}>
                {value.account_time}
            </td>
        </tr>
    );
    return (
        <div className="tab-pane fade" id="payment_tab">
            <div className="margin">
                <div className="col-lg-10 col-md-9">
                    <div className="alert alert-danger fade hide" style={{margin_top: "10px",}}>
                        <span aria-hidden="true" className="glyphicon glyphicon-exclamation-sign"></span>

                    </div>
                    <div className="page-header title font">
                        <h1>Payment Settings</h1>
                    </div>
                    <form id="form_api_token" role="form"  onSubmit={this.handleSubmit} method="post">
                        <div className="row" style={{alignItems:"center", display:"flex"}}>
                            <div className="col-md-1 col-xs-12">
                                <label>Client_ID:</label>  
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <input className="form-control"  type="text" name="account" id="account" value={this.state.client_id} onChange={this.handleIDChange}/>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"10px",alignItems:"center", display:"flex"}}>
                            <div className="col-md-1 col-xs-12">
                                <label>SECRET:</label>  
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <input className="form-control"  type="text" name="secret" id="secret" value={this.state.secret} onChange={this.handleSecChange}/>
                            </div>
                            <div className="col-md-4 col-xs-12 text-left">
                                <input type="submit" className="btn blue" name="api" value="Update" />
                            </div>
                        </div>
                    </form>
                    <div style={{marginTop:'50px'}}>
                        <div className="table-responsive">
                            <table className="table table-striped" id="profilePayments">
                                <thead>
                                <tr>
                                    <th style={{textAlign:"center"}}>ID</th>
                                    <th style={{textAlign:"center"}}>UserName</th>
                                    <th style={{textAlign:"center"}}>Price</th>
                                    <th style={{textAlign:"center"}}>Payment Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                </tbody>
                                <tbody>
                                    {tablebody}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        payments: state.admin.payments
    }
}

export default connect(mapStateToProps, {getAllPayments,GETClient})(Payments)

