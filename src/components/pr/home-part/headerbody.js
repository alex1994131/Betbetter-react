import React, { Component } from 'react';


class HeaderBody extends Component {
  render() {
    return (
        <div className="container">
            <div className="intro">
                <div className="row intro-text">
                    <div className="col-lg-7 col-md-8 col-sm-8">
                        <h1 className="large-title">SERVIÇO DE SUREBETS №1</h1>
                        <p> O nosso serviço analisa mais de 100 casas de apostas e uma grande variedade de desportos. Estudamos e calculamos as surebets e os apostadores só têm de apostar e arrecadar os lucros garantidos!</p>
                        <div className="buttons">
                            <a className="btn red-btn scrollTo" data-scroll=".home-main" href="#">Como funciona
                                </a>
                        </div>
                    </div>
                </div>
                <div className="intro-items-row">
                    <div className="item">
                        <div className="intro-item intro-item-01">
                            <span className="intro-item_number">100
                                <span className="intro-item_plus">+</span>
                            </span>
                            bookies scanned daily
                        </div>
                    </div>
                    <div className="item">
                        <div className="intro-item intro-item-02">
                            <span className="intro-item_number">30
                                <span className="intro-item_plus">+</span>
                            </span>
                            sports scanned daily
                        </div>
                    </div>
                    <div className="item">
                        <div className="intro-item intro-item-03">
                            <span className="intro-item_number">100 000
                                <span className="intro-item_plus">+</span>
                            </span>
                            daily betting opportunities
                        </div>
                    </div>
                    <div className="item">
                        <div className="intro-item intro-item-04">
                            <span className="intro-item_number">10
                                <span className="intro-item_percent">%</span>
                                <span className="intro-item_plus">+</span>
                            </span>
                            profit on arbs
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-note">
                <span>A BetBurger não organiza ou efetua jogos.</span>
                <span>As informações facultadas são apenas para fins informativos.</span>
            </div>
        </div>
    );
  }
}

export default HeaderBody;
