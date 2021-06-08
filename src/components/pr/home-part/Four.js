import React, { Component } from 'react';


class Four extends Component {
  render() {
    return (
        <div className="beige-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="details">
                            <div className="details-image">
                                <img alt="website"
                                   src="../../../assets/img/website.svg" />
                            </div>
                            <h3 className="secondary-title">200+ mercados analisados</h3>
                            <p>Reunimos as probabilidades de um grande número de mercados: resultado final, totais, handicap europeu e asiático, ganhar sem sofrer golos, etc. Assim, recebe bastante mais surebets do que através de qualquer outro software.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="details">
                            <div className="details-image">
                                <img alt="soccer"
                                    src="../../../assets/img/soccer.svg" />
                            </div>
                            <h3 className="secondary-title">30 desportos analisados</h3>
                            <p>O nosso software de apostas de arbitragem analisa uma ampla variedade de desportos (atualmente, são 30 tipos de desportos para apostas Pré-jogo e 25 para apostas Ao Vivo), para que os nossos clientes possam usufruir de excelentes oportunidades de arbitragem. Além disso, os nossos apostadores estão menos “visíveis” para as casas de apostas devido ao facto de as probabilidades não estarem a ser carregadas por um grande número de surebets.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="details">
                            <div className="details-image">
                                <img alt="boss"
                                    src="../../../assets/img/boss.svg" />
                            </div>
                            <h3 className="secondary-title">100+ casas de apostas</h3>
                            <p>O número de casas de apostas que analisamos está em constante crescimento. De momento, recolhemos dados de mais de 100 casas de apostas, que são meticulosamente selecionadas tendo em conta os pedidos dos utilizadores. Caso tenha alguma sugestão relativa a casas de apostas, contacte-nos através da página de Contactos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
  }
}

export default Four;
