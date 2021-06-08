import React, { Component } from 'react';


class DashboardSecondPart extends Component {
  render() {
    return (
        <div className="col-md-5 col-sm-12 col-xs-12 feature">
            <h3 className="title-small"><span className="translation_missing"
                                          title="translation missing: en.dashboard.my_subscription">My Subscription</span>
            </h3>
            <div className="active tab-pane" id="main">
                <div className="info-holder paidInfo">
                    <div className="tab-content">
                        <div className="tab-pane active fade in" id="arbsSubscription"
                             role="tabpanel">
                            <table className="table table-striped payment-info-table">
                                <tbody>
                                <tr>
                                    <td>
                                        <strong>Package</strong>
                                    </td>
                                    <td>Pay Date</td>
                                    <td>Active till</td>
                                </tr>
                                <tr className="with_paid_info">
                                    <td>Prematch 30</td>
                                    <td>
                                        <time dateTime="2020-10-30T07:20:45Z" data-local="time"
                                              data-format="%Y-%m-%d %H:%M:%S"
                                              title="October 30, 2020 at 10:20am MST"
                                              data-localized=""
                                              aria-label="2020-10-30 10:20:45">2020-10-30
                                            10:20:45
                                        </time>
                                    </td>
                                    <td className="liveArbsPaidTill"
                                        data-format="YYYY-MM-DD HH:mm:ss" data-time="0">
                                        <strong className="text-danger"><span
                                                className="translation_missing"
                                                title="translation missing: en.tariff.Not Payed">Not Payed</span></strong>
                                    </td>
                                </tr>
                                <tr className="with_paid_info">
                                    <td>Free</td>
                                    <td>
                                        <strong className="text-danger"><span
                                                className="translation_missing"
                                                title="translation missing: en.tariff.Not Payed">Not Payed</span></strong>
                                    </td>
                                    <td className="liveArbsPaidTill"
                                        data-format="YYYY-MM-DD HH:mm:ss" data-time="0">
                                        <strong className="text-danger"><span
                                                className="translation_missing"
                                                title="translation missing: en.tariff.Not Payed">Not Payed</span></strong>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="info-holder">
                                <span><a className="btn green btn-md marginTop10-xs"
                                         href="#">Extend subscription</a></span>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="valuebetsSubscription" role="tabpanel">
                            <table className="table table-striped payment-info-table">
                                <tbody>
                                <tr>
                                    <td>
                                        <strong>Package</strong>
                                    </td>
                                    <td>Pay Date</td>
                                    <td>Active till</td>
                                </tr>
                                <tr className="with_paid_info">
                                    <td>Free</td>
                                    <td>
                                        <strong className="text-danger"><span
                                                className="translation_missing"
                                                title="translation missing: en.tariff.Not Payed">Not Payed</span></strong>
                                    </td>
                                    <td className="prematchValuebetsPaidTill"
                                        data-format="YYYY-MM-DD HH:mm:ss" data-time="0">
                                        <strong className="text-danger"><span
                                                className="translation_missing"
                                                title="translation missing: en.tariff.Not Payed">Not Payed</span></strong>
                                    </td>
                                </tr>
                                <tr className="with_paid_info">
                                    <td>Free</td>
                                    <td>
                                        <strong className="text-danger"><span
                                                className="translation_missing"
                                                title="translation missing: en.tariff.Not Payed">Not Payed</span></strong>
                                    </td>
                                    <td className="liveValuebetsPaidTill"
                                        data-format="YYYY-MM-DD HH:mm:ss" data-time="0">
                                        <strong className="text-danger"><span
                                                className="translation_missing"
                                                title="translation missing: en.tariff.Not Payed">Not Payed</span></strong>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="info-holder">
                                <span><a className="btn green btn-md marginTop10-xs"
                                         href="#">Change subscription</a></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <h3 className="title-small">Promo Codes</h3>
            <div className="active tab-pane" id="main">
                <div className="info-holder paidInfo promo-code">
                    <form onSubmit="return false;" className="form-horizontal promocode-form"
                          role="form" action="#"
                          acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden"
                                                                      value="✓" /><input
                            type="hidden" name="authenticity_token"
                            value="GB0GDkXPyERGrgiKCS6rrNks71A1zfi+YtpiRh1d8RPxty3GUy4j2hOTrd7uqr6JN9g/h44BiunOw6IcaK8WGg==" />
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <th colSpan="2">Input your promocode for bonus / subscription
                                    activation
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" name="promocode" id="promocode" value=""
                                           className="form-control" style={{font_size: "small",}} />
                                    <span className="help-block hidden"></span>
                                </td>
                                <td className="with_active_button">
                                    <img alt="Loading..." className="preLoading"
                                         src="data:image/gif;base64,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"
                                         style={{display: "none",}} />

                                    <a className="btn green btn-md marginTop10-xs" href="/signin">Activate
                                        code
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>

                </div>
            </div>
        </div>
    );
  }
}

export default DashboardSecondPart;
