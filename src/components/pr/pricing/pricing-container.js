import React, { Component } from 'react';
import $ from 'jquery';

class PricingContainer extends Component {


    componentDidMount() {
        let flg_1 = true;
        let flg_2 = false;
        let flg_3 = false;
        let flg_4 = false;
        $('#accordion_1').on('click',function(){
            if(flg_1 == true) {
                $('#accordion_1').removeClass("open");
                $('#accordion_2').removeClass("open");
                $('#accordion_3').removeClass("open");
                $('#accordion_4').removeClass("open");
                $("#answer1").removeClass("show");
                $("#answer2").removeClass("show");
                $("#answer3").removeClass("show");
                $("#answer4").removeClass("show");
                console.log(flg_1);
                flg_1 = false;
                flg_2 = false;
                flg_3 = false;
                flg_4 = false;
                console.log(flg_1);
            }
            else {
                $('#accordion_1').addClass("open");
                $('#accordion_2').removeClass("open");
                $('#accordion_3').removeClass("open");
                $('#accordion_4').removeClass("open");
                $("#answer1").addClass("show");
                $("#answer2").removeClass("show");
                $("#answer3").removeClass("show");
                $("#answer4").removeClass("show");
                flg_1 = true;
                flg_2 = false;
                flg_3 = false;
                flg_4 = false;
            }
        });
        $('#accordion_2').on('click',function(){
            if(flg_2) {
                $('#accordion_2').removeClass("open");
                $('#accordion_1').removeClass("open");
                $('#accordion_3').removeClass("open");
                $('#accordion_4').removeClass("open");
                $("#answer1").removeClass("show");
                $("#answer2").removeClass("show");
                $("#answer3").removeClass("show");
                $("#answer4").removeClass("show");
                flg_1 = false;
                flg_2 = false;
                flg_3 = false;
                flg_4 = false;
            }
            else {
                $('#accordion_1').removeClass("open");
                $('#accordion_2').addClass("open");
                $('#accordion_3').removeClass("open");
                $('#accordion_4').removeClass("open");
                $("#answer1").removeClass("show");
                $("#answer2").addClass("show");
                $("#answer3").removeClass("show");
                $("#answer4").removeClass("show");
                flg_1 = false;
                flg_2 = true;
                flg_3 = false;
                flg_4 = false;
            }
        });
        $('#accordion_3').on('click',function(){
            if(flg_3) {
                $('#accordion_1').removeClass("open");
                $('#accordion_2').removeClass("open");
                $('#accordion_3').removeClass("open");
                $('#accordion_4').removeClass("open");
                $("#answer1").removeClass("show");
                $("#answer2").removeClass("show");
                $("#answer3").removeClass("show");
                $("#answer4").removeClass("show");
                flg_1 = false;
                flg_2 = false;
                flg_3 = false;
                flg_4 = false;
            }
            else {
                $('#accordion_1').removeClass("open");
                $('#accordion_2').removeClass("open");
                $('#accordion_3').addClass("open");
                $('#accordion_4').removeClass("open");
                $("#answer1").removeClass("show");
                $("#answer2").removeClass("show");
                $("#answer3").addClass("show");
                $("#answer4").removeClass("show");
                flg_1 = false;
                flg_2 = false;
                flg_3 = true;
                flg_4 = false;
            }
        });
        $('#accordion_4').on('click',function(){
            if(flg_4) {
                $('#accordion_1').removeClass("open");
                $('#accordion_2').removeClass("open");
                $('#accordion_3').removeClass("open");
                $('#accordion_4').removeClass("open");
                $("#answer1").removeClass("show");
                $("#answer2").removeClass("show");
                $("#answer3").removeClass("show");
                $("#answer4").removeClass("show");
                flg_1 = false;
                flg_2 = false;
                flg_3 = false;
                flg_4 = false;
            }
            else {
                $('#accordion_1').removeClass("open");
                $('#accordion_2').removeClass("open");
                $('#accordion_3').removeClass("open");
                $('#accordion_4').addClass("open");
                $("#answer1").removeClass("show");
                $("#answer2").removeClass("show");
                $("#answer3").removeClass("show");
                $("#answer4").addClass("show");
                flg_1 = false;
                flg_2 = false;
                flg_3 = false;
                flg_4 = true;
            }
        });
    }

  render() {
    return (
        <div className="container">
            <div className="row rate">
                <div className="col-md-4 col-md-offset-1">
                    <div className="feedback-img">
                        <img src="../../assets/img/feedbacks-2b49320793e1e506fea59b23360e57aa3fa317343ea7c4d46375a5828e5bcb42.svg" />
                    </div>
                    <div className="arbusers-img">
                        <img src="../../assets/img/arbusers-e8fbc90a02cfef6d7f63809413bc0f761129656239e0e9422088d85c9bd57dfa.png" />
                    </div>
                </div>
                <div className="col-md-5 col-md-offset-1 info-text">
                    <h2 className="secondary-title">BetBurger tem uma classificação de 9.5/10</h2>
                    <h6 className="sub-title">pelos especialistas em ArbUsers</h6>
                    <p>"para mim, a betburger é bem melhor do que [competitor], Achei o [competitor] bastante inútil... Estou satisfeito com a betburger"</p>
                    <p>"a betburger tem provavelmente o melhor serviço"</p>
                    <p>"A [BetBurger] é uma ferramenta realmente muito boa, mesmo para mim com poucas casas de apostas"</p>
                </div>
            </div>
            <div className="pricing-faq">
                <h2 className="secondary-title text-center">Perguntas frequentes</h2>
                <div className="accordion" id="bb-price-accordion">
                    <div className="pricing-faq__block open" id="accordion_1">
                        <div className="pricing-faq__header" id="question1">
                            <span>Sou um principiante. Qual é a melhor subscrição para mim?</span>
                        </div>
                        <div className="pricing-faq__body show" id="answer1">
                            Recomendamos vivamente a subscrição pré-jogo para pessoas novas no mundo das apostas de arbitragem. Assim que aprender os princípios básicos e se sentir mais confortável, também pode experimentar a subscrição Ao Vivo.
                        </div>
                    </div>
                    <div className="pricing-faq__block" id = "accordion_2">
                        <div className="pricing-faq__header" id="question2">
                            <span>Posso experimentar o produto gratuitamente antes de pagar uma subscrição?</span>
                        </div>
                        <div className="pricing-faq__body" id="answer2">
                            Sim, a versão limitada do nosso serviço principal está disponível gratuitamente. Basta  <a
                            href="#">criar uma conta</a>
                            . Terá acesso às apostas Pré-jogo e Ao Vivo, mas apenas verá as surebets com um lucro máximo de 1% com um atraso (5 minutos para as apostas Pré-jogo e 60 segundos para as apostas Ao Vivo).
                        </div>
                    </div>
                    <div className="pricing-faq__block" id = "accordion_3">
                        <div className="pricing-faq__header" id="question3">
                            <span>Qual é a diferença entre as subscrições Pré-jogo e Ao Vivo?</span>
                        </div>
                        <div className="pricing-faq__body" id="answer3">
                            A subscrição Pré-jogo dá-lhe acesso a surebets para jogos futuros. Já com a subscrição Ao Vivo pode aceder a apostas em tempo real nos eventos em curso. O produto Ao Vivo destina-se a apostadores experientes em arbitragem que já sabem o que estão a fazer.
                        </div>
                    </div>
                    <div className="pricing-faq__block" id = "accordion_4">
                        <div className="pricing-faq__header" id="question4">
                            <span>Quando é que a minha conta será ativada?</span>
                        </div>
                        <div className="pricing-faq__body" id="answer4">
                            Por norma, a sua conta é ativada imediatamente. Caso efetue o pagamento usando um cartão VISA ou MasterCard, o procedimento poderá demorar algumas horas. Se estiver à espera que a sua conta seja ativada, recomendamos vivamente que visite a Arbing Academy. Trata-se de um recurso grátis que o ensina a ser um melhor apostador em arbitragem.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default PricingContainer;
