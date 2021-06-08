import React, { Component } from 'react';
import Settings from './settings.js';
import PersonalSettings from './personalsettings.js';
import ChangeCurrent from './changecurrent.js';
import LoginButton from './loginbutton.js';


class Setting extends Component {
  render() {
    return (
        <div className="tab-pane fade" id="settings_tab">
            <div className="margin" id="cta">
                <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12">
                    <div className="alert hidden flashAlert forAlerts" role="alert">
                        <span aria-hidden="" className="glyphicon glyphicon-exclamation-sign"></span>
                    </div>
                    <div className="alert alert-danger fade flashAlert hide">
                        <button className="close" data-dismiss="alert">
                            ×
                        </button>

                    </div>
                </div>
                <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12">
                    <div className="page-header title font">
                        <h1>Definições pessoais</h1>
                    </div>
                </div>
            </div>
            <div className="col-lg-10 col-md-9">
                <ChangeCurrent />
            </div>
        </div>
    );
  }
}

export default Setting;
