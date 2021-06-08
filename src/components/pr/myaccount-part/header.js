import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogoutRequest } from '../../../store/actions/usersActions';

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
                    <div className="drop-lang dropdown drop-lang-mobile">
                        <button aria-expanded="false" aria-haspopup="true" className="dropdown-toggle drop-language-button"
                                data-toggle="dropdown" id="drop-language-mobile" type="button">
                            <span className="pt flags-lang">
                            drop
                            </span>
                        </button>
                        <ul aria-labelledby="drop-language-mobile" className="dropdown-menu dropdown-language">
                            <li>
                                <a className="actual" href="/public">
                                    <span className="en flags-lang"></span>
                                    English
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="/pt_public">
                                    <span className="pt flags-lang"></span>
                                    Portugal
                                </a>
                            </li>
                        </ul>
        
                    </div>
                    <a alt="Arbitrage betting service №1" className="bb_brand2 logo navbar-brand" href="/pt"
                       title="BetBurger"></a>
                    <a alt="Arbitrage betting service №1" className="navbar-brand" href="/pt"
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
                                        <a className="dropdown-item" href="/pt_pricing">Surebets pricing</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/pt_bet">Surebets Prematch</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="active">
                            <a className="signup logo_white " href="/public">A Minha Conta</a>
                        </li>
                        <li className="dropdown language-select drop-lang">
                            <button aria-expanded="false" aria-haspopup="true" className="dropdown-toggle drop-language-button"
                                    data-toggle="dropdown" id="drop-language" type="button">
                                <span className="pt flags-lang">
                                drop
                                </span>
                            </button>
                            <ul aria-labelledby="drop-language" className="dropdown-menu dropdown-language">
                                <li>
                                    <a className="actual" href="/public">
                                        <span className="en flags-lang"></span>
                                        English
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="/pt_public">
                                        <span className="pt flags-lang"></span>
                                        Portugal
                                    </a>
                                </li>
                            </ul>
        
                        </li>
                        <li>
                            <a className="signup" rel="nofollow" data-method="delete" href="javascript:void(0)" onClick={()=>this.props.userLogoutRequest()}>Terminar sessão</a>
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
