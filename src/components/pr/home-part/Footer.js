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
                                    O que são Surebets?
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    O que são Valuebets?
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Forum
                                </a>
                            </li>
                            <li>
                                <a href="#">Apostas de arbitragem Live</a>
                            </li>
                            <li>
                                <a href="#">Apostas de arbitragem Prematch</a>
                            </li>
                            <li>
                                <a href="#">Apostas de valor</a>
                            </li>
                            <li>
                                <a href="#">Comparação de probabilidades</a>
                            </li>
                            <li>
                                <a href="#">Entre em contacto connosco</a>
                            </li>
                            <li>
                                <a href="#" title="Calculadora">
                                    Calculadora
                                </a>
                            </li>
                            <li>
                                <a href="#">Casas de apostas</a>
                            </li>
                            <li>
                                <a href="#">
                                    Perguntas frequentes
                                </a>
                            </li>
                            <li>
                                <a href="#">Novidades sobre o Serviço</a>
                            </li>
                            <li>
                                <a href="#">Programa de Afiliados</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <ul className="social-list">
                            <li>
                                <a href="https://www.youtube.com/channel/UCHH5BBx74t45cTnn8VcJ8fw" target="_blank">
                                    <img alt="YouTube"
                                        src="../../assets/img/icon-yt.png" />
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/betburger" target="_blank">
                                    <img alt="Telegram"
                                        src="../../assets/img/icon-telegram.png" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:support@betburger.com">
                                    <img alt="Mail" src="../../assets/img/icon-email.png" />
                                </a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <a alt="Arbitrage betting service №1" className="logo" href="#" title="BetBurger">
                        <img alt="BETBURGER"
                            src="../../assets/img/logo-ce.svg" />
                    </a>
                    <div className="bottom__center">
                        <ul>
                            <li>
                                <a href="#">Política de Privacidade</a>
                            </li>
                            <li>
                                <a href="#">Termos de utilização</a>
                            </li>
                        </ul>
                        <span>2013-2020 (с) BetBurger Todos os direitos reservados</span>
                        <span>www.betbetter.fun é detido e administrado pela Aspira Limited</span>
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
