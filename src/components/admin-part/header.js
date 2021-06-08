import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogoutRequest } from '../../store/actions/usersActions';

class Header extends Component {
  render() {
    return (
        <header className="navbar navbar-inverse normal" role="banner" style={{display: "block"}}>
            <div className="container">
                <div className="navbar-header">
                    <button className="navbar-toggle" data-target=".bs-navbar-collapse" data-toggle="collapse" type="button">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a alt="Arbitrage betting service №1" className="bb_brand2 logo navbar-brand" href="/"
                       title="BetBurger"></a>
                    <a alt="Arbitrage betting service №1" className="navbar-brand" href="/"
                       title="BetBurger">BetBetter</a>
                </div>
                <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <div className="dropdown">
                                <button aria-expanded="false" aria-haspopup="true"
                                        className="drop-pricing-button dropdown-toggle logo_white" data-hover="dropdown"
                                        data-toggle="dropdown" id="arbs_dropdown" type="button">
                                    Surebets
                                </button>
                                <ul aria-labelledby="arbs_dropdown" className="dropdown-menu dropdown-prising">
                                    <li>
                                        <a className="dropdown-item" href="/pricing">Surebets pricing</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/bet">Surebets Prematch</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="active">
                            <a className="signup logo_white " href="/admin">Admin</a>
                        </li>
                        <li>
                            <a className="signup" rel="nofollow" data-method="delete" href="javascript:void(0)" onClick={()=>this.props.userLogoutRequest()}>Sign out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
  }
}

const mapDispatchToProps = {
    userLogoutRequest
}
  
export default connect(null, mapDispatchToProps)(Header)
