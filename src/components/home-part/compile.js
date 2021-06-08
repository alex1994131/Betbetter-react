import React, { Component } from 'react';


class Compile extends Component {
  render() {
    return (
        <div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" className="cc-window cc-banner cc-type-info cc-theme-block cc-bottom cc-color-override-688238583 cc-invisible" style={{display: "none"}}>
            <span id="cookieconsent:desc" className="cc-message">We use cookies and other technologies to ensure you get the best experience on our website. More info 
                <a aria-label="learn more about cookies" role="button" tabIndex="0" className="cc-link" href="https://www.betburger.com/privacy" rel="noopener noreferrer nofollow" target="_blank">here
                </a>
            </span>
            <div className="cc-compliance cc-highlight"><span>&nbsp;</span>
                <a aria-label="allow cookies" role="button" tabIndex="0" className="cc-btn cc-allow">Got it!</a>
            </div>
            <span aria-label="dismiss cookie message" role="button" tabIndex="0" className="cc-close">❌</span>
        </div>
    );
  }
}

export default Compile;
