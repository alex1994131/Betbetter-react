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
                                   src="../../assets/img/website.svg" />
                            </div>
                            <h3 className="secondary-title">200+ markets scanned</h3>
                            <p>We gather odds from a great number of markets: event outcomes, totals, European and Asian
                                handicaps, to win to nil etc. Thus, you receive a way more surebets than any other software
                                can supply!</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="details">
                            <div className="details-image">
                                <img alt="soccer"
                                    src="../../assets/img/soccer.svg" />
                            </div>
                            <h3 className="secondary-title">30 sports</h3>
                            <p>Our arbitrage betting software scans a huge variety of sports (for the time being, 30 kinds
                                of sport for Prematch and 25 for Live) that allows our customers to pick out unique
                                arbitrage situations. Moreover, our gamblers are less "visible" for bookmakers due to the
                                fact that the odds are not being loaded by a large number of surebets.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="details">
                            <div className="details-image">
                                <img alt="boss"
                                    src="../../assets/img/boss.svg" />
                            </div>
                            <h3 className="secondary-title">100+ bookmakers</h3>
                            <p>The number of bookmakers scanned is constantly growing. Now we obtain data from more than 100
                                bookies. They are meticulously selected, taking into account our users' requests. In case
                                you have any offers concerning bookies, you may leave your suggestion on the Contacts
                                page.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
  }
}

export default Four;
