import React, { Component } from 'react';

class PricingMainContainer extends Component {
  render() {
    return (
        <div className="container main-container">
            <div className="clearfix mb-170">
                <div className="analyse-img-holder">
                    <div className="analyse-img">
                        <img alt="analyse" className="img-responsive"
                             src="../../assets/img/analyse-68b4bec09298c545d95eca02eef3684013cc9289b2a3609bd984427415490435.svg" />
                    </div>
                </div>
                <div className="analyse-text">
                    <h2 className="secondary-title">A cada minuto,</h2>
                    <p> analisamos dezenas de desportos 
                        <span class="bold">em mais de 80 casas de apostas para</span> 
                        encontrar as oportunidades mais lucrativas no mercado, tudo para benefício dos nossos clientes. Fazemos todo o trabalho pesado e os nossos clientes só têm de iniciar sessão, 
                        <span class="bold">efetuar as apostas e amealhar os lucros.</span>
                    </p>
                </div>
            </div>
        </div>
    );
  }
}

export default PricingMainContainer;
