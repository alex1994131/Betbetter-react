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
                                    SUREBETS: Gain profit on every bet you place
                                </h1>
                                <p>We give thousands of people all over the world an unfair advantage of knowing what
                                    bets to place to win every time, no matter the sport or the game outcome.</p>
                                <div className="buttons">
                                    <a className="btn red-btn scrollTo" data-scroll=".main-container"
                                       href="https://www.betburger.com/prices#">
                                        How does it work?
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="l-img">
                            <img src="../assets/img/mac2-3e0c2450cd757faa2cdb12cd2f4a2a1bb019a4ef20a6636c007b9ac70bbbe8a4.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default PricingPromo;
