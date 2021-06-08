import React, { Component } from 'react';


class Third extends Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="row platforms">
                <div className="col-lg-6 col-md-12">
                    <div className="promo-text">
                        <div className="promo-text_inner">
                            <h3 className="medium-title">Multiplataforma</h3>
                            <p>Decidimos tornar o nosso software grátis de apostas de arbitragem mais flexível para quem usa diferentes estratégias. Não tem de instalar qualquer programa adicional no computador. Basta abrir o seu navegador favorito e meter mãos à obra!</p>
                            <p>Além disso, o BetBurger é compatível com smartphones e tablets! Se estiver fora de casa ou à espera de um amigo ou se tiver algum tempo livre – o BetBurguer está sempre consigo para que não perca nem um minuto!</p>
                            <div className="browsers">
                                <img alt="browsers"
                                    src="../../../assets/img/browsers.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="l-img">
                        <img alt="devices"
                            src="../../../assets/img/device2.png" />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Third;
