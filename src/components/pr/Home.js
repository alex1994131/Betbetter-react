import React, { Component } from 'react';

import '../main.css';

import Compile from './home-part/compile';
import HomeHeader from './home-part/header';
import HeaderBody from './home-part/headerbody';

import First from './home-part/First';
import Second from './home-part/second';
import Third from './home-part/Third';
import Four from './home-part/Four';
import Footer from './home-part/Footer';

class Home extends Component {
  render() {
    return (
      <div className="pricing-surebets">
        <Compile />
        <div className="home-top">
          <HomeHeader />
          <HeaderBody />
        </div>
        <main className="home-main">
          <First />
          <Second />
          <Third />
          <Four />
        </main>
        <Footer />
        <div className="containerForBlockMessage"></div>
      </div>
    );
  }
}

export default Home;
