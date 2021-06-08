import React, { Component } from 'react';

import Soccer1 from './soccer1';
class Table3 extends Component {
  render() {
    return (
        <div className="tableRowStyle rightPanelRows rightArbsRows">
            <div className="tableCellStyle height100">
                <div className="height100">
                    <div className="row groupedArbsSection height100">
                        <div className="col-xs-12 height100">
                            <div className="groupedArbsComponent height100">
                                <div className="arbListView height100">
                                    <div id="groupedArbsScroll" className="jsHeight100" style={{touch_action: "none"}}>
                                        <div className="scroller" style={{transform: "translate(0px, 0px) translateZ(0px)"}}>
                                            <ul>
                                                <Soccer1 />
                                                <Soccer1 />
                                                <Soccer1 />
                                                <Soccer1 />
                                                <Soccer1 />
                                                <Soccer1 />
                                                <Soccer1 />
                                            </ul>
                                        </div>
                                        <div className="iScrollVerticalScrollbar iScrollLoneScrollbar" style={{position: "absolute", z_index: "9999", width: "7px", bottom: "2px", top: "2px", right: "1px", overflow: "hidden", transform: "translateZ(0px)", transition_duration: "0ms", opacity: "0"}}>
                                            <div className="iScrollIndicator" style={{box_sizing: "border-box", position: "absolute", background: "rgba(0, 0, 0, 0.5)", border: "1px solid rgba(255, 255, 255, 0.9)", border_radius: "3px", width: "100%", transition_duration: "0ms", display: "block", height: "237px", transform: "translate(0px, 0px) translateZ(0px)"}}></div>
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

export default Table3;
