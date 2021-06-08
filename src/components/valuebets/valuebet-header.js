import React, { Component } from 'react';


class ValueBetHeader extends Component {
  render() {
    return (
        <div>
            <div className="container relative">
                <div className="centerLogo text-center">
                    <div className="searchByEvent">
                        <div className="search-form">
                            <span className="search-icon" style={{display: "inline",}}></span>
                            <input id="search-input" placeholder="Search events..." type="text" />
                        </div>
                    </div>
                    <div>
                        <a href="https://www.betburger.com/">
                            <span className="logo"></span>
                            <span className="text">
                                BetBurger
                            </span>
                        </a>
                    </div>
                </div>
            </div>
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
                            <li className="prematchNav">
                                <a href="https://www.betburger.com/arbs">Surebets</a>
                            </li>
                            <li className="valuebetsNav">
                                <a href="https://www.betburger.com/valuebets">Valuebets</a>
                            </li>
                            <li className="apiNav">
                                <a href="https://www.betburger.com/api">API</a>
                            </li>
                            <li>
                                <a href="https://www.betburger.com/prices-valuebets">Pricing</a>
                            </li>
                            <li>
                                <a href="https://www.betburger.com/help">Help Center</a>
                            </li>
                            <li>
                                <a href="https://www.betburger.com/profile">My Account</a>
                            </li>
                            <li className="dropdown language-select drop-lang">
                                <button aria-expanded="false" aria-haspopup="true" className="dropdown-toggle drop-language-button"
                                        data-toggle="dropdown" id="drop-language" type="button">
                                    <span className="en flags-lang">
                                    drop
                                    </span>
                                </button>
                                <ul aria-labelledby="drop-language" className="dropdown-menu dropdown-language">
                                    <li>
                                        <a className="actual" href="https://www.betburger.com/valuebets">
                                            <span className="en flags-lang"></span>
                                            English
                                        </a>
                                    </li>
                                    <li>
                                        <a className="notactual" href="https://www.betburger.com/gb/valuebets">
                                            <span className="en flags-lang"></span>
                                            Great Britain
                                        </a>
                                    </li>
                                    <li>
                                        <a className="notactual" href="https://www.betburger.com/es/valuebets">
                                            <span className="es flags-lang"></span>
                                            España
                                        </a>
                                    </li>
                                    <li>
                                        <a className="notactual" href="https://www.betburger.com/co/valuebets">
                                            <span className="co flags-lang"></span>
                                            Colombia
                                        </a>
                                    </li>
                                    <li>
                                        <a className="notactual" href="https://www.betburger.com/de/valuebets">
                                            <span className="de flags-lang"></span>
                                            Deutschland
                                        </a>
                                    </li>
                                    <li>
                                        <a className="notactual" href="https://www.betburger.com/at/valuebets">
                                            <span className="at flags-lang"></span>
                                            Österreich
                                        </a>
                                    </li>
                                    <li>
                                        <a className="notactual" href="https://www.betburger.com/gr/valuebets">
                                            <span className="gr flags-lang"></span>
                                            Ελλάδα
                                        </a>
                                    </li>
                                    <li>
                                        <a className="notactual" href="https://www.betburger.com/it/valuebets">
                                            <span className="it flags-lang"></span>
                                            Italy
                                        </a>
                                    </li>
                                    <li>
                                        <a className="notactual" href="https://www.betburger.com/fr/valuebets">
                                            <span className="fr flags-lang"></span>
                                            France
                                        </a>
                                    </li>
                                    <li>
                                        <a className="notactual" href="https://www.betburger.com/pt/valuebets">
                                            <span className="pt flags-lang"></span>
                                            Portugal
                                        </a>
                                    </li>
                                    <li>
                                        <a className="notactual" href="https://www.betburger.com/cn/valuebets">
                                            <span className="cn flags-lang"></span>
                                            China
                                        </a>
                                    </li>
                                    <li>
                                        <a className="notactual" href="https://www.betburger.com/ro/valuebets">
                                            <span className="ro flags-lang"></span>
                                            Romania
                                        </a>
                                    </li>
                                </ul>
            
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
  }
}

export default ValueBetHeader;