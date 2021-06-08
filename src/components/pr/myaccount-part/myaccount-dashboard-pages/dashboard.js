import React, { Component } from 'react';
import DashboardFirstPart from './dashboard-firstpart.js'
import DashboardSecondPart from './dashboard-secondpart.js'


class Dashboard extends Component {
  render() {
    return (
        <div className="active fade in tab-pane" id="main">
            <div className="margin dashboardComponent" id="cta">
                <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12">
                    <div className="alert hidden flashAlert forAlerts" role="alert" style={{margin_top: "10px",}}>
                        <span aria-hidden="true" className="glyphicon glyphicon-exclamation-sign"></span>
                    </div>
                    <div className="alert alert-danger fade hide" style={{margin_top: "10px",}}>
                        <span aria-hidden="true" className="glyphicon glyphicon-exclamation-sign"></span>

                    </div>
                </div>
                <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12">
                    <div className="page-header title font">
                        <h1>A minha conta</h1>
                    </div>
                </div>
                <div id="margin-sm">
                    <DashboardFirstPart/>
                </div>
            </div>
        </div>
    );
  }
}

export default Dashboard;
