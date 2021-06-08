import React, { Component } from 'react';


import '../../myaccount/application-4814ae6252250a536485037db5c91a656a4ac541fae6bce9e725bc9615c09e21.css';
import '../../myaccount/cookieconsent.min.css';
import '../../myaccount/profile-0e264f977fe16faa38f2b88cf6f708ff57966841e40ccd70aa85df247c4c807a.css';

import MyAccountSideBar from './myaccount-part/sidebar.js';
import MyAccountFooter from './myaccount-part/footer.js';
import MyAccountHeader from './myaccount-part/header.js';
import MyAccoutMaximumSideBar from './myaccount-part/maximum-sidebar.js';
import MyAccountDashboard from './myaccount-part/myaccount-dashboard-pages/dashboard.js';
import MyAccountMutiFilter from './myaccount-part/myaccount-multifilter/multifilter.js';
import MyAccountPayments from './myaccount-part/myaccount-payment-page/payment.js';
import MyAccountAccounting from './myaccount-part/myaccount-accounting-page/accounting.js';
import MyAccountSetting from './myaccount-part/myaccount-settings-pages/setting.js';
import MyAccountApi from './myaccount-part/myaccount-api/myaccapi.js';
import MyFillterEdit from './myaccount-part/fillter-edit/fillteredit.js';


class Public extends Component {
  render() {
    return (
      <div>
        <MyAccountHeader/>
        <MyAccountSideBar/>
        <div className = "container-holder">
          <div className = "container" id="profileMainComponent">
            <div className = "container-wrapper wrap" id="content">
              <div className = "row">
                <MyAccoutMaximumSideBar/>
                <div className = "tab-content">
                    <MyAccountDashboard />
                    <MyAccountMutiFilter />
                    <MyAccountPayments />
                    <MyAccountAccounting />
                    <MyAccountSetting />
                    <MyAccountApi />
                </div>
              </div>
            </div>
          </div>
        </div>
        <MyAccountFooter/>
      </div>
    );
  }
}

export default Public;