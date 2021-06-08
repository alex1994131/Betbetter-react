import React, { Component } from 'react';

import Table1 from './table/Table1';
import Table2 from './table/Table2';
import Tablex from './table/Tablex';
import Table4 from './table/Table4';

class Halftwo extends Component {
  render() {
    return (
        <div className="col-xs-6 col-sm-height col-top rightSection height100">
            <div className="inside inside-full-height">
                <div className="content sectionContentJs height100" data-padding="20">
                    <div className="tableStyle height100" style={{height:"850px",overflow:"scroll"}}>
                        <Table1 />
                            {/* <Table2 />
                            <Tablex />
                            <Table4 /> */}
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Halftwo;
