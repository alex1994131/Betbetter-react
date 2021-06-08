import React, { Component } from 'react';


class Message2 extends Component {
  render() {
    return (
        <div className="container relative forMessage">
            <div className="container relative forMessage">
                <div className="freeInfo text-center" data-top="40" style={{display: "block"}}>
                    <div className="content">
                        <div className="forFree"
                            title="Attention! Now you may see surebets limited to 1% and with a 900 sec delay. Get a subscription plan and use our service to its fullest potential!"
                            style={{display: "inline-block"}}>
                            <span className="with_content">Atenção! Agora pode ver surebets limitadas a 1% e com um atraso de 60 segundos. Obtenha um plano de subscrição e utilize o nosso serviço para otimizar o seu potencial!</span>
                            <a className="registrationLinc" title="View prices" href="/pt_pricing">Ver preços</a>
                        </div>
                        <div className="forNotPaid"
                            title="Attention! Information on odds and outcomes is limited. To gain a full access please upgrade your subscription.">
                            <span className="with_content">Atenção! As informações sobre probabilidades e resultados são limitadas. Para obter acesso total, atualize a sua subscrição.</span>
                            <a className="registrationLinc" title="View prices" href="/pt_pricing">Ver preços</a>
                        </div>
                        <div className="isFrozen"
                            title="Your subscription was &quot;frozen&quot;. Now you may see surebets limited to 1% and with a 900 sec delay.">
                            <span className="with_content">A sua subscrição foi bloqueada. Agora pode ver surebets limitadas a 1% e com um atraso de 60 segundos.</span>
                            <a className="registrationLinc" title="View prices" href="/pt_pricing">Ver preços</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Message2;
