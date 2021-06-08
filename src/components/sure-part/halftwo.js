import React, { Component } from 'react';

import Table1 from './table/Table1';
import Table2 from './table/Table2';



class Halftwo extends Component {
  render() {
    return (
        <div className="col-xs-6 col-sm-height col-top rightSection height100">
            <div className="inside inside-full-height">
                <div className="content sectionContentJs height100" data-padding="20">
                    <div className="tableStyle height100" style={{height:"850px",overflow:"scroll"}}>
                        <Table1 />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Halftwo;
