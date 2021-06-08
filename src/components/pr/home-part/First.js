import React, { Component } from 'react';


class First extends Component {
  render() {
    return (
        <div className="container">
            <div className="basic-block">
                <h2 className="medium-title">Software de apostas de arbitragem desenvolvido por profissionais</h2>
                <p className="subheader">
                    <span className="bold">Desde 2013,</span> ajudámos  
                    <span className="bold"> 100,000+ clientes </span> a bater as casas de apostas.
                </p>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="bordered-column">
                            <div className="column-img">
                                <img alt="Surebets"
                                    src="../../../assets/img/diagram.svg"/>
                            </div>
                            <h3>Surebets</h3>
                            <ul className="green-list">
                                <li>The original tried and tested arbing</li>
                                <li>You gain profit on every arb</li>
                                <li>Predictable arbing</li>
                                <li>Available in Prematch and Live</li>
                            </ul>
                            <a className="btn red-btn" href="#">Ver planos de Surebets</a>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="bordered-column">
                            <div className="column-img">
                                <img alt="Surebets"
                                    src="../../assets/img/graph.svg"/>
                            </div>
                            <h3>Valuebets</h3>
                            <ul className="green-list">
                                <li>Betting on overvalued odds</li>
                                <li>Easier but slower betting</li>
                                <li>Higher profits in the long run</li>
                                <li>Available in Prematch and Live</li>
                            </ul>
                            <a className="btn red-btn" href="#">Ver planos de Valuebets</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default First;
