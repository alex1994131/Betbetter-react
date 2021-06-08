import React, { Component } from 'react';


class Sidebar extends Component {
  render() {
    return (
        <div className="navbar-wrapper visible-xs visible-sm">
            <div className="navbar navbar-default sub-navbar">
                <div className="navbar-header">
                    <button className="navbar-toggle" data-target="#sub-navbar" data-toggle="collapse" type="button">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <span className="title"
                          style={{font_size: "21px", font_weight: "bold", padding_top: "10px", display: "inline-block", padding_left: "14px",}}></span>
                </div>
                <div className="navbar-collapse collapse" id="sub-navbar">
                    <ul className="nav navbar-nav profile-nav">
                        <li className="active">
                            <a style={{marginRight:'0px'}} className="dashboard" data-toggle="pill" 
                            href="https://www.betburger.com/profile#user_tab">User</a>
                        </li>
                        <li className="multifilter">
                            <a style={{marginRight:'0px'}} className="multi" data-toggle="pill"
                            href="https://www.betburger.com/profile#apitoken_tab">
                                API
                            </a>
                        </li>
                        <li>
                            <a style={{marginRight:'0px'}} className="payments" data-toggle="pill"
                            href="https://www.betburger.com/profile#payment_tab">Payment</a>
                        </li>
                        <li>
                            <a style={{marginRight:'0px'}} className="api" data-toggle="pill"
                           href="https://www.betburger.com/profile#filter_tab">Filter</a>
                        </li>
                        <li>
                            <a style={{marginRight:'0px'}} className="currencies" data-toggle="pill"
                            href="https://www.betburger.com/profile#membership_tab">Membership</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default Sidebar;
