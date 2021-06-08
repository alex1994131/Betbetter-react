import React, { Component } from 'react';


class MyAccApi extends Component {
  render() {
    return (
        <div className="tab-pane fade" id="api_tab">
            <div className="margin">
                <div className="col-lg-10 col-md-9">
                    <div className="page-header title font">
                        <h1>API</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <form className="form-inline">
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">O seu token da API:</div>
                                        <input type="text" name="token" id="token" disabled="disabled"
                                               className="form-control"
                                               placeholder="Tem de comprar uma subscrição para aceder à API."
                                               size="60" />
                                    </div>
                                </div>
                                <a className="btn btn-primary"
                                   href="/pt/prices">Tariffs</a>
                            </form>
                        </div>
                    </div>
                    <div className="row mb-25">
                        <div className="col-xs-12">
                            <div className="alert hidden flashAlert forAlerts" role="alert"
                                 style={{margin_top: "10px",}}>
                                <span aria-hidden="true"
                                      className="glyphicon glyphicon-exclamation-sign"></span>
                            </div>
                            <div className="alert alert-danger fade hide" style={{margin_top: "10px",}}>
                                <span aria-hidden="true"
                                      className="glyphicon glyphicon-exclamation-sign"></span>

                            </div>
                        </div>
                    </div>
                    <div className="row mb-25">
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <p>A API é uma forma de captar centenas de surebets por minuto automaticamente. Pode obter mais informações aqui:</p>
                            <p><a target="_blank" href="#">Visite a nossa página de produto da API</a></p>
                            <p><a target="_blank"
                                  href="#">Leia um artigo sobre uma amostra de pedido de dados</a></p>
                            <p>
                                Swagger documentação: <a href="https://rest-api-lv.betburger.com/doc.html"
                                                          target="_blank">Live surebets</a>, <a
                                    href="https://rest-api-pr.betburger.com/doc.html" target="_blank">Prematch
                                surebets</a>
                            </p>
                            <p><a target="_blank" href="https://www.betburger.com/terms">Consulte as nossas condições de utilização</a></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <p>
                                <span className="red">IMPORTANT!</span>
                                Este é o seu token privado. Não o partilhe com ninguém!
                            </p>
                            <p>Se precisa de ajuda e a leitura da documentação (<a
                                    href="https://rest-api-lv.betburger.com/doc.html"
                                    target="_blank">live</a>, <a
                                    href="https://rest-api-pr.betburger.com/doc.html" target="_blank">prematch</a>) não esclareceu as suas dúvidas, 
                                    <a href="#">envie um pedido de apoio aqui</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default MyAccApi;
