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
                        <img src="../assets/img/feedbacks-2b49320793e1e506fea59b23360e57aa3fa317343ea7c4d46375a5828e5bcb42.svg" />
                    </div>
                    <div className="arbusers-img">
                        <img src="../assets/img/arbusers-e8fbc90a02cfef6d7f63809413bc0f761129656239e0e9422088d85c9bd57dfa.png" />
                    </div>
                </div>
                <div className="col-md-5 col-md-offset-1 info-text">
                    <h2 className="secondary-title">BetBurger is rated 9.5/10</h2>
                    <h6 className="sub-title">by the experts at ArbUsers.com</h6>
                    <p>"for me betburger is way better than [competitor], I found [competitor] pretty useless... Im
                        happy with betburger"</p>
                    <p>"betburger is probably the best service"</p>
                    <p>"I`m trying [BetBurger], it`s a really good tool even if my bookies are few"</p>
                </div>
            </div>
            <div className="pricing-faq">
                <h2 className="secondary-title text-center">Frequently Asked Questions</h2>
                <div className="accordion" id="bb-price-accordion">
                    <div className="pricing-faq__block open" id="accordion_1">
                        <div className="pricing-faq__header" id="question1">
                            <span>I’m just starting out. Which subscription is better for a newbie like me?</span>
                        </div>
                        <div className="pricing-faq__body show" id="answer1">
                            Prematch subscription is highly recommended for people new to arbing. Once you learn the
                            ropes and feel more comfortable, you may try out the Live subscription, too.
                        </div>
                    </div>
                    <div className="pricing-faq__block" id = "accordion_2">
                        <div className="pricing-faq__header" id="question2">
                            <span>Can I try the product for free before I pay?</span>
                        </div>
                        <div className="pricing-faq__body" id="answer2">
                            Yes, the limited version of our core service is available for free. All you need to do is <a
                                href="https://www.betburger.com/payments?live_tariff_id=169&amp;prematch_tariff_id=16">create
                            an account</a>. You’ll get access to Prematch and Live, but you’ll only see the surebets
                            limited to 1% profit with a delay (5 minutes for Prematch and 60 seconds for Live).
                        </div>
                    </div>
                    <div className="pricing-faq__block" id = "accordion_3">
                        <div className="pricing-faq__header" id="question3">
                            <span>What’s the difference between Prematch and Live?</span>
                        </div>
                        <div className="pricing-faq__body" id="answer3">
                            The Prematch subscription allows you to access surebets for future games. Once you buy the
                            Live subscription, you’re going to access the bets for real-time, in-play events. The Live
                            product is intended for experienced arbers who already know what they are doing.
                        </div>
                    </div>
                    <div className="pricing-faq__block" id = "accordion_4">
                        <div className="pricing-faq__header" id="question4">
                            <span>When will my account be activated?</span>
                        </div>
                        <div className="pricing-faq__body" id="answer4">
                            Usually, your account is activated instantly. In case your payment is made through VISA or
                            MasterCard, the procedure may take a couple of hours. If you’re waiting for your account to
                            be activated, we highly recommend checking out our <a href="https://www.betburger.com/wiki">Arbing
                            Academy</a>, a free resource teaching you how to become a better arber.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default PricingContainer;
