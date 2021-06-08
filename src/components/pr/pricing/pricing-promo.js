import React, { Component } from 'react';

class PricingPromo extends Component {
  render() {
    return (
        <div className="promo">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="promo-text">
                            <div className="promo-text_inner">
                                <h1 className="main-title">
                                    SUREBETS: Lucre com cada aposta que efetuar
                                </h1>
                                <p>Damos a milhares de pessoas em todo o mundo uma vantagem injusta: saberem quais as apostas a efetuar para ganharem sempre, independentemente do desporto ou do resultado do evento.</p>
                                <div className="buttons">
                                    <a className="btn red-btn scrollTo" data-scroll=".main-container"
                                       href="#">
                                        Como funciona?
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="l-img">
                            <img src="../../assets/img/mac2-3e0c2450cd757faa2cdb12cd2f4a2a1bb019a4ef20a6636c007b9ac70bbbe8a4.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default PricingPromo;
