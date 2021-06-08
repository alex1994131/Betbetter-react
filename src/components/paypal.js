import React, { Component } from 'react';

import '../myaccount/main_ab_prices-a3b14292d2729093792ddaf64fa02b1d6c7fa8a6cafd778d6592b004b14c7536.css';
import '../myaccount/cookieconsent.min.css';
import Payleft from './paypal-part/paypal_left';
import Payright from './paypal-part/paypal-right';

class Paypal extends Component {
  render() {
    return (
        <div className="ppppricing-surebets">
            <div className="select-payment">
                <Payleft/>
                <Payright/>
            </div> 
        </div>
    );
  }
}
export default Paypal;