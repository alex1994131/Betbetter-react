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
                            </ul>
                        </div>
                        <div className="menu">
                            <ul>
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
                            </ul>
                        </div>
                        <div className="menu">
                            <ul>
                                <li>
                                    <a href="#">Entre em contacto connosco</a>
                                </li>
                                <li>
                                    <a href="#" title="Calculator">
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
                            </ul>
                        </div>
                        <div className="menu">
                            <ul>
                                <li>
                                    <a href="#">Novidades sobre o Serviço</a>
                                </li>
                                <li>
                                    <a href="#">Programa de Afiliados</a>
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
                            <a href="#">Política de Privacidade</a>
                        </li>
                        <li>
                            <a href="#">Termos de utilização</a>
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
                    2013-2020 (с) BetBurger Todos os direitos reservados
                    <div>
                        <div className="col-md-12 owned_sign">
                            www.betbetter.fun é detido e administrado pela Aspira Limited
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Footer;
