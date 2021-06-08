import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import {getAllUsers} from '../../../store/actions/adminActions';
import {DeleteUser} from '../../../store/actions/adminActions';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            id:"",
        };
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

      handleDeleteClick(evt) {
        const user_id={
            id:evt.target.id,
        }
        console.log(evt.target.td);
        this.props.DeleteUser(user_id);
      };
    componentDidMount() {
        this.props.getAllUsers();
    }

    render() {
        const users = this.props.users;
        const tablebody=users.map(value => 
            <tr>
                {value.id!='0' &&
                    <td style={{textAlign:"center"}}>
                        {value.id}
                    </td>
                }
                {value.id!='0' &&
                    <td style={{textAlign:"center"}}>
                        {value.name}
                    </td>
                }
                {value.id!='0' &&
                    <td style={{textAlign:"center"}}>
                        {value.username}
                    </td>
                }
                {value.id!='0' &&
                    <td style={{textAlign:"center"}}>
                        {value.email}
                    </td>
                }
                {value.id!='0' &&
                    <td style={{textAlign:"center"}}>
                        {value.From}
                    </td>
                }
                {value.id!='0' &&
                    <td style={{textAlign:"center"}}>
                        {value.To}
                    </td>
                }
                {value.id!='0' &&
                    <td style={{textAlign:"center"}}>
                        <span id={value.id} onClick={this.handleDeleteClick}><i className="fa fa-close" id={value.id}/></span>
                    </td>
                }
            </tr>
        );
      return (
        <div className="active fade in tab-pane" id="user_tab">
            <div className="margin">
                <div className="col-lg-10 col-md-9">
                    <div className="alert alert-danger fade hide" style={{margin_top: "10px",}}>
                        <span aria-hidden="true" className="glyphicon glyphicon-exclamation-sign"></span>

                    </div>
                    <div className="page-header title font">
                        <h1>User Lists</h1>
                    </div>
                    <div>
                        <div className="table-responsive">
                            <table className="table table-striped" id="profilePayments">
                                <thead>
                                    <tr>
                                        <th style={{textAlign:"center"}}>ID</th>
                                        <th style={{textAlign:"center"}}>Name</th>
                                        <th style={{textAlign:"center"}}>User Name</th>
                                        <th style={{textAlign:"center"}}>Email</th>
                                        <th style={{textAlign:"center"}}>From</th>
                                        <th style={{textAlign:"center"}}>To</th>
                                        <th style={{textAlign:"center"}}>Action</th>
                                    </tr>
                                </thead>
                                
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
        users: state.admin.users
    }
}

export default connect(mapStateToProps, {getAllUsers, DeleteUser})(Users)

