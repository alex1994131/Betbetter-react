import React, { Component } from 'react';

class PricingMainContainer extends Component {
  render() {
    return (
        <div className="container main-container">
            <div className="clearfix mb-170">
                <div className="analyse-img-holder">
                    <div className="analyse-img">
                        <img alt="analyse" className="img-responsive"
                             src="../assets/img/analyse-68b4bec09298c545d95eca02eef3684013cc9289b2a3609bd984427415490435.svg" />
                    </div>
                </div>
                <div className="analyse-text">
                    <h2 className="secondary-title">Every minute,</h2>
                    <p><span className="bold"> we scan 80+ bookies</span> across dozens of sports to find the most lucrative
                        opportunities on the market, all there for you to take. We do all the heavy lifting, and all you
                        need to do is log in, <span className="bold">place your bets, and reap your profit.</span></p>
                </div>
            </div>
        </div>
    );
  }
}

export default PricingMainContainer;
