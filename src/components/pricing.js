import React, { Component } from 'react';
import '../myaccount/main_bb_prices-803c110064beaee0c2a67ba12e89cf205c8070761d54ca55ea32842176972703.css';
import '../myaccount/cookieconsent.min.css';

import PricingHeader from './pricing/pricing-header';
import PricingPromo from './pricing/pricing-promo';
import PricingMainContainer from './pricing/pricing-main-container';
import PricingBlueBackground from './pricing/pricing-blue-background';
import PricingContainer from './pricing/pricing-container';
import Footer from './home-part/Footer';

class Pricing extends Component {
  render() {
    return (
        <div className="pppricing-surebets">
            <PricingHeader />
            <div id="pricing">
                <main>
                    <PricingPromo />
                    <PricingMainContainer />
                    <PricingBlueBackground />
                    <PricingContainer />
                </main>
                <Footer />
            </div>
        </div>
    );
  }
}

export default Pricing;
