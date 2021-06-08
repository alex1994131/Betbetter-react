import { getJSON, parseJSON } from 'jquery';
import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
class payleft extends Component {
    render(){
        const client_data=parseJSON(localStorage.getItem('clientData'));
        const PAYPAL_CLIENT = client_data.client_id;
        const PAYPAL_SECRET = client_data.password;
        const PAYPAL_OAUTH_API = "https://api.sandbox.paypal.com/v1/oauth2/token";
        
        const basicAuth = btoa(`${PAYPAL_CLIENT}:${PAYPAL_SECRET}`);
        let auth;
        fetch(PAYPAL_OAUTH_API, {
            method: "POST",
            headers: new Headers({
                Accept: `application/json`,
                "Content-Type": "x-www-form-urlencoded",
                Authorization: `Basic ${basicAuth}`
            }),
            body: `grant_type=client_credentials`
        })
        .then(response => response.json())
        .then(json => {
            auth = json;
            console.log(auth);
        });
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
        } 
        const onCancel = (data) => { 
            console.log('The payment was cancelled!', data);
        }
 
        const onError = (err) => {
            console.log("Error!", err);
        }
 
        let env = 'sandbox'; 
        let currency = 'USD';
        let total = localStorage.getItem('totalprice');  
        const client = {
            sandbox:    client_data.client_id,
            production: '',
        }
        const price=parseJSON(localStorage.getItem('memberprice')).price;
        return(
            
            <div className="select-payment-left">
                <div className="select-payment-header">
                    <a alt="Arbitrage betting service №1" className="logo" href="/" title="BetBurger">
                        <img alt="BETBURGER" src="../assets/img/logo_black.png" />
                    </a>
                    <a alt="Arbitrage betting service №1" className="logo-mobile" href="/" title="BetBurger">
                        <img alt="BETBURGER" src="../assets/img/logo_black.png" />
                    </a>
                </div>
                <div className="select-payment-inner">
                    <h1 className="select-payment-title">
                        Unlimited service is one step away
                    <br/>
                    <small>You’re ordering surebets</small>
                    </h1>
                    <div className="select-payment-item">
                        <div className="select-payment-details">
                            <div className="select-payment-details-title">
                                Prematch
                            </div>
                        <div className="select-payment-details-duration">
                            Duration:
                            <strong>{localStorage.getItem('totalprice')/price}</strong> days
                        </div>
                    </div>
                    <div className="select-payment-price">
                        <div className="select-payment-price-current">
                            €{localStorage.getItem('totalprice')}
                        </div>
                        <div className="select-payment-price-bottom">
                        </div>
                    </div>
                </div>
                    <div className="select-payment-item">
                        <div className="select-payment-total">
                            Total:
                        </div>
                        <div className="select-payment-total-price">
                            €{localStorage.getItem('totalprice')}
                        </div>
                    </div>
                    <div className="select-payment-form">
                        <div className="select-payment-form-text">
                            Pick your preferred payment method:
                        </div>
                        <div className="row" style={{display:"flex", alignItems:"center"}}>
                            <div className="col-sm-4" style={{textAlign:"right"}}>
                                Paypal:
                            </div>
                            <div className="col-sm-6">
                                <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
                    
    )};
}
export default payleft;