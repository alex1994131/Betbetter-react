import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
        <header className="navbar navbar-inverse normal" role="banner" style={{display: "none"}}>
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
                                <a className="notactual" href="/bet">
                                    <span className="en flags-lang"></span>
                                    English
                                </a>
                            </li>
                            <li>
                                <a className="actual" href="/pt_bet">
                                    <span className="pt flags-lang"></span>
                                    Portugal
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a alt="Arbitrage betting service №1" className="bb_brand2 logo navbar-brand" href="/pt"
                    title="BetBurger"></a>
                    <a alt="Arbitrage betting service №1" className="navbar-brand" href="/pt"
                    title="BetBurger">BetBurger</a>
                </div>
                <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="">
                            <a href="/pt_bet">Surebets</a>
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
                </nav>
            </div>
        </header>
    );
  }
}

export default Header;
