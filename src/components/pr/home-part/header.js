import React, { Component } from 'react';

import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import {is_session, userLogoutRequest} from '../../../store/actions/usersActions';

class Header extends Component {

  componentDidMount() {
      
  }

  render() {
    console.log(this.props.isAuthenticated);
    const isAuthenticated = this.props.isAuthenticated;
    

    return (
        <header className="header" style={{display:"block"}}>
        <div className="container">
          <div className="header_inner" style={{border_bottom: "1px solid #777b80",}}>
            <a alt="Arbitrage betting service №1" className="logo" href="/pt" title="BetBurger">
              <img alt="BETBURGER" src="../../../assets/img/logo.svg" />
            </a>
            <a alt="Arbitrage betting service №1" className="logo-mobile" href="/pt" title="BetBurger">
              <img alt="BETBURGER" src="../../../assets/img/logo.svg" />
            </a>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div className="navbar-header">
                  <button className="navbar-toggle" data-target=".bs-navbar-collapse" data-toggle="collapse" type="button">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>

                  <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                    <div className="text-center visible-sm visible-xs">
                      <span className="bs-navbar-collapse__toggle glyphicon glyphicon-remove" data-target=".bs-navbar-collapse" data-toggle="collapse" type="button"></span>
                    </div>

                    <ul className="nav-list-white">
                      <li>
                        <div className="dropdown profile-dropdown">
                          <a aria-expanded="false" aria-haspopup="true" className="account dropdown-toggle logo_white" data-hover="dropdown" data-toggle="dropdown" id="arbs_dropdown" type="button"> Surebets
                          </a>
                          <ul aria-labelledby="arbs_dropdown" className="dropdown-menu dropdown-profile dropdownhover-bottom">
                            <ul className="user-menu">
                              <li className="dropdown-item">
                                <a className="dropdown-item" href="/pt_pricing">Surebets pricing</a>
                              </li>
                              <li className="dropdown-item">
                                <a className="dropdown-item" href="/pt_bet">Surebets Prematch</a>
                              </li>
                            </ul>
                          </ul>
                        </div>
                      </li>
                      {isAuthenticated == true && jwt.decode(localStorage.getItem('jwtToken')).role===1 &&
                      <li>
                        <a className="signup logo_white " href="/admin">Admin</a>
                      </li>
                      }
                      {isAuthenticated == true && jwt.decode(localStorage.getItem('jwtToken')).role!=1 &&
                        <li>
                          <a className="signup logo_white " href="/pt_public">A Minha Conta</a>
                        </li>
                      }
                    </ul>
                  </nav>
                </div>
                  <div className="actions">
                  <div className="dropdown language-select drop-lang lang-dropdown">
                    <span aria-expanded="false" aria-haspopup="true" className="lang-btn dropdown-toggle drop-language-button" data-toggle="dropdown" id="drop-language" type="button" style={{width: "24px"}}>
                      <span className="lang-btn__flag">
                        <img alt="English" src="../../../assets/img/pt.png" />
                      </span>
                    </span>
                            
                    <ul aria-labelledby="drop-language" className="dropdown-menu dropdown-language">
                      <li>
                        <a style={{marginRight:"0px"}} className="notactual" href="/">
                          <div className="lang-btn__flag lang-btn_long">
                            <img alt="English" src="../../../assets/img/en.png" />English
                          </div>
                        </a>
                      </li>
                      <li>
                        <a style={{marginRight:"0px"}} className="actual" href="/pt">
                          <div className="lang-btn__flag lang-btn_long">
                            <img alt="Portugal" src="../../../assets/img/pt.png"/>Portugal
                          </div>
                        </a>
                      </li>         
                    </ul>
                  </div>
                  {isAuthenticated == true&&
                    <div className="signin">
                      <a className="btn green-btn" href="javascript:void(0)" onClick={()=>this.props.userLogoutRequest()}>Terminar sessão</a>
                    </div>  
                  }
                  {
                    isAuthenticated == false&&
                    <div className="signin">
                        <a className="btn green-btn" href="/signin">Iniciar sessão</a>
                    </div>
                  }
              </div>
              </div>
          </div>
        </div>
      </header> 
    );
  }
}

Header.propTypes = {
  userLogoutRequest: PropTypes.func.isRequired,
  is_session: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  userLogoutRequest,
  is_session
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.users.isAuthenticated
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)