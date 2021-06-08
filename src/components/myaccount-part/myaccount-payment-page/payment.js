import React, { Component } from 'react';
import {getAllPayments} from '../../../store/actions/adminActions';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
class Payments extends Component {
    componentDidMount() {
        this.props.getAllPayments();
    }   
  render() {
    const payments = this.props.payments;
    var id=jwt.decode(localStorage.getItem('jwtToken')).email;
    console.log(id);
    console.log(payments);
    const tablebody=payments.map(value => 
        <tr>
            {id==value.email &&
                <td style={{textAlign:"center"}}>
                    {value.id}
                </td>
            }
            {id==value.email &&
                <td style={{textAlign:"center"}}>
                    PayPal
                </td>
            }
            {id==value.email &&
                <td style={{textAlign:"center"}}>
                    {value.price}
                </td>
            }
            {id==value.email &&
                <td style={{textAlign:"center"}}>
                    {value.account_time}
                </td>
            }
        </tr>       
    );
    return (
        <div className="tab-pane fade" id="payments">
            <div className="margin">
                <div className="col-lg-10 col-md-9">
                    <div className="alert alert-danger fade hide" style={{margin_top: "10px",}}>
                        <span aria-hidden="true" className="glyphicon glyphicon-exclamation-sign"></span>

                    </div>
                    <div className="page-header title font">
                        <h1>Payments</h1>
                    </div>
                    <div>
                        <div className="table-responsive">
                            <table className="table table-striped" id="profilePayments">
                                <thead>
                                <tr>
                                    <th style={{textAlign:"center"}}>ID</th>
                                    <th style={{textAlign:"center"}}>Payment Method</th>
                                    <th style={{textAlign:"center"}}>Amount</th>
                                    <th style={{textAlign:"center"}}>Date</th>
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
export default connect(mapStateToProps, {getAllPayments})(Payments)

