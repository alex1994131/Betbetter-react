import React, { Component } from 'react';

class Table2 extends Component {
  render() {
    return (
        <div className="tableRowStyle rightPanelRows rightFilterRows">
            <div className="row rightFilter">
                <div className="col-xs-12 padding2_5">
                    <div className="rightFilterPanel">
                        <ul className="right-panel-checkboxes">
                            <li>
                                <input type="checkbox" value="" id="_1_x_2"
                                        name="_1_x_2" checked="" />
                                <label for="_1_x_2" className=""><span
                                        className="checkbox"></span>
                                    <p>1X2</p></label>

                            </li>
                            <li>
                                <input type="checkbox" value="" id="handicaps"
                                        name="handicaps" checked="" />
                                <label for="handicaps" className=""><span
                                        className="checkbox"></span>
                                    <p>Handicaps</p></label>

                            </li>
                            <li>
                                <input type="checkbox" value="" id="totals"
                                        name="totals" checked=""/>
                                <label for="totals" className=""><span
                                        className="checkbox"></span>
                                    <p>Totals</p></label>

                            </li>
                            <li>
                                <input type="checkbox" value="" id="ind_totals"
                                        name="ind_totals" checked=""/>
                                <label for="ind_totals" className=""><span
                                        className="checkbox"></span>
                                    <p>Ind. Totals</p></label>

                            </li>
                            <li>
                                <input type="checkbox" value="" id="statistics"
                                        name="statistics" checked=""/>
                                <label for="statistics" className=""><span
                                        className="checkbox"></span>
                                    <p>Statistics</p></label>

                            </li>
                            <li>
                                <input type="checkbox" value="" id="additionals"
                                        name="additionals" checked=""/>
                                <label for="additionals" className=""><span
                                        className="checkbox"></span>
                                    <p>Additionals</p></label>

                            </li>
                            <li>
                                <input type="checkbox" value="" id="game_winner"
                                        name="game_winner" checked="" disabled=""/>
                                <label for="game_winner" className="displayNone"><span
                                        className="checkbox"></span>
                                    <p>Game Winner</p></label>

                            </li>
                            <li>
                                <input type="checkbox" value="" id="corners"
                                        name="corners" checked=""/>
                                <label for="corners"><span className="checkbox"></span>
                                    <p>Corners</p></label>

                            </li>
                            <li>
                                <input type="checkbox" value="" id="bookings"
                                        name="bookings" checked=""/>
                                <label for="bookings"><span className="checkbox"></span>
                                    <p>Bookings</p></label>

                            </li>
                        </ul>
                        <div className="right-panel-show-arbs">
                            <input type="checkbox" value="1" className="hide" id="show_event_arbs" name="show_event_arbs" checked=""/>
                            <label className="show_event_arbs_label" for="show_event_arbs"
                                    title="Arbs grouped by event">
                                <span className="show_event_arbs_checkbox"></span>
                            </label>
                        </div>
                        <br className="clear_both" />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Table2;
