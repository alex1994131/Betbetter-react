import React, { Component } from 'react';


class Second extends Component {
  render() {
    return (
        <div className="gray-block">
            <div className="container">
                <h2 className="medium-title">Arb Helper - extensão para uma ligação direta às casas de apostas</h2>
                <div className="row row-helper">
                    <div className="col-lg-5 col-md-12 helper-text">
                        <p>Esta extensão é útil para as suas apostas de arbitragem. Poupa-lhe tempo quando procura o resultado que precisa e evita potenciais erros ao efetuar as apostas. As casas de apostas não veem a origem do redirecionamento, por isso, a atividade do seu navegador permanece indetetável.</p>
                        <a className="btn red-bordered-btn"
                        href="#"
                        target="_blank">
                            <i className="icon icon-chrome"></i>                   
                                Saiba mais
                        </a>
                    </div>
                    <div className="col-lg-6 col-lg-offset-1 col-md-12">
                        <div className="image-holder">
                            <img alt="arb helper"
                                src="../../../assets/img/helper.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Second;
