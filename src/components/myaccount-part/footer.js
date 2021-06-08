import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
        <div id="footer-white" style={{display: "block"}}>
            <div className="container" style={{margin_bottom:"40px",}}>
                <div className="en_holder row-holder">
                    <div className="footer-holder">
                        <div className="menu">
                            <ul>
                                <li>
                                    <a href="#">
                                        What is Arbitrage Betting?
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        What are Surebets?
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        What are Valuebets?
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Forum
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu">
                            <ul>
                                <li>
                                    <a href="#">Live arbs</a>
                                </li>
                                <li>
                                    <a href="#">Prematch arbs</a>
                                </li>
                                <li>
                                    <a href="#">Valuebets</a>
                                </li>
                                <li>
                                    <a href="#">Odds Comparison</a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu">
                            <ul>
                                <li>
                                    <a href="#">Contact us</a>
                                </li>
                                <li>
                                    <a href="#" title="Calculator">
                                        Calculator
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Bookmakers</a>
                                </li>
                                <li>
                                    <a href="#">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu">
                            <ul>
                                <li>
                                    <a href="#">Service News</a>
                                </li>
                                <li>
                                    <a href="#">Affiliate Program</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="clients">
                <div className="col-md-12">
                    <ul>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms of use</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-12">
                    <ul>
                        <li>
                            <a className="youtube" href="#"
                            target="_blank"></a>
                        </li>
                        <li>
                        </li>
                        <li>
                        </li>
                        <li>
                            <a className="telegram" href="#" target="_blank"></a>
                        </li>
                        <li>
                            <a className="mail" href="#"></a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-12 c">
                    2013-2020 (с) BetBurger All rights reserved
                    <div>
                        <div className="col-md-12 owned_sign">
                            www.betbetter.fun is owned and operated by Aspira Limited
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Footer;
