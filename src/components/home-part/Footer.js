import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
        <footer className="">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12">
                        <ul className="footer-menu">
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
                            <li>
                                <a href="#">Service News</a>
                            </li>
                            <li>
                                <a href="#">Affiliate Program</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <ul className="social-list">
                            <li>
                                <a href="https://www.youtube.com/channel/UCHH5BBx74t45cTnn8VcJ8fw" target="_blank">
                                    <img alt="YouTube"
                                        src="../assets/img/icon-yt.png" />
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/betburger" target="_blank">
                                    <img alt="Telegram"
                                        src="../assets/img/icon-telegram.png" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:support@betburger.com">
                                    <img alt="Mail" src="../assets/img/icon-email.png" />
                                </a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <a alt="Arbitrage betting service №1" className="logo" href="#" title="BetBurger">
                        <img alt="BETBURGER"
                            src="../assets/img/logo-ce.svg" />
                    </a>
                    <div className="bottom__center">
                        <ul>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms of use</a>
                            </li>
                        </ul>
                        <span>2013-2020 (с) BetBurger All rights reserved</span>
                        <span>www.betburger.com is owned and operated by Aspira Limited</span>
                    </div>
                    <div className="bottom__left">
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
