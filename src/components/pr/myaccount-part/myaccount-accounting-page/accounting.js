import React, { Component } from 'react';


class Accounting extends Component {
  render() {
    return (
        <div className="tab-pane fade" id="accounting">
            <div className="col-lg-10 col-md-9">
                <div className="alert alert-danger fade hide" style={{margin_top: "10px",}}>
                    <span aria-hidden="true" className="glyphicon glyphicon-exclamation-sign"></span>

                </div>
                <div className="page-header title font">
                    <h1>
                        <span>Accounting</span>
                        <span className="icomoon-expand toggle-screen-size"></span>
                    </h1>
                </div>
                <p>
                    Acessível apenas para usuários pagos
                </p>
            </div>
        </div>
    );
  }
}

export default Accounting;
