import React, { Component } from 'react';
import { connect } from 'react-redux';
import { is_session, userLogoutRequest } from '../../../store/actions/usersActions';
import jwt from 'jsonwebtoken';
class TopNav extends Component {
  render() {
    return (
        <nav className="navbar navbar-default topNavbar">
            <div className="container">
                <div className="navbar-header">
                    <button aria-controls="navbar" aria-expanded="false" className="navbar-toggle collapsed" data-target="#navbar"
                            data-toggle="collapse" type="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse" id="navbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="prematchNav active">
                            <a href="/pt_bet">Surebets</a>
                        </li>
                        {jwt.decode(localStorage.getItem('jwtToken')).role===1 &&
                            <li>
                                <a className="signup logo_white " href="/admin">Admin</a>
                            </li>
                        }
                        {jwt.decode(localStorage.getItem('jwtToken')).role!=1 &&
                            <li>
                                <a className="signup logo_white " href="/pt_public">A Minha Conta</a>
                            </li>
                        }
                        <li className="dropdown language-select drop-lang">
                            <button aria-expanded="false" aria-haspopup="true" className="dropdown-toggle drop-language-button"
                                    data-toggle="dropdown" id="drop-language" type="button">
                                <span className="pt flags-lang">
                                    drop
                                </span>
                            </button>
                            <ul aria-labelledby="drop-language" className="dropdown-menu dropdown-language">
                                <li>
                                    <a className="actual" href="/bet">
                                        <span className="en flags-lang"></span>
                                        English
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="/pt_bet">
                                        <span className="pt flags-lang"></span>
                                        Portugal
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={()=>this.props.userLogoutRequest()}>Terminar sessão</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

const mapDispatchToProps = {
    userLogoutRequest,
    is_session
}

export default connect(null, mapDispatchToProps)(TopNav);
