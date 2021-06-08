import React, { Component } from 'react';


class Third extends Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="row platforms">
                <div className="col-lg-6 col-md-12">
                    <div className="promo-text">
                        <div className="promo-text_inner">
                            <h3 className="medium-title">Cross platform</h3>
                            <p>We decided to make our free arbitrage betting software more flexible for those who use
                                different strategies. You don’t have to install any off-site programs on your computer. Just
                                open your favorite browser and get to work!</p>
                            <p>Moreover, BetBurger runs on smartphones and tablets! On the road, waiting for your friend or
                                just have some free time – BetBurger is always around not to waste a minute!</p>
                            <div className="browsers">
                                <img alt="browsers"
                                    src="../../assets/img/browsers.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="l-img">
                        <img alt="devices"
                            src="../../assets/img/device2.png" />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Third;
