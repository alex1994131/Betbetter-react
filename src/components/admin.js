import React, { Component } from 'react';


import '../myaccount/application-4814ae6252250a536485037db5c91a656a4ac541fae6bce9e725bc9615c09e21.css';
import '../myaccount/cookieconsent.min.css';
import '../myaccount/profile-0e264f977fe16faa38f2b88cf6f708ff57966841e40ccd70aa85df247c4c807a.css';

import MyAdminSideBar from './admin-part/sidebar.js';
import MyAdminHeader from './admin-part/header.js';
import MyAdminMaximumSideBar from './admin-part/max-sidebar.js';
import MyAdminUserList from './admin-part/user-part/userlist.js';
import MyAdminAPIList from './admin-part/apitoken-part/apitoken.js';
import MyAdminPayList from './admin-part/payment-part/paymentlist.js';
import MyAdminFilterList from './admin-part/Filter/filterlist.js';
import MyMemberShipList from './admin-part/membership/membership.js';

class Public extends Component {
  render() {
    return (
      <div>
        <MyAdminHeader/>
        <MyAdminSideBar/>
        <div className = "container-holder">
          <div className = "container" id="profileMainComponent">
            <div className = "container-wrapper wrap" id="content">
              <div className = "row">
                <MyAdminMaximumSideBar/>
                <div className = "tab-content">
                    <MyAdminUserList/>
                    <MyAdminAPIList/>
                    <MyAdminPayList/>
                    <MyAdminFilterList/>
                    <MyMemberShipList/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Public;