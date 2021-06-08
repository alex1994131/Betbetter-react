import React, { Component } from 'react';


class Message1 extends Component {
  render() {
    return (
        <div className="container relative forMessage">
            <div className="errorInfo text-center" data-top="40" style={{display: "none"}}>
                <div className="content">
                    <span className="translation_missing" title="translation missing: en.global.load error">Load Error</span>
                </div>
            </div>
        </div>
    );
  }
}

export default Message1;
