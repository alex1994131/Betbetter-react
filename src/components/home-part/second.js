import React, { Component } from 'react';


class Second extends Component {
  render() {
    return (
        <div className="gray-block">
            <div className="container">
                <h2 className="medium-title">Arb Helper - extension for direct link to bookmakers</h2>
                <div className="row row-helper">
                    <div className="col-lg-5 col-md-12 helper-text">
                        <p>This extension helps you arb. It saves you time looking for the outcome you need and avoiding
                            potential mistakes while betting. Bookmakers do not see the source of the redirect, so your
                            browser activity remains undetectable.</p>
                        <a className="btn red-bordered-btn"
                        href="https://www.betburger.com/manual/arb-helper-plugin-for-direct-link-to-bookmakers"
                        target="_blank">
                            <i className="icon icon-chrome"></i>
                            Find out more
                        </a>
                    </div>
                    <div className="col-lg-6 col-lg-offset-1 col-md-12">
                        <div className="image-holder">
                            <img alt="arb helper"
                                src="../../assets/img/helper.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Second;
