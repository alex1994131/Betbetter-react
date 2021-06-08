import React, { Component } from 'react';


class HeaderBody extends Component {
  render() {
    return (
        <div className="container">
            <div className="intro">
                <div className="row intro-text">
                    <div className="col-lg-7 col-md-8 col-sm-8">
                        <h1 className="large-title">Surebet service number one</h1>
                        <p>Our service scans more than 100 bookies along with a great variety of sports. We analyze and
                            calculate surebets and all you have to do is to bet and make safe profit!</p>
                        <div className="buttons">
                            <a className="btn red-btn scrollTo" data-scroll=".home-main" href="https://www.betburger.com/#">How
                                it works</a>
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
                <span>BetBurger does not organize or conduct gambling.</span>
                <span>The information provided is for information purposes only.</span>
            </div>
        </div>
    );
  }
}

export default HeaderBody;
