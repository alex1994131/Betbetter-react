import React, { Component } from 'react';

import Halfone from './halfone.js';
import Halftwo from './halftwo.js';

class Conwraper extends Component {
  render() {
    return (
                     
    <div className="container contentWrapper height100">
        <div className="row height100">
            <div className="row-sm-height height100">
                <div className="col-xs-6 col-sm-height col-top leftSection height100">
                    <div className="inside inside-full-height">
                        <div className="content sectionContentJs height100" data-padding="80">
                            <div className="arbsComponent height100">
                                <div className="arbListView height100">
                                    <div className="row height100" id="leftArbList">
                                        <div className="row-sm-height height100">
                                            <Halfone />
                                            <Halftwo />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                                                                 
    );
  }
}

export default Conwraper;
