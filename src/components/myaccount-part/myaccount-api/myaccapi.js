import React, { Component } from 'react';


class MyAccApi extends Component {
  render() {
    return (
        <div className="tab-pane fade" id="api_tab">
            <div className="margin">
                <div className="col-lg-10 col-md-9">
                    <div className="page-header title font">
                        <h1>API</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <form className="form-inline">
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">Your API token:</div>
                                        <input type="text" name="token" id="token" disabled="disabled"
                                               className="form-control"
                                               placeholder="You need to buy a subscription to access the API"
                                               size="60" />
                                    </div>
                                </div>
                                <a className="btn btn-primary"
                                   href="/prices">Tariffs</a>
                            </form>
                        </div>
                    </div>
                    <div className="row mb-25">
                        <div className="col-xs-12">
                            <div className="alert hidden flashAlert forAlerts" role="alert"
                                 style={{margin_top: "10px",}}>
                                <span aria-hidden="true"
                                      className="glyphicon glyphicon-exclamation-sign"></span>
                            </div>
                            <div className="alert alert-danger fade hide" style={{margin_top: "10px",}}>
                                <span aria-hidden="true"
                                      className="glyphicon glyphicon-exclamation-sign"></span>

                            </div>
                        </div>
                    </div>
                    <div className="row mb-25">
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <p>API is a way to fetch hundreds of surebets per minute automatically. You can
                                find out more here:</p>
                            <p><a target="_blank" href="#">Check out our
                                API product page</a></p>
                            <p><a target="_blank"
                                  href="#">Read through
                                a data request sample article</a></p>
                            <p>
                                Swagger documentation: <a href="https://rest-api-lv.betburger.com/doc.html"
                                                          target="_blank">Live surebets</a>, <a
                                    href="https://rest-api-pr.betburger.com/doc.html" target="_blank">Prematch
                                surebets</a>
                            </p>
                            <p><a target="_blank" href="#">See our terms of
                                use</a></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <p>
                                <span className="red">IMPORTANT!</span>
                                This is your own private token. Do not share it with anyone!
                            </p>
                            <p>If you need help and reading the documentation (<a
                                    href="https://rest-api-lv.betburger.com/doc.html"
                                    target="_blank">live</a>, <a
                                    href="https://rest-api-pr.betburger.com/doc.html" target="_blank">prematch</a>)
                                didn’t answer your question, <a href="#">submit
                                    a support ticket here</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default MyAccApi;
