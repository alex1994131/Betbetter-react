import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import { is_session, userLogoutRequest } from '../../../store/actions/usersActions';

class PricingHeader extends Component {
  render() {
    
    return (
        <header className="header" style={{display:"block"}}>
        <div className="container">
          <div className="header_inner">
                <a alt="Arbitrage betting service №1" className="logo" href="/pt" title="BetBurger">
                    <img alt="BETBURGER"
                        src="../../assets/img/logo_black.png" />
                    </a>
                    <a alt="Arbitrage betting service №1" className="logo-mobile" href="/pt"title="BetBurger">
                        <img alt="BETBURGER"
                             src="../../assets/img/logo_black.png" />
                    </a>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
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
                        <a aria-expanded="false" aria-haspopup="true" className="account dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" id="arbs_dropdown" type="button"> Surebets
                        </a>
                        <ul aria-labelledby="arbs_dropdown" className="dropdown-menu dropdown-profile">
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
                  </ul>
                </nav>
              </div>
              <div className="actions">
              <div className="dropdown language-select drop-lang lang-dropdown">
                <span aria-expanded="false" aria-haspopup="true" className="lang-btn dropdown-toggle drop-language-button" data-toggle="dropdown" id="drop-language" type="button" style={{width: "24px"}}>
                  <span className="lang-btn__flag">
                    <img alt="Portugal" src="../../../assets/img/pt.png"/>
                  </span>
                </span>
                        
                <ul aria-labelledby="drop-language" className="dropdown-menu dropdown-language">
                  <li>
                    <a style={{marginRight:"0px"}} className="notactual" href="/pricing">
                      <div className="lang-btn__flag lang-btn_long">
                        <img alt="English" src="../../../assets/img/en.png" />English
                      </div>
                    </a>
                  </li>
                  <li>
                    <a style={{marginRight:"0px"}} className="actual" href="/pt_pricing">
                      <div className="lang-btn__flag lang-btn_long">
                        <img alt="Portugal" src="../../../assets/img/pt.png"/>Portugal
                      </div>
                    </a>
                  </li>         
                </ul>
              </div>
                <div className="signin">
                  <a className="btn green-btn" href="javascript:void(0)" onClick={()=>this.props.userLogoutRequest()}>Terminar sessão</a>
                </div>  
            </div>
            </div>
          </div>
        </div>
      </header> 
    );
  }
}
const mapDispatchToProps = {
    userLogoutRequest,
    is_session
}

export default connect(null, mapDispatchToProps)(PricingHeader)
