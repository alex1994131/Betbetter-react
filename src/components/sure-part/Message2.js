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
                            <span className="with_content">Attention! Now you may see surebets limited to 1% and with a 900 sec delay. Get a subscription plan and use our service to its fullest potential!</span>
                            <a className="registrationLinc" title="View prices" href="/prices">View
                                prices</a>
                        </div>
                        <div className="forNotPaid"
                            title="Attention! Information on odds and outcomes is limited. To gain a full access please upgrade your subscription.">
                            <span className="with_content">Attention! Information on odds and outcomes is limited. To gain a full access please upgrade your subscription.</span>
                            <a className="registrationLinc" title="View prices" href="/prices">View
                                prices</a>
                        </div>
                        <div className="isFrozen"
                            title="Your subscription was &quot;frozen&quot;. Now you may see surebets limited to 1% and with a 900 sec delay.">
                            <span className="with_content">Your subscription was "frozen". Now you may see surebets limited to 1% and with a 900 sec delay.</span>
                            <a className="registrationLinc" title="View prices" href="/prices">View
                                prices</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Message2;
