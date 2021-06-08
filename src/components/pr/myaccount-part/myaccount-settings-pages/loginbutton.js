import React, { Component } from 'react';


class LoginButton extends Component {
  render() {
    return (
        <div>
        <h4 className="change-password-title">
            Betfair login
        </h4>
        <div className="row betfair-section-js">
            <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12">
                <hr className="password-form-hr" />
                <div className="row">
                    <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12 betfair-section-css">
                        <a className="btn btn-md green"
                           href="https://identitysso.betfair.com/view/vendor-login?client_id=51006&amp;response_type=code&amp;redirect_uri=betfair_token&amp;rfr=29017&amp;PI=29017&amp;pi=partner29017">
                            Betfair login
                        </a>
                    </div>
                </div>
            </div>

        </div>
        <div className="col-md-10 header">
            <div className="section">
                <h4 className="text-center">Insatisfeito?</h4>
                <div className="picture margin20">
                    <img alt="services2" className="img-responsive"
                         src="../myaccount/denied-093234a6f5d2ce89542553f4990e453f9cb0250dd16b02b2c9b19be89aee07bc.png" />
                </div>
                <div className="text-center">
                    <form className="button_to" method="post" action="https://www.betburger.com/users">
                        <input type="hidden" name="_method" value="delete" /><input
                            data-confirm="Tem a certeza?" className="btn red-btn" type="submit"
                            value="Eliminar a minha conta" /><input type="hidden" name="authenticity_token"
                                                             value="GB0GDkXPyERGrgiKCS6rrNks71A1zfi+YtpiRh1d8RPxty3GUy4j2hOTrd7uqr6JN9g/h44BiunOw6IcaK8WGg==" />
                    </form>
                </div>
            </div>
        </div>

        </div>
    );
  }
}

export default LoginButton;
