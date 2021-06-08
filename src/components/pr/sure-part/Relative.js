import React, { Component } from 'react';


class Relative extends Component {
  render() {
    return (
      <div className="container relative">
        <div className="centerLogo text-center">
            <div className="searchByEvent">
                <div className="search-form">
                    <span className="search-icon" style={{display: "inline"}}></span>
                    <input id="search-input" placeholder="Search events..." type="text" />
                </div>
            </div>
            <div>
                <a href="/pt"><span className="logo"></span>
                    <span className="text">
                        BetBetter
                    </span>
                </a>
            </div>
        </div>
    </div>
    );
  }
}

export default Relative;
