import React, { Component } from 'react';

import './arbs.css';

import Compile from './home-part/compile';
import Header from './sure-part/header';
import Message1 from './sure-part/Message1';
import Message2 from './sure-part/Message2';
import Relative from './sure-part/Relative';
import TopNavbar from './sure-part/topnav';
import PageContainer from './sure-part/pcontainer';

class SureBet extends Component {
  render() {
    return (
        <div id="arbs" className="zoom_100" data-zoom="100">
            <Compile />
            <Header />
            <Message1 />
            <Message2 />
            <Relative />
            <TopNavbar />
            <PageContainer />
        </div>
    );
  }
}

export default SureBet;
