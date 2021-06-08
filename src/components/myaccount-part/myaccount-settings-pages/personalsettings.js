import React, { Component } from 'react';


class PersonalSettings extends Component {
  render() {
    return (
        <div>
        <form className="editUserPersonal row" id="edit_user" action="https://www.betburger.com/profile/personal_settings" acceptCharset="UTF-8" data-remote="true" method="post">
            <input name="utf8" type="hidden" value="✓" />
            <input 
                type="hidden" name="_method" value="put" />
            <div className="info-holder form-group col-sm-6 col-md-12 required">
                <div className="row">
                    <div className="col-md-5 col-xs-12 with-desc">
                        <label htmlFor="user_full_name">Full Name</label>
                        <span className="small">enter your surname and first name</span>
                    </div>
                    <div className="col-md-5 col-xs-12 setting_input">
                        <input className="form-control" value="Alex K" type="text"
                               name="user[full_name]" id="user_full_name" />
                        <span className="help-block hidden"></span>
                    </div>
                </div>
            </div>
            <div className="info-holder form-group conform col-xs-12">
                <div className="row">
                    <div className="col-md-10 col-xs-12 text-right">
                        <a className="btn blue" name="commit" href="/signin">Update</a>
                    </div>
                </div>
            </div>
        </form>
        </div>
    );
  }
}

export default PersonalSettings;
