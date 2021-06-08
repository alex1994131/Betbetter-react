import React, { Component } from 'react';

class ContainerWrapper extends Component {
  render() {
    return (
        <div className="pageContainer" style={{height: "100%", min_height: "650px"}}>
            <div className="editFilterContainer" style={{display: "none"}}></div>
            <div className="arbs">
                <div className="arbContainer">
                    <div className="topRightGears">
                        <a className="topRightGearsLink" href="https://www.betburger.com/arbs#">
                            <span className="topMenu black" title=""></span>
                        </a>
                        <a className="scan_time" href="https://www.betburger.com/main/scans" title="Bookmaker&#39;s updates"
                        target="_blank">
                            <span className="icomoon-stopwatch"></span>
                        </a>
                        <a className="load_plugin"
                        href="https://www.betburger.com/manual/arb-helper-plugin-for-direct-link-to-bookmakers"
                        title="Load Arb Helper" target="_blank">
                            <span className=""></span>
                        </a>
                    </div>
                    <div id="sidebar-wrapper" className=" fullHeight " style={{min_height: "650px"}}>
                        <div className="subContainer height100">
                            <div className="top-header"></div>
                            <div className="col-xs-12 padding10">
                                <div className="filterPanel">
                                    <span className="filterHeader arbsTypeSettings">Arbs type:</span>
                                    <div className="list arbsType">
                                        <ul>
                                            <li>
                                                <div className="radio">
                                                    <label for="isLiveArb">
                                                        <input type="radio" id="isLiveArb" name="is_live" value="true"/>
                                                        Live
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="radio">
                                                    <label for="isPrematchArb">
                                                        <input type="radio" id="isPrematchArb" name="is_live" value="false"
                                                            checked=""/>
                                                        Prematch
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <span className="filterHeader zoomSettings">Zoom:</span>
                                    <div className="list zoomSettingsList">
                                        <ul className="zooming">
                                            <div className="selectContainer">
                                                <select name="per_page" className="zoomOption">
                                                    <option value="100" selected="selected">100%</option>
                                                    <option value="110">110%</option>
                                                    <option value="120">120%</option>
                                                </select>
                                            </div>
                                        </ul>
                                    </div>

                                    <span className="filterHeader sortedFilter">Sorted by:</span>

                                    <div className="list sortSettingsList">
                                        <ul className="sorting">
                                            <div className="selectContainer">
                                                <select name="per_page" className="sortOption">
                                                    <option value="percent" selected="selected">Percent</option>
                                                    <option value="age">Age</option>
                                                    <option value="beginningTime">Beginning time</option>
                                                    <option value="middles">Middles</option>
                                                    <option value="roi">ROI</option>
                                                </select>
                                            </div>
                                        </ul>
                                    </div>

                                    <span className="filterHeader">Settings:</span>

                                    <div className="settingsList list">
                                        <ul>
                                            <li><input type="checkbox" value="" id="auto_update" name="auto_update" checked=""/>
                                                <label for="auto_update"><span className="checkbox"></span>
                                                    <p>Auto update</p></label>

                                            </li>
                                            <li className="notification_sound_js"><input type="checkbox" value=""
                                                                                    id="notification_sound"
                                                                                    name="notification_sound"/>
                                                <label for="notification_sound"><span className="checkbox"></span>
                                                    <p>Sound alerts</p></label>

                                            </li>
                                            <li><input type="checkbox" value="" id="notification_popup"
                                                    name="notification_popup"/>
                                                <label for="notification_popup"><span className="checkbox"></span>
                                                    <p>Show popups</p></label>

                                            </li>
                                            <li><input type="checkbox" value="" id="grouped" name="grouped" checked=""/>
                                                <label for="grouped"><span className="checkbox"></span>
                                                    <p>Group arbs</p></label>

                                            </li>
                                            <li className="hiddenLi"><input type="hidden" value="" id="event_id" name="event_id"/>
                                            </li>
                                            <li className="hiddenLi"><input type="hidden" value="percent" id="sort_by"
                                                                        name="sort_by"/>
                                            </li>
                                        </ul>

                                        <span className="bookiesInArb">Arbs on page:</span>
                                        <div className="selectContainer">
                                            <select name="per_page" className="per_page">
                                                <option value="10" selected="selected">10</option>
                                                <option value="20">20</option>
                                                <option value="30">30</option>
                                            </select>
                                        </div>
                                    </div>

                                    <span className="filterHeader">Filters:</span>

                                    <div className="filtersList list">
                                        <a href="https://www.betburger.com/arbs#" className="filter-error-popup" data-toggle="popover" data-trigger="focus" data-content="Maximum %s active filters"></a>
                                        <ul>
                                            <li><input type="checkbox" value="28783" id="sidebar_filter28783" name="demo"
                                                    checked=""/>
                                                <label title="demo" data-id="sidebar_filter28783" className="editLinkLabel">
                                                    <span className="checkbox"></span>
                                                    <p>demo</p>
                                                </label>
                                                <a href="https://www.betburger.com/filters/prematch/28783/edit" data-id="28783"
                                                target="_blank">
                                                    <span className="editLink"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container contentWrapper height100">
                        <div className="row height100">
                            <div className="row-sm-height height100">
                                <div className="col-xs-6 col-sm-height col-top leftSection height100">
                                    <div className="inside inside-full-height">
                                        <div className="content sectionContentJs height100" data-padding="80">
                                            <div className="arbsComponent height100">
                                                <div className="arbListView height100">
                                                    <div className="row height100" id="leftArbList">
                                                        <div className="col-xs-12 height100">
                                                             <div id="arbsScroll" style={{touch_action: "none"}}>
                                                                <div className="scroller" style={{transform: "translate(0px, 0px) translateZ(0px)"}}>
                                                                    <ul>
                                                                        <li className="arb_f697fb91e3e507ca83f2150d91a6ebba event_214433770">
                                                                            <div className="col-xs-12 arb-item-body-js">
                                                                                <div className="arbHead row relative">
                                                                                    <div className="row-sm-height">
                                                                                        <div className="absoluteLeft padding5px percent col-sm-height col-middle betPercent">
                                                                                            <div className="inside">
                                                                                                <div className="content">
                                                                                                    <span title="1.00%">1.00%</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-xs-12 blueBg  col-sm-height col-middle selected">
                                                                                            <div className="inside">
                                                                                                <div className="content">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height displayTable">
                                                                                                            <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content">
                                                                                                                        <span title="0.00">
                                                                                                                            0.00
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                                                                                                <span className="sport" title="Soccer">
                                                                                                                    Soccer
                                                                                                                </span>
                                                                                                                <span className="fullTime">
                                                                                                                    <small><strong title="Game period: 1st half">
                                                                                                                        [1st half]</strong>
                                                                                                                    </small>
                                                                                                                </span>
                                                                                                            </div>
                                                                                                            <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                            </div>
                                                                                                            <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content">
                                                                                                                        <a href="https://www.betburger.com/arbs#"
                                                                                                                        className="ageTime">
                                                                                                                            <span className="icomoon-clock"></span>
                                                                                                                            1 h
                                                                                                                        </a>
                                                                                                                        <a href="https://www.betburger.com/arbs#"
                                                                                                                        className="dropdown-toggle"
                                                                                                                        title="Hide menu">
                                                                                                                            <span className="icomoon-remove2"></span>
                                                                                                                        </a>
                                                                                                                        <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%22f697fb91e3e507ca83f2150d91a6ebba%22,%22event_id%22:214433770,%22arb_formula_id%22:1,%22percent%22:1,%22started_at%22:1604606400,%22event_name%22:%22Zorya%20Lugansk%20-%20AEK%20Athens%22,%22league%22:%22Europe.%20UEFA%20Europa%20League%22,%22league_id%22:9428,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:10248,%22away_id%22:4627,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:5%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22FC%20Zorya%20Luhansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA%22,%22koef%22:2.02,%22commission%22:0,%22bookmaker_event_id%22:84466837,%22bookmaker_id%22:1,%22period_id%22:5,%22bc_id%22:103,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.02,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:103,%22title%22:%22F-F1(0.0)%22,%22mv_id%22:17,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:0,%22reverse_id%22:330,%22reverse_value%22:null,%22etalon_id%22:103,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22FC%20Zorya%20Luhansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ0NzcxMDZ8MTgsMC4wLDUsMCwwLDA%22,%22koef%22:2.02,%22commission%22:0,%22bookmaker_event_id%22:84477106,%22bookmaker_id%22:105,%22period_id%22:5,%22bc_id%22:330,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.02,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:330,%22title%22:%22F-F2(0.0)%22,%22mv_id%22:18,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:0,%22reverse_id%22:103,%22reverse_value%22:null,%22etalon_id%22:330,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                        className="standalone-calculator"
                                                                                                                        title="Open in new view">
                                                                                                                            <span className="brankic-pop-out"></span>
                                                                                                                        </a>
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

                                                                        <div className="bet_1 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        Pinnacle
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        05 Nov
                                                                                                        <br/>
                                                                                                        15:00
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="FC Zorya Luhansk">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=1&amp;market_id=3"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in FC Zorya Luhansk - AEK Athens"
                                                                                                               arb_type_id="2">
                                                                                                                FC Zorya
                                                                                                                Luhansk
                                                                                                                - AEK
                                                                                                                Athens
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="UEFA - Europa League">
                                                                                                            UEFA -
                                                                                                            Europa
                                                                                                            League</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="Asian Handicap1(0)">
                                                                                                                    AH1(0)
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                            <span className="icomoon-arrow-down
                                                                                              gray "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="2.02"
                                                                                               title="Odd 2.02 on the outcome AH1(0) of event FC Zorya Luhansk - AEK Athens">
                                                                                                2.02
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bet_2 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        Sportmarket
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        05 Nov
                                                                                                        <br/>
                                                                                                        15:00
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="FC Zorya Luhansk">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=1&amp;market_id=3"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in FC Zorya Luhansk - AEK Athens"
                                                                                                               arb_type_id="2">
                                                                                                                FC Zorya
                                                                                                                Luhansk
                                                                                                                - AEK
                                                                                                                Athens
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="UEFA Europa League">
                                                                                                            UEFA Europa
                                                                                                            League</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="Asian Handicap2(0)">
                                                                                                                    AH2(0)
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                            <span className="icomoon-arrow-up
                                                                                              gray "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="2.02"
                                                                                               title="Odd 2.02 on the outcome AH2(0) of event FC Zorya Luhansk - AEK Athens">
                                                                                                2.02
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODQ0NzcxMDZ8MTgsMC4wLDUsMCwwLDA"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="arb_dac137517ce227452f3fa520f08195c0 event_216551092">
                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                        <div className="arbHead row relative">
                                                                            <div className="row-sm-height">
                                                                                <div className="absoluteLeft padding5px

              percent col-sm-height col-middle betPercent">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <span title="1.00%">1.00%</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height displayTable">
                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                            <span title="0.00">
                                                0.00
                                            </span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                    <span className="sport" title="Soccer">
                                        Soccer
                                    </span>
                                                                                                        <span className="fullTime">
                                    </span>
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="ageTime">
                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                    6 h
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="dropdown-toggle"
                                                                                                                   title="Hide menu">
                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%22dac137517ce227452f3fa520f08195c0%22,%22event_id%22:216551092,%22arb_formula_id%22:1,%22percent%22:0.998,%22started_at%22:1604512500,%22event_name%22:%22Zenit%20St%20Petersburg%20-%20Lazio%22,%22league%22:%22Europe.%20UEFA%20Champions%20League%22,%22league_id%22:3908,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:8118,%22away_id%22:5351,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:4%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22Zenit%20St.%20Petersburg%22,%22away%22:%22Lazio%22,%22id%22:%22ODQxMjY3NTR8MTcsMC4yNSw0LDAsMCww%22,%22koef%22:1.51,%22commission%22:0,%22bookmaker_event_id%22:84126754,%22bookmaker_id%22:34,%22period_id%22:4,%22bc_id%22:104,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:1.51,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:104,%22title%22:%22F-F1(0.25)%22,%22mv_id%22:17,%22value_id%22:108,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:0.25,%22reverse_id%22:329,%22reverse_value%22:null,%22etalon_id%22:104,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:108,%22value%22:0.25%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22Zenit%20St%20Petersburg%22,%22away%22:%22Lazio%22,%22id%22:%22ODM4NzYyOTl8MTgsLTAuMjUsNCwwLDAsMA%22,%22koef%22:3.05,%22commission%22:0,%22bookmaker_event_id%22:83876299,%22bookmaker_id%22:19,%22period_id%22:4,%22bc_id%22:329,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:3.05,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:329,%22title%22:%22F-F2(-0.25)%22,%22mv_id%22:18,%22value_id%22:104,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:-0.25,%22reverse_id%22:104,%22reverse_value%22:null,%22etalon_id%22:329,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:104,%22value%22:-0.25%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                   className="standalone-calculator"
                                                                                                                   title="Open in new view">
                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                </a>
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

                                                                        <div className="bet_1 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        Vbet
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        04 Nov
                                                                                                        <br/>
                                                                                                        12:55
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="Zenit St. Petersburg">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/3908/events/216551092?period=0&amp;market_id=3"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in Zenit St. Petersburg - Lazio"
                                                                                                               arb_type_id="2">
                                                                                                                Zenit
                                                                                                                St.
                                                                                                                Petersburg
                                                                                                                - Lazio
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="Europe. UEFA Champions League">
                                                                                                            Europe. UEFA
                                                                                                            Champions
                                                                                                            League</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="Asian Handicap1(+0.25)">
                                                                                                                    AH1(+0.25)
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                            <span className="icomoon-arrow-up
                              gray "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="1.51"
                                                                                               title="Odd 1.51 on the outcome AH1(+0.25) of event Zenit St. Petersburg - Lazio">
                                                                                                1.51
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODQxMjY3NTR8MTcsMC4yNSw0LDAsMCww"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bet_2 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        Unibet
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        04 Nov
                                                                                                        <br/>
                                                                                                        12:55
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="Zenit St Petersburg">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/3908/events/216551092?period=0&amp;market_id=3"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in Zenit St Petersburg - Lazio"
                                                                                                               arb_type_id="2">
                                                                                                                Zenit St
                                                                                                                Petersburg
                                                                                                                - Lazio
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="Champions League">
                                                                                                            Champions
                                                                                                            League</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="Asian Handicap2(-0.25)">
                                                                                                                    AH2(-0.25)
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                            <span className="icomoon-arrow-up
                              gray "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="3.05"
                                                                                               title="Odd 3.05 on the outcome AH2(-0.25) of event Zenit St Petersburg - Lazio">
                                                                                                3.05
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODM4NzYyOTl8MTgsLTAuMjUsNCwwLDAsMA"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="arb_debeb2be65f10cab2baf857aa2b0f921 event_215924845">
                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                        <div className="arbHead row relative">
                                                                            <div className="row-sm-height">
                                                                                <div className="absoluteLeft padding5px

              percent col-sm-height col-middle betPercent">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <span title="0.99%">0.99%</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height displayTable">
                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                            <span title="0.00">
                                                0.00
                                            </span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                    <span className="sport" title="Soccer">
                                        Soccer
                                    </span>
                                                                                                        <span className="fullTime">
                                    </span>
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="ageTime">
                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                    9 h
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="dropdown-toggle"
                                                                                                                   title="Hide menu">
                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%22debeb2be65f10cab2baf857aa2b0f921%22,%22event_id%22:215924845,%22arb_formula_id%22:1,%22percent%22:0.993,%22started_at%22:1604433600,%22event_name%22:%22Atalanta%20-%20Liverpool%22,%22league%22:%22Europe.%20UEFA%20Champions%20League%22,%22league_id%22:3908,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:5332,%22away_id%22:2966,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:4%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22Atalanta%22,%22away%22:%22Liverpool%22,%22id%22:%22ODMyODE2MDN8MTcsMS41LDQsMCwwLDA%22,%22koef%22:1.34,%22commission%22:0,%22bookmaker_event_id%22:83281603,%22bookmaker_id%22:26,%22period_id%22:4,%22bc_id%22:109,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:1.34,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:109,%22title%22:%22F-F1(1.5)%22,%22mv_id%22:17,%22value_id%22:123,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:1.5,%22reverse_id%22:324,%22reverse_value%22:null,%22etalon_id%22:109,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:123,%22value%22:1.5%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22Atalanta%22,%22away%22:%22Liverpool%22,%22id%22:%22ODMzMTgzNjJ8MTgsLTEuNSw0LDAsMCww%22,%22koef%22:4.1,%22commission%22:0,%22bookmaker_event_id%22:83318362,%22bookmaker_id%22:19,%22period_id%22:4,%22bc_id%22:324,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:4.1,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:324,%22title%22:%22F-F2(-1.5)%22,%22mv_id%22:18,%22value_id%22:99,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:-1.5,%22reverse_id%22:109,%22reverse_value%22:null,%22etalon_id%22:324,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:99,%22value%22:-1.5%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                   className="standalone-calculator"
                                                                                                                   title="Open in new view">
                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                </a>
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

                                                                        <div className="bet_1 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        Totogaming
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        03 Nov
                                                                                                        <br/>
                                                                                                        15:00
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="Atalanta">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/3908/events/215924845?period=0&amp;market_id=3"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in Atalanta - Liverpool"
                                                                                                               arb_type_id="2">
                                                                                                                Atalanta
                                                                                                                -
                                                                                                                Liverpool
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="Europe. UEFA Champions League">
                                                                                                            Europe. UEFA
                                                                                                            Champions
                                                                                                            League</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="Asian Handicap1(+1.5)">
                                                                                                                    AH1(+1.5)
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                            <span className="icomoon-arrow-down
                              gray "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="1.34"
                                                                                               title="Odd 1.34 on the outcome AH1(+1.5) of event Atalanta - Liverpool">
                                                                                                1.34
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODMyODE2MDN8MTcsMS41LDQsMCwwLDA"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bet_2 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        Unibet
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        03 Nov
                                                                                                        <br/>
                                                                                                        15:00
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="Atalanta">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/3908/events/215924845?period=0&amp;market_id=3"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in Atalanta - Liverpool"
                                                                                                               arb_type_id="2">
                                                                                                                Atalanta
                                                                                                                -
                                                                                                                Liverpool
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="Champions League">
                                                                                                            Champions
                                                                                                            League</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="Asian Handicap2(-1.5)">
                                                                                                                    AH2(-1.5)
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                            <span className="icomoon-arrow-down
                              gray "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="4.1"
                                                                                               title="Odd 4.1 on the outcome AH2(-1.5) of event Atalanta - Liverpool">
                                                                                                4.10
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODMzMTgzNjJ8MTgsLTEuNSw0LDAsMCww"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="arb_c5dec48d7fbe76aa526a5466775a529e event_212042898">
                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                        <div className="arbHead row relative">
                                                                            <div className="row-sm-height">
                                                                                <div className="absoluteLeft padding5px

              percent col-sm-height col-middle betPercent">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <span title="0.99%">0.99%</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height displayTable">
                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                            <span title="0.00">
                                                0.00
                                            </span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                    <span className="sport" title="Hockey">
                                        Hockey
                                    </span>
                                                                                                        <span className="fullTime">
                                            <small><strong title="Game period: regular time">
                                                [regular time]</strong>
                                            </small>
                                    </span>
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="ageTime">
                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                    6
                                                                                                                    min
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="dropdown-toggle"
                                                                                                                   title="Hide menu">
                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%22c5dec48d7fbe76aa526a5466775a529e%22,%22event_id%22:212042898,%22arb_formula_id%22:1,%22percent%22:0.99,%22started_at%22:1604593800,%22event_name%22:%22Russia%20-%20Finland%22,%22league%22:%22Europe.%20Hockey%20Tour%22,%22league_id%22:9239,%22sport_id%22:6,%22country_id%22:11,%22home_id%22:27193,%22away_id%22:28454,%22sport%22:%7B%22id%22:6,%22name%22:%22Hockey%22%7D,%22period_id%22:4%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22Russia%22,%22away%22:%22Finland%22,%22id%22:%22ODE1MzU0Njh8MTcsMS4wLDQsMCwwLDA%22,%22koef%22:2,%22commission%22:0,%22bookmaker_event_id%22:81535468,%22bookmaker_id%22:21,%22period_id%22:4,%22bc_id%22:107,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:107,%22title%22:%22F-F1(1.0)%22,%22mv_id%22:17,%22value_id%22:117,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:1,%22reverse_id%22:326,%22reverse_value%22:null,%22etalon_id%22:107,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:117,%22value%22:1%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:6,%22name%22:%22Hockey%22%7D,%22period_name_by_sport_t%22:%22regular%20time%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22Russia%22,%22away%22:%22Finland%22,%22id%22:%22NzU1NDk4ODB8MTgsLTEuMCw0LDAsMCww%22,%22koef%22:2.04,%22commission%22:0,%22bookmaker_event_id%22:75549880,%22bookmaker_id%22:4,%22period_id%22:4,%22bc_id%22:326,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.04,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:326,%22title%22:%22F-F2(-1.0)%22,%22mv_id%22:18,%22value_id%22:101,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:-1,%22reverse_id%22:107,%22reverse_value%22:null,%22etalon_id%22:326,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:101,%22value%22:-1%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:6,%22name%22:%22Hockey%22%7D,%22period_name_by_sport_t%22:%22regular%20time%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                   className="standalone-calculator"
                                                                                                                   title="Open in new view">
                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                </a>
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

                                                                        <div className="bet_1 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        1xbet
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        05 Nov
                                                                                                        <br/>
                                                                                                        11:30
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="Russia">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/6/countries/11/leagues/9239/events/212042898?period=0&amp;market_id=3"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in Russia - Finland"
                                                                                                               arb_type_id="2">
                                                                                                                Russia -
                                                                                                                Finland
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="Euro Tour. Karjala Cup">
                                                                                                            Euro Tour.
                                                                                                            Karjala
                                                                                                            Cup</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="Asian Handicap1(+1)">
                                                                                                                    AH1(+1)
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                            <span className="icomoon-arrow-up
                             "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="2"
                                                                                               title="Odd 2 on the outcome AH1(+1) of event Russia - Finland">
                                                                                                2.00
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODE1MzU0Njh8MTcsMS4wLDQsMCwwLDA"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bet_2 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        Marathon
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        05 Nov
                                                                                                        <br/>
                                                                                                        11:30
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="Russia">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/6/countries/11/leagues/9239/events/212042898?period=0&amp;market_id=3"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in Russia - Finland"
                                                                                                               arb_type_id="2">
                                                                                                                Russia -
                                                                                                                Finland
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="Internationals. Euro Tour. Event 1. Finland">
                                                                                                            Internationals.
                                                                                                            Euro Tour.
                                                                                                            Event 1.
                                                                                                            Finland</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="Asian Handicap2(-1)">
                                                                                                                    AH2(-1)
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                            <span className="icomoon-arrow-up
                             "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="2.04"
                                                                                               title="Odd 2.04 on the outcome AH2(-1) of event Russia - Finland">
                                                                                                2.04
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="NzU1NDk4ODB8MTgsLTEuMCw0LDAsMCww"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="arb_6b620abd26d000002e6054622d46e691 event_216515386">
                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                        <div className="arbHead row relative">
                                                                            <div className="row-sm-height">
                                                                                <div className="absoluteLeft padding5px

              percent col-sm-height col-middle betPercent">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <span title="0.98%">0.98%</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height displayTable">
                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                            <span title="0.00">
                                                0.00
                                            </span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                    <span className="sport" title="Soccer">
                                        Soccer
                                    </span>
                                                                                                        <span className="fullTime">
                                            <small><strong title="Game period: 1st half">
                                                [1st half]</strong>
                                            </small>
                                    </span>
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="ageTime">
                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                    2 h
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="dropdown-toggle"
                                                                                                                   title="Hide menu">
                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%226b620abd26d000002e6054622d46e691%22,%22event_id%22:216515386,%22arb_formula_id%22:1,%22percent%22:0.976,%22started_at%22:1604520000,%22event_name%22:%22RB%20Leipzig%20-%20Paris%20Saint%20Germain%22,%22league%22:%22Europe.%20UEFA%20Champions%20League%22,%22league_id%22:3908,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:4195,%22away_id%22:3634,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:5%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22RasenBallsport%20Leipzig%22,%22away%22:%22Paris%20Saint-Germain%22,%22id%22:%22ODM2OTc1Nzd8MTcsMC4yNSw1LDAsMCww%22,%22koef%22:1.8,%22commission%22:0,%22bookmaker_event_id%22:83697577,%22bookmaker_id%22:21,%22period_id%22:5,%22bc_id%22:104,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:1.8,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:104,%22title%22:%22F-F1(0.25)%22,%22mv_id%22:17,%22value_id%22:108,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:0.25,%22reverse_id%22:329,%22reverse_value%22:null,%22etalon_id%22:104,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:108,%22value%22:0.25%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22RB%20Leipzig%22,%22away%22:%22Paris%20Saint%20Germain%22,%22id%22:%22ODM4NzM2NzR8MTgsLTAuMjUsNSwwLDAsMA%22,%22koef%22:2.3,%22commission%22:0,%22bookmaker_event_id%22:83873674,%22bookmaker_id%22:12,%22period_id%22:5,%22bc_id%22:329,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.3,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:329,%22title%22:%22F-F2(-0.25)%22,%22mv_id%22:18,%22value_id%22:104,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:-0.25,%22reverse_id%22:104,%22reverse_value%22:null,%22etalon_id%22:329,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:104,%22value%22:-0.25%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                   className="standalone-calculator"
                                                                                                                   title="Open in new view">
                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                </a>
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

                                                                        <div className="bet_1 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        1xbet
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        04 Nov
                                                                                                        <br/>
                                                                                                        15:00
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="RasenBallsport Leipzig">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/3908/events/216515386?period=1&amp;market_id=3"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in RasenBallsport Leipzig - Paris Saint-Germain"
                                                                                                               arb_type_id="2">
                                                                                                                RasenBallsport
                                                                                                                Leipzig
                                                                                                                - Paris
                                                                                                                Saint-Germain
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="UEFA Champions League">
                                                                                                            UEFA
                                                                                                            Champions
                                                                                                            League</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="Asian Handicap1(+0.25)">
                                                                                                                    AH1(+0.25)
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="1.8"
                                                                                               title="Odd 1.8 on the outcome AH1(+0.25) of event RasenBallsport Leipzig - Paris Saint-Germain">
                                                                                                1.80
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODM2OTc1Nzd8MTcsMC4yNSw1LDAsMCww"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bet_2 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        DafabetOW
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        04 Nov
                                                                                                        <br/>
                                                                                                        15:00
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="RB Leipzig">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/3908/events/216515386?period=1&amp;market_id=3"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in RB Leipzig - Paris Saint Germain"
                                                                                                               arb_type_id="2">
                                                                                                                RB
                                                                                                                Leipzig
                                                                                                                - Paris
                                                                                                                Saint
                                                                                                                Germain
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="*UEFA CHAMPIONS LEAGUE|l_1837.png">
                                                                                                            *UEFA
                                                                                                            CHAMPIONS
                                                                                                            LEAGUE|l_1837.png</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="Asian Handicap2(-0.25)">
                                                                                                                    AH2(-0.25)
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                            <span className="icomoon-arrow-up
                              gray "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="2.3"
                                                                                               title="Odd 2.3 on the outcome AH2(-0.25) of event RB Leipzig - Paris Saint Germain">
                                                                                                2.30
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODM4NzM2NzR8MTgsLTAuMjUsNSwwLDAsMA"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="arb_132b92dfdeeb3787a8890a407c90ea7d event_216543289">
                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                        <div className="arbHead row relative">
                                                                            <div className="row-sm-height">
                                                                                <div className="absoluteLeft padding5px

              percent col-sm-height col-middle betPercent">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <span title="0.97%">0.97%</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height displayTable">
                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                            <span title="0.00">
                                                0.00
                                            </span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                    <span className="sport" title="Soccer">
                                        Soccer
                                    </span>
                                                                                                        <span className="fullTime">
                                    </span>
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="ageTime">
                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                    9
                                                                                                                    min
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="dropdown-toggle"
                                                                                                                   title="Hide menu">
                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%22132b92dfdeeb3787a8890a407c90ea7d%22,%22event_id%22:216543289,%22arb_formula_id%22:1,%22percent%22:0.971,%22started_at%22:1604520000,%22event_name%22:%22Barcelona%20-%20Dynamo%20Kyiv%22,%22league%22:%22Europe.%20UEFA%20Champions%20League%22,%22league_id%22:3908,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:8781,%22away_id%22:10250,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:4%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22FC%20Barcelona%22,%22away%22:%22Dynamo%20Kyiv%22,%22id%22:%22ODM4ODIyNTF8MTksNS4wLDQsMCwwLDA%22,%22koef%22:6.1,%22commission%22:0,%22bookmaker_event_id%22:83882251,%22bookmaker_id%22:19,%22period_id%22:4,%22bc_id%22:486,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:6.1,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:486,%22title%22:%22OU-TO(5.0)%22,%22mv_id%22:19,%22value_id%22:166,%22synonym_id%22:null,%22m_id%22:7,%22bv_id%22:7,%22value%22:5,%22reverse_id%22:1366,%22reverse_value%22:null,%22etalon_id%22:486,%22created_at%22:1389619769,%22updated_at%22:1510297572,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:166,%22value%22:5%7D,%22market_variation%22:%7B%22id%22:19,%22title%22:%22OU-TO%22,%22market_id%22:7,%22bet_variation_id%22:7,%22swap_id%22:null%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22Barcelona%22,%22away%22:%22Dynamo%20Kyiv%22,%22id%22:%22ODM3NjYwMzF8MjAsNS4wLDQsMCwwLDA%22,%22koef%22:1.21,%22commission%22:0,%22bookmaker_event_id%22:83766031,%22bookmaker_id%22:27,%22period_id%22:4,%22bc_id%22:1366,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:1.21,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:1366,%22title%22:%22OU-TU(5.0)%22,%22mv_id%22:20,%22value_id%22:166,%22synonym_id%22:null,%22m_id%22:7,%22bv_id%22:8,%22value%22:5,%22reverse_id%22:486,%22reverse_value%22:null,%22etalon_id%22:1366,%22created_at%22:1389619769,%22updated_at%22:1510297575,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:166,%22value%22:5%7D,%22market_variation%22:%7B%22id%22:20,%22title%22:%22OU-TU%22,%22market_id%22:7,%22bet_variation_id%22:8,%22swap_id%22:null%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                   className="standalone-calculator"
                                                                                                                   title="Open in new view">
                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                </a>
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

                                                                        <div className="bet_1 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        Unibet
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        04 Nov
                                                                                                        <br/>
                                                                                                        15:00
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="FC Barcelona">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/3908/events/216543289?period=0&amp;market_id=7"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in FC Barcelona - Dynamo Kyiv"
                                                                                                               arb_type_id="3">
                                                                                                                FC
                                                                                                                Barcelona
                                                                                                                - Dynamo
                                                                                                                Kyiv
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="Champions League">
                                                                                                            Champions
                                                                                                            League</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="Total Over(5)">
                                                                                                                    TO(5)
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                            <span className="icomoon-arrow-up
                              gray "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="6.1"
                                                                                               title="Odd 6.1 on the outcome TO(5) of event FC Barcelona - Dynamo Kyiv">
                                                                                                6.10
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODM4ODIyNTF8MTksNS4wLDQsMCwwLDA"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bet_2 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        Olimp
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        04 Nov
                                                                                                        <br/>
                                                                                                        15:00
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="Barcelona">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/3908/events/216543289?period=0&amp;market_id=7"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in Barcelona - Dynamo Kyiv"
                                                                                                               arb_type_id="3">
                                                                                                                Barcelona
                                                                                                                - Dynamo
                                                                                                                Kyiv
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="Europe. UEFA Champions League">
                                                                                                            Europe. UEFA
                                                                                                            Champions
                                                                                                            League</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="Total Under(5)">
                                                                                                                    TU(5)
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                            <span className="icomoon-arrow-up
                             "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="1.21"
                                                                                               title="Odd 1.21 on the outcome TU(5) of event Barcelona - Dynamo Kyiv">
                                                                                                1.21
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODM3NjYwMzF8MjAsNS4wLDQsMCwwLDA"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="arb_3fda442ec5811900d66c3f3f846cdf0a event_216494851">
                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                        <div className="arbHead row relative">
                                                                            <div className="row-sm-height">
                                                                                <div className="absoluteLeft padding5px

              percent col-sm-height col-middle betPercent">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <span title="0.97%">0.97%</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height displayTable">
                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                            <span title="0.00">
                                                0.00
                                            </span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                    <span className="sport" title="Soccer">
                                        Soccer
                                    </span>
                                                                                                        <span className="fullTime">
                                    </span>
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="ageTime">
                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                    9 h
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="dropdown-toggle"
                                                                                                                   title="Hide menu">
                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%223fda442ec5811900d66c3f3f846cdf0a%22,%22event_id%22:216494851,%22arb_formula_id%22:1,%22percent%22:0.966,%22started_at%22:1604426400,%22event_name%22:%22Shrewsbury%20Town%20-%20Burton%20Albion%22,%22league%22:%22England.%20League%201%22,%22league_id%22:3964,%22sport_id%22:7,%22country_id%22:5,%22home_id%22:3082,%22away_id%22:3116,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:4%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22Shrewsbury%22,%22away%22:%22burton%20albion%22,%22id%22:%22ODM0MjM0MjV8MTQsMC4wLDQsMCwwLDA%22,%22koef%22:1.375,%22commission%22:0,%22bookmaker_event_id%22:83423425,%22bookmaker_id%22:78,%22period_id%22:4,%22bc_id%22:2235,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:1.375,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:2235,%22title%22:%22DC-1X()%22,%22mv_id%22:14,%22value_id%22:null,%22synonym_id%22:105,%22m_id%22:2,%22bv_id%22:29,%22value%22:null,%22reverse_id%22:2250,%22reverse_value%22:null,%22etalon_id%22:105,%22created_at%22:1389619769,%22updated_at%22:1510297578,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22market_variation%22:%7B%22id%22:14,%22title%22:%22DC-1X%22,%22market_id%22:2,%22bet_variation_id%22:29,%22swap_id%22:15%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22Shrewsbury%22,%22away%22:%22Burton%22,%22id%22:%22ODM0MzcyOTF8MTMsMC4wLDQsMCwwLDA%22,%22koef%22:3.8,%22commission%22:0,%22bookmaker_event_id%22:83437291,%22bookmaker_id%22:86,%22period_id%22:4,%22bc_id%22:2250,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:3.8,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:2250,%22title%22:%221X2-2()%22,%22mv_id%22:13,%22value_id%22:null,%22synonym_id%22:328,%22m_id%22:1,%22bv_id%22:34,%22value%22:null,%22reverse_id%22:2235,%22reverse_value%22:null,%22etalon_id%22:328,%22created_at%22:1389619769,%22updated_at%22:1510297578,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22market_variation%22:%7B%22id%22:13,%22title%22:%221X2-2%22,%22market_id%22:1,%22bet_variation_id%22:34,%22swap_id%22:11%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                   className="standalone-calculator"
                                                                                                                   title="Open in new view">
                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                </a>
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

                                                                        <div className="bet_1 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        Betway
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        03 Nov
                                                                                                        <br/>
                                                                                                        13:00
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="Shrewsbury">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/5/leagues/3964/events/216494851?period=0&amp;market_id=2"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in Shrewsbury - burton albion"
                                                                                                               arb_type_id="1">
                                                                                                                Shrewsbury
                                                                                                                - burton
                                                                                                                albion
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="England - League One">
                                                                                                            England -
                                                                                                            League
                                                                                                            One</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="1X">
                                                                                                                    1X
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                            <span className="icomoon-arrow-up
                              gray "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="1.375"
                                                                                               title="Odd 1.375 on the outcome 1X of event Shrewsbury - burton albion">
                                                                                                1.38
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODM0MjM0MjV8MTQsMC4wLDQsMCwwLDA"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bet_2 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        Skybet
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        03 Nov
                                                                                                        <br/>
                                                                                                        13:00
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="Shrewsbury">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/5/leagues/3964/events/216494851?period=0&amp;market_id=1"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in Shrewsbury - Burton"
                                                                                                               arb_type_id="1">
                                                                                                                Shrewsbury
                                                                                                                - Burton
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="Sky Bet League One">
                                                                                                            Sky Bet
                                                                                                            League
                                                                                                            One</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="2">
                                                                                                                    2
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                            <span className="icomoon-arrow-up
                              gray "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="3.8"
                                                                                               title="Odd 3.8 on the outcome 2 of event Shrewsbury - Burton">
                                                                                                3.80
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODM0MzcyOTF8MTMsMC4wLDQsMCwwLDA"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="arb_0c54f58ae5821d8cb40373835651725e event_216657628">
                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                        <div className="arbHead row relative">
                                                                            <div className="row-sm-height">
                                                                                <div className="absoluteLeft padding5px

              percent col-sm-height col-middle betPercent">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <span title="0.96%">0.96%</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height displayTable">
                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                            <span title="0.00">
                                                0.00
                                            </span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                    <span className="sport" title="Soccer">
                                        Soccer
                                    </span>
                                                                                                        <span className="fullTime">
                                    </span>
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="ageTime">
                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                    3 h
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="dropdown-toggle"
                                                                                                                   title="Hide menu">
                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%220c54f58ae5821d8cb40373835651725e%22,%22event_id%22:216657628,%22arb_formula_id%22:1,%22percent%22:0.964,%22started_at%22:1604606400,%22event_name%22:%22Villarreal%20-%20Maccabi%20Tel%20Aviv%22,%22league%22:%22Europe.%20UEFA%20Europa%20League%22,%22league_id%22:9428,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:8802,%22away_id%22:5299,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:4%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22Villarreal%22,%22away%22:%22Maccabi%20Tel%20Aviv%22,%22id%22:%22ODQzNjQyODJ8MTUsMC4wLDQsMCwwLDA%22,%22koef%22:2.95,%22commission%22:0,%22bookmaker_event_id%22:84364282,%22bookmaker_id%22:94,%22period_id%22:4,%22bc_id%22:2238,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.95,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:2238,%22title%22:%22DC-X2()%22,%22mv_id%22:15,%22value_id%22:null,%22synonym_id%22:332,%22m_id%22:2,%22bv_id%22:30,%22value%22:null,%22reverse_id%22:2244,%22reverse_value%22:null,%22etalon_id%22:332,%22created_at%22:1389619769,%22updated_at%22:1510297578,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22market_variation%22:%7B%22id%22:15,%22title%22:%22DC-X2%22,%22market_id%22:2,%22bet_variation_id%22:30,%22swap_id%22:14%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22Villarreal%22,%22away%22:%22Maccabi%20Tel%20Aviv%22,%22id%22:%22ODQyMzEyMDh8MTEsMC4wLDQsMCwwLDA%22,%22koef%22:1.535,%22commission%22:0,%22bookmaker_event_id%22:84231208,%22bookmaker_id%22:21,%22period_id%22:4,%22bc_id%22:2244,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:1.535,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:2244,%22title%22:%221X2-1()%22,%22mv_id%22:11,%22value_id%22:null,%22synonym_id%22:101,%22m_id%22:1,%22bv_id%22:32,%22value%22:null,%22reverse_id%22:2238,%22reverse_value%22:null,%22etalon_id%22:101,%22created_at%22:1389619769,%22updated_at%22:1510297578,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22market_variation%22:%7B%22id%22:11,%22title%22:%221X2-1%22,%22market_id%22:1,%22bet_variation_id%22:32,%22swap_id%22:13%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                   className="standalone-calculator"
                                                                                                                   title="Open in new view">
                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                </a>
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

                                                                        <div className="bet_1 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        Pamestoixima
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        05 Nov
                                                                                                        <br/>
                                                                                                        15:00
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="Villarreal">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/216657628?period=0&amp;market_id=2"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in Villarreal - Maccabi Tel Aviv"
                                                                                                               arb_type_id="1">
                                                                                                                Villarreal
                                                                                                                -
                                                                                                                Maccabi
                                                                                                                Tel Aviv
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="Europe. UEFA Europa League">
                                                                                                            Europe. UEFA
                                                                                                            Europa
                                                                                                            League</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="X2">
                                                                                                                    X2
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                            <span className="icomoon-arrow-down
                              gray "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="2.95"
                                                                                               title="Odd 2.95 on the outcome X2 of event Villarreal - Maccabi Tel Aviv">
                                                                                                2.95
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODQzNjQyODJ8MTUsMC4wLDQsMCwwLDA"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bet_2 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        1xbet
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        05 Nov
                                                                                                        <br/>
                                                                                                        15:00
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="Villarreal">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/216657628?period=0&amp;market_id=1"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in Villarreal - Maccabi Tel Aviv"
                                                                                                               arb_type_id="1">
                                                                                                                Villarreal
                                                                                                                -
                                                                                                                Maccabi
                                                                                                                Tel Aviv
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="UEFA Europa League">
                                                                                                            UEFA Europa
                                                                                                            League</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="1">
                                                                                                                    1
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                            <span className="icomoon-arrow-up
                              gray "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="1.535"
                                                                                               title="Odd 1.535 on the outcome 1 of event Villarreal - Maccabi Tel Aviv">
                                                                                                1.54
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODQyMzEyMDh8MTEsMC4wLDQsMCwwLDA"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="arb_609081c23d7abb7a17b950f8208682b8 event_216648070">
                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                        <div className="arbHead row relative">
                                                                            <div className="row-sm-height">
                                                                                <div className="absoluteLeft padding5px

              percent col-sm-height col-middle betPercent">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <span title="0.96%">0.96%</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height displayTable">
                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                            <span title="0.00">
                                                0.00
                                            </span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                    <span className="sport" title="Soccer">
                                        Soccer
                                    </span>
                                                                                                        <span className="fullTime">
                                            <small><strong title="Game period: 1st half">
                                                [1st half]</strong>
                                            </small>
                                    </span>
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="ageTime">
                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                    1 h
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="dropdown-toggle"
                                                                                                                   title="Hide menu">
                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%22609081c23d7abb7a17b950f8208682b8%22,%22event_id%22:216648070,%22arb_formula_id%22:1,%22percent%22:0.96,%22started_at%22:1604606400,%22event_name%22:%22Dinamo%20Zagreb%20-%20Wolfsberger%20AC%20(WAC)%22,%22league%22:%22Europe.%20UEFA%20Europa%20League%22,%22league_id%22:9428,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:2260,%22away_id%22:544,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:5%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22Dinamo%20Zagreb%22,%22away%22:%22Wolfsberger%20AC%22,%22id%22:%22ODQ2MTU1MjB8MTcsLTAuMjUsNSwwLDAsMA%22,%22koef%22:2.06,%22commission%22:0,%22bookmaker_event_id%22:84615520,%22bookmaker_id%22:3,%22period_id%22:5,%22bc_id%22:102,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.06,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:102,%22title%22:%22F-F1(-0.25)%22,%22mv_id%22:17,%22value_id%22:104,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:-0.25,%22reverse_id%22:331,%22reverse_value%22:null,%22etalon_id%22:102,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:104,%22value%22:-0.25%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22Dinamo%20Zagreb%22,%22away%22:%22Wolfsberger%20AC%22,%22id%22:%22ODQxODI2NTZ8MTgsMC4yNSw1LDAsMCww%22,%22koef%22:1.98,%22commission%22:0,%22bookmaker_event_id%22:84182656,%22bookmaker_id%22:2,%22period_id%22:5,%22bc_id%22:331,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:1.98,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:331,%22title%22:%22F-F2(0.25)%22,%22mv_id%22:18,%22value_id%22:108,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:0.25,%22reverse_id%22:102,%22reverse_value%22:null,%22etalon_id%22:331,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:108,%22value%22:0.25%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                   className="standalone-calculator"
                                                                                                                   title="Open in new view">
                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                </a>
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

                                                                        <div className="bet_1 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        Sbobet
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        05 Nov
                                                                                                        <br/>
                                                                                                        15:00
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="Dinamo Zagreb">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/216648070?period=1&amp;market_id=3"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in Dinamo Zagreb - Wolfsberger AC"
                                                                                                               arb_type_id="2">
                                                                                                                Dinamo
                                                                                                                Zagreb -
                                                                                                                Wolfsberger
                                                                                                                AC
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="UEFA EUROPA LEAGUE">
                                                                                                            UEFA EUROPA
                                                                                                            LEAGUE</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="Asian Handicap1(-0.25)">
                                                                                                                    AH1(-0.25)
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="2.06"
                                                                                               title="Odd 2.06 on the outcome AH1(-0.25) of event Dinamo Zagreb - Wolfsberger AC">
                                                                                                2.06
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODQ2MTU1MjB8MTcsLTAuMjUsNSwwLDAsMA"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bet_2 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        Betcity
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        05 Nov
                                                                                                        <br/>
                                                                                                        15:00
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="Dinamo Zagreb">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/216648070?period=1&amp;market_id=3"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in Dinamo Zagreb - Wolfsberger AC"
                                                                                                               arb_type_id="2">
                                                                                                                Dinamo
                                                                                                                Zagreb -
                                                                                                                Wolfsberger
                                                                                                                AC
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="Soccer. UEFA Europa League. Group stage.">
                                                                                                            Soccer. UEFA
                                                                                                            Europa
                                                                                                            League.
                                                                                                            Group
                                                                                                            stage.</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="Asian Handicap2(+0.25)">
                                                                                                                    AH2(+0.25)
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                            <span className="icomoon-arrow-up
                              gray "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="1.98"
                                                                                               title="Odd 1.98 on the outcome AH2(+0.25) of event Dinamo Zagreb - Wolfsberger AC">
                                                                                                1.98
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODQxODI2NTZ8MTgsMC4yNSw1LDAsMCww"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="arb_e7b1889a9aa9f402fee4e5e417a9e366 event_216619288">
                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                        <div className="arbHead row relative">
                                                                            <div className="row-sm-height">
                                                                                <div className="absoluteLeft padding5px

              percent col-sm-height col-middle betPercent">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <span title="0.95%">0.95%</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height displayTable">
                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                            <span title="0.00">
                                                0.00
                                            </span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                    <span className="sport" title="Soccer">
                                        Soccer
                                    </span>
                                                                                                        <span className="fullTime">
                                    </span>
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                    </div>
                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                        <div className="inside">
                                                                                                            <div className="content">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="ageTime">
                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                    6 h
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="dropdown-toggle"
                                                                                                                   title="Hide menu">
                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                </a>
                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%22e7b1889a9aa9f402fee4e5e417a9e366%22,%22event_id%22:216619288,%22arb_formula_id%22:1,%22percent%22:0.949,%22started_at%22:1604598900,%22event_name%22:%22Omonia%20Nicosia%20-%20Granada%20CF%22,%22league%22:%22Europe.%20UEFA%20Europa%20League%22,%22league_id%22:9428,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:2412,%22away_id%22:8786,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:4%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22Omonia%20Nicosia%22,%22away%22:%22Granada%20CF%22,%22id%22:%22ODQyMjIwMjV8MjEsMS41LDQsMCwwLDA%22,%22koef%22:5.8,%22commission%22:0,%22bookmaker_event_id%22:84222025,%22bookmaker_id%22:81,%22period_id%22:4,%22bc_id%22:884,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:5.8,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:884,%22title%22:%22OU1-TO(1.5)%22,%22mv_id%22:21,%22value_id%22:123,%22synonym_id%22:null,%22m_id%22:8,%22bv_id%22:7,%22value%22:1.5,%22reverse_id%22:1767,%22reverse_value%22:null,%22etalon_id%22:884,%22created_at%22:1389619769,%22updated_at%22:1510297573,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:123,%22value%22:1.5%7D,%22market_variation%22:%7B%22id%22:21,%22title%22:%22OU1-TO%22,%22market_id%22:8,%22bet_variation_id%22:7,%22swap_id%22:23%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22Omonia%22,%22away%22:%22Granada%22,%22id%22:%22ODQyMjczMDJ8MjIsMS41LDQsMCwwLDA%22,%22koef%22:1.2222222,%22commission%22:0,%22bookmaker_event_id%22:84227302,%22bookmaker_id%22:53,%22period_id%22:4,%22bc_id%22:1767,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:1.2222222,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:1767,%22title%22:%22OU1-TU(1.5)%22,%22mv_id%22:22,%22value_id%22:123,%22synonym_id%22:null,%22m_id%22:8,%22bv_id%22:8,%22value%22:1.5,%22reverse_id%22:884,%22reverse_value%22:null,%22etalon_id%22:1767,%22created_at%22:1389619769,%22updated_at%22:1510297577,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:123,%22value%22:1.5%7D,%22market_variation%22:%7B%22id%22:22,%22title%22:%22OU1-TU%22,%22market_id%22:8,%22bet_variation_id%22:8,%22swap_id%22:24%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                   className="standalone-calculator"
                                                                                                                   title="Open in new view">
                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                </a>
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

                                                                        <div className="bet_1 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        Kladise
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        05 Nov
                                                                                                        <br/>
                                                                                                        12:55
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="Omonia Nicosia">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/216619288?period=0&amp;market_id=8"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in Omonia Nicosia - Granada CF"
                                                                                                               arb_type_id="4">
                                                                                                                Omonia
                                                                                                                Nicosia
                                                                                                                -
                                                                                                                Granada
                                                                                                                CF
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="Uefa Europa League">
                                                                                                            Uefa Europa
                                                                                                            League</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="Total Over(1.5) for Team1">
                                                                                                                    TO(1.5)
                                                                                                                    for
                                                                                                                    Team1
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                            <span className="icomoon-arrow-up
                              gray "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="5.8"
                                                                                               title="Odd 5.8 on the outcome TO(1.5) for Team1 of event Omonia Nicosia - Granada CF">
                                                                                                5.80
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODQyMjIwMjV8MjEsMS41LDQsMCwwLDA"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bet_2 row relative">
                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                    <div className="row height100">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                <div className="inside">
                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                        PaddyPower
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                    <div className="row">
                                                                                        <div className="row-sm-height">
                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                <div className="inside">
                                                                                                    <div className="content timeContainer">
                                                                                                        05 Nov
                                                                                                        <br/>
                                                                                                        12:55
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                    <div className="inside height100">
                                                                                        <div className="content eventLegueName height100">
                                                                                            <div className="row height100">
                                                                                                <div className="row-sm-height">
                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                           title="Copy"
                                                                                                           data-to-copy="Omonia">
                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                        </a>
                                                                                                        <div>
                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/216619288?period=0&amp;market_id=8"
                                                                                                               target="_blank"
                                                                                                               rel="nofollow"
                                                                                                               title="Arb in Omonia - Granada"
                                                                                                               arb_type_id="4">
                                                                                                                Omonia -
                                                                                                                Granada
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <small className="text-muted"
                                                                                                               title="UEFA Europa League">
                                                                                                            UEFA Europa
                                                                                                            League</small>
                                                                                                    </div>
                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                        <div className="inside">
                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                   rel="nofollow"
                                                                                                                   title="Total Under(1.5) for Team1">
                                                                                                                    TU(1.5)
                                                                                                                    for
                                                                                                                    Team1
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                    <div className="inside">
                                                                                        <div className="content text-right relative outcomeKoef">
                            <span className="icomoon-arrow-down
                              gray "></span>
                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                               rel="nofollow"
                                                                                               koef_eu="1.2222222"
                                                                                               title="Odd 1.2222222 on the outcome TU(1.5) for Team1 of event Omonia - Granada">
                                                                                                1.22
                                                                                            </a>

                                                                                            <div>
                                                                                                <small className="currency"
                                                                                                       title=""></small>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="removeOutcome"
                                                                                       data-id="ODQyMjczMDJ8MjIsMS41LDQsMCwwLDA"
                                                                                       title="Hide Bet">
                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                                </div>
                                                                <div className="iScrollVerticalScrollbar iScrollLoneScrollbar" style={{position: "absolute", z_index: "9999", width: "7px", bottom: "2px", top: "2px", right: "1px", overflow: "hidden", transform: "translateZ(0px)", transition_duration: "500ms", opacity: "0"}}>
                                                                    <div className="iScrollIndicator" style={{box_sizing: "border-box", position: "absolute", background: "rgba(0, 0, 0, 0.5)", border: "1px solid rgba(255, 255, 255, 0.9)", border_radius: "3px", width: "100%", transition_duration: "0ms", display: "block", height: "467px", transform: "translate(0px, 0px) translateZ(0px)"}}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-height col-top rightSection height100">
                                    <div className="inside inside-full-height">
                                        <div className="content sectionContentJs height100" data-padding="80">
                                            <div className="tableStyle height100">
                                                <div className="tableRowStyle calcRow">
                                                    <div className="row calculatorSection">
                                                        <div className="message-container hide">
                                                            <span>
                                                                Saved
                                                            </span>
                                                        </div>
                                                        <div className="background-theme hide"></div>
                                                        <div className="arbsCalculatorComponent col-xs-12 withArb">
                                                            <div className="calculatorView smallCalcView">
                                                                <input type="hidden" name="formula" id="formula" value="[object Object]"/>
                                                                <input type="hidden" name="percent" id="percent" value="/">
                                                                <input type="hidden" id="matchbook" value="0"/>
                                                                <div className="row">
                                                                    <div className="row-sm-height calcHeader displayTable">
                                                                        <div className="tableCell left_calcHeader">
                                                                            <div className="left_calcHeader_top text-center">
                                                                                <div className="left_calcHeader_percent inline_middle text-left padding5px"
                                                                                    title="1.00%">1.00%
                                                                                </div>

                                                                                <div className="left_calcHeader_sport inline_middle text-left padding5px"
                                                                                    title="Soccer">
                                                                                    Soccer
                                                                                </div>
                                                                            </div>
                                                                            <div className="left_calcHeader_bottom">
                                                                                <div className="left_calcHeader_time text-center">
                                                                                    05 Nov 15:00
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="tableCell padding5px center_calcHeader text-left">
                                                                            <div className="center_calcHeader_top">
                                                                                <div className="center_calcHeader_event_name inline_middle"
                                                                                    title="Zorya Lugansk - AEK Athens">
                                                                                    <a title="Compare odds: Zorya Lugansk - AEK Athens"
                                                                                    target="_blank"
                                                                                    href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770">
                                                                                        Zorya Lugansk - AEK Athens
                                                                                        <small><strong title="Game period: ">
                                                                                            [1st half]</strong>
                                                                                        </small>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="center_calcHeader_bottom">
                                                                                <div className="center_calcHeader_league inline_middle"
                                                                                    title="Europe. UEFA Europa League">
                                                                                    Europe. UEFA Europa League
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="tableCell right_calcHeader">
                                                                            <div className="right_calcHeader_lines">
                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                className="smallWindow inline_middle text-center halfWindow"
                                                                                title="Change calculator view">
                                                                                    <span className="icomoon-expand"></span></a>
                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%22f697fb91e3e507ca83f2150d91a6ebba%22,%22event_id%22:214433770,%22arb_formula_id%22:1,%22percent%22:1,%22started_at%22:1604606400,%22event_name%22:%22Zorya%20Lugansk%20-%20AEK%20Athens%22,%22league%22:%22Europe.%20UEFA%20Europa%20League%22,%22league_id%22:9428,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:10248,%22away_id%22:4627,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:5%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22FC%20Zorya%20Luhansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA%22,%22koef%22:2.02,%22commission%22:0,%22bookmaker_event_id%22:84466837,%22bookmaker_id%22:1,%22period_id%22:5,%22bc_id%22:103,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.02,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:103,%22title%22:%22F-F1(0.0)%22,%22mv_id%22:17,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:0,%22reverse_id%22:330,%22reverse_value%22:null,%22etalon_id%22:103,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22FC%20Zorya%20Luhansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ0NzcxMDZ8MTgsMC4wLDUsMCwwLDA%22,%22koef%22:2.02,%22commission%22:0,%22bookmaker_event_id%22:84477106,%22bookmaker_id%22:105,%22period_id%22:5,%22bc_id%22:330,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.02,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:330,%22title%22:%22F-F2(0.0)%22,%22mv_id%22:18,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:0,%22reverse_id%22:103,%22reverse_value%22:null,%22etalon_id%22:330,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                className="newWindow inline_middle text-center"
                                                                                title="Open in new view">
                                                                                    <span className="brankic-pop-out"></span></a>
                                                                            </div>
                                                                            <div className="right_calcHeader_lines">
                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                className="reportWrongArb inline_middle text-center"
                                                                                title="Report about wrong arb">
                                                                                    <span className="brankic-megaphone"></span>
                                                                                </a>
                                                                                <a id="drop_calc"
                                                                                href="https://www.betburger.com/arbs#"
                                                                                className="dropdown-toggle closeTrash inline_middle text-center"
                                                                                data-toggle="dropdown" title="Hide menu"
                                                                                role="button" aria-haspopup="true"
                                                                                aria-expanded="true">
                                                                                    <span className="icomoon-remove2"></span>
                                                                                
                                                                                </a>
                                                                                <ul className="dropdown-menu dropdown-menu-right"
                                                                                    aria-labelledby="drop_calc">
                                                                                    <li>
                                                                                        <a href="https://www.betburger.com/arbs#"
                                                                                        title="Hide arb"
                                                                                        data-id="f697fb91e3e507ca83f2150d91a6ebba"
                                                                                        className="hideArb">
                                                                                            Hide arb
                                                                                        </a></li>
                                                                                    <li>
                                                                                        <a href="https://www.betburger.com/arbs#"
                                                                                        title="Hide event"
                                                                                        data-id="214433770"
                                                                                        className="hideEvent">
                                                                                            Hide event
                                                                                        </a></li>
                                                                                    <li role="separator" className="divider"></li>
                                                                                    <li>
                                                                                        <a href="https://www.betburger.com/arbs#"
                                                                                        title="Hide event in Pinnacle"
                                                                                        data-id="84466837"
                                                                                        className="hideBkEvent">
                                                                                            Hide event in Pinnacle
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="https://www.betburger.com/arbs#"
                                                                                        title="Hide event in Sportmarket"
                                                                                        data-id="84477106"
                                                                                        className="hideBkEvent">
                                                                                            Hide event in Sportmarket
                                                                                        </a>
                                                                                    </li>
                                                                                    <li role="separator" className="divider"></li>
                                                                                    <li>
                                                                                        <a href="https://www.betburger.com/arbs#"
                                                                                        title="Hide event in " data-id="84466837/84477106" className="hideAllBkEvent">
                                                                                            Hide event in
                                                                                            Pinnacle/Sportmarket
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row lightGray topPanel relative">
                                                                    <div className="absoluteRight topContent">
                                                                        <div className="row-sm-height inputContainer relative">
                                                                            <div className="col-sm-height padding_left_5 text-center col-middle outcomeKoefBooks height10 pull-left">
                                                                                <div className="input4spaces"></div>
                                                                            </div>
                                                                            <div className="col-sm-height padding_left_5 text-center col-middle outcomeKoefCommission height10 pull-left">
                                                                                <div className="input2spaces"></div>
                                                                            </div>
                                                                            <div className="col-sm-height padding_left_5 text-center col-middle outcomeKoefStatic height10 pull-left"></div>

                                                                            <div className="col-sm-height padding_left_5 text-center col-middle bottomTotalStake stakeColTitle pull-left">
                                                                                <div className="row-sm-height">
                                                                                    <div className="col-sm-height col-middle">
                                                                                        <div className="inside">
                                                                                            <div className="content">
                                                                                                Stake
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-height padding_left_5 text-center col-middle withSelect currencyColTitle pull-left">
                                                                                <div className="row-sm-height">
                                                                                    <div className="col-sm-height col-middle">
                                                                                        <div className="inside">
                                                                                            <div className="content">
                                                                                                Currency
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-sm-height col-middle withCheckboxes height10 pull-left">
                                                                                <div className="row-sm-height">
                                                                                    <div className="col-sm-height col-middle">
                                                                                        <div className="inside">
                                                                                            <div className="content">
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="absoluteRight text-center col-sm-height col-middle revColTitle">
                                                                        <div className="row-sm-height">
                                                                            <div className="col-sm-height col-middle">
                                                                                <div className="inside">
                                                                                    <div className="content">
                                                                                        Revenue
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="row outcomeCalc outcome_1 displayTable">
                                                                    <div className="tableCell col-middle outcomeCalcTitle">
                                                                        <div className="row margin0">
                                                                            <div className="row-sm-height">
                                                                                <div className="col-xs-12 padding2_5 text-center col-sm-height col-middle">
                                                                                    <div className="inside">
                                                                                        <div className="content outcomeLinkContainer">
                                                                                            <span className="copy-team-name copy-event-name-js" title="Copy"
                                                                                                data-to-copy="FC Zorya Luhansk">
                                                                                                <span className="icomoon-copy3"></span>
                                                                                            </span>
                                                                                            <a href="https://www.betburger.com/prices"
                                                                                            className="check_for_russia is_disabled-hbs"
                                                                                            rel="nofollow"
                                                                                            title="Arb in FC Zorya Luhansk - AEK Athens">AH1(0)</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tableCell col-middle bookmakersSelect relative">
                                                                        <div className="text-center col-sm-height col-middle withBookmakerList">
                                                                            <div className="inside bookmakersCol">
                                                                                <div id="bookmakers_1_scroll">
                                                                                    <div className="content bookmakersSection scroller">
                                                                                        <ul multiple=""
                                                                                            className="bookmakersSelect multipleRows">
                                                                                            <li data-bet_id="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA" data-bookmaker_id="1" data-bet_number="1" className=" sameOutcome   bg-color-">
                                                                                                <div className="row margin0 height100">
                                                                                                    <div className="row-sm-height">
                                                                                                        <div className="text-center col-sm-height col-middle">
                                                                                                            <div className="inside">
                                                                                                                <div className="content">
                                                                                                                    <div className="bookmakerListRow text-left padding2_5">
                                                                                                                        <a className="excludeBookmakerEvent"
                                                                                                                        data-id="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA"
                                                                                                                        data-bet_number="1"
                                                                                                                        href="https://www.betburger.com/arbs#"
                                                                                                                        title="[missing &quot;en.arbs_page.delete_bet&quot; translation]"><span></span></a>
                                                                                                                        <span className="bookmaker">Pinnacle()</span>
                                                                                                                    </div>
                                                                                                                    <div className="directLinkListRow text-left padding2_5">
                                                                                                                        <a className="directLink"
                                                                                                                        target="_blank"
                                                                                                                        href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=1&amp;market_id=3"
                                                                                                                        title="Asian Handicap1(0)">
                                                                                                                            <span className="icomoon-redo2"></span></a>
                                                                                                                    </div>
                                                                                                                    <div className="koefLinkListRow text-left padding2_5">
                                                                                                                        <a hreh="#"
                                                                                                                        className="refreshOutcomeCalc koefRefresh bold"
                                                                                                                        title="Refresh koef"
                                                                                                                        data-bet_number="1">
                                                                                                                            <span title="Refresh outcome odds">2.02</span>
                                                                                                                        </a>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            <div>
                                                                            <div className="content bookmakersSectionSingle">
                                                                                <div multiple=""
                                                                                     className="bookmakersSelect singleRow">
                                                                                    <a className="excludeBookmakerEvent"
                                                                                       data-id="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA"
                                                                                       data-bet_number="1"
                                                                                       href="https://www.betburger.com/arbs#"
                                                                                       title="Hide Bet"><span></span></a>
                                                                                    <select className="input-xs singleSelect1 bg-color-"
                                                                                            data-number="1"
                                                                                            data-active="false">
                                                                                        <option className="bg-color-"
                                                                                                selected=""
                                                                                                value="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA">
                                                                                            Pinnacle: 2.02 ()
                                                                                        </option>
                                                                                    </select>
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="refreshOutcomeCalc"
                                                                                       title="Refresh koef"
                                                                                       data-bet_number="1">
                                                                                        <span title="Refresh outcome odds"
                                                                                              className="icomoon-loop2"></span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tableCell col-middle withLay inputContainer">
                                                                <div className="row margin0">
                                                                    <div className="row-sm-height">
                                                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle outcomeKoefBooks">
                                                                            <div className="inside">
                                                                                <div className="content">
                                                                                    <div className="form-group">
                                                                                        <input className="koef form-control input-xs input4spaces"
                                                                                               data-outcome_number="1"
                                                                                               type="text"
                                                                                               id="outcome1_koef"
                                                                                               value="2.02"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle outcomeKoefCommission">
                                                                            <div className="inside">
                                                                                <div className="content">
                                                                                    <div className="form-group">
                                                                                        <input className="form-control input-xs commission input2spaces"
                                                                                               type="text"
                                                                                               data-outcome_number="1"
                                                                                               id="outcome1_commission"
                                                                                               value="0"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-left floatLeft col-sm-height padding_left_5 col-middle outcomeKoefStatic">
                                                                            <div className="inside">
                                                                                <div className="content">
                                                                                    <span className="bold" title="2.02"
                                                                                          id="outcome1_koef_static">2.02</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle">
                                                                            <div className="inside">
                                                                                <div className="content">
                                                                                    <div className="form-group">
                                                                                        <input className="form-control input-xs stake input5spaces"
                                                                                               type="text" value="0"
                                                                                               data-outcome_number="1"
                                                                                               id="outcome1_stake"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle withSelect ">
                                                                            <div className="inside">
                                                                                <div className="content selectCurrency">
                                                                                    <select className="select input-xs rate sel"
                                                                                            data-outcome_number="1"
                                                                                            name="currency"
                                                                                            id="outcome1_currency">
                                                                                        <option value="1"
                                                                                                selected="selected">
                                                                                            USD
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            EUR
                                                                                        </option>
                                                                                        <option value="3">
                                                                                            RUB
                                                                                        </option>
                                                                                        <option value="4">
                                                                                            UAH
                                                                                        </option>
                                                                                        <option value="5">
                                                                                            KZT
                                                                                        </option>
                                                                                        <option value="6">
                                                                                            BYR
                                                                                        </option>
                                                                                        <option value="7">
                                                                                            GBP
                                                                                        </option>
                                                                                        <option value="8">
                                                                                            WMZ
                                                                                        </option>
                                                                                        <option value="9">
                                                                                            WME
                                                                                        </option>
                                                                                        <option value="10">
                                                                                            WMR
                                                                                        </option>
                                                                                        <option value="11">
                                                                                            WMU
                                                                                        </option>
                                                                                        <option value="12">
                                                                                            WMB
                                                                                        </option>
                                                                                        <option value="13">
                                                                                            PLN
                                                                                        </option>
                                                                                        <option value="14">
                                                                                            CAD
                                                                                        </option>
                                                                                        <option value="15">
                                                                                            TRY
                                                                                        </option>
                                                                                        <option value="16">
                                                                                            MDL
                                                                                        </option>
                                                                                        <option value="17">
                                                                                            SEK
                                                                                        </option>
                                                                                        <option value="18">
                                                                                            SGD
                                                                                        </option>
                                                                                        <option value="21">
                                                                                            MYR
                                                                                        </option>
                                                                                        <option value="30">
                                                                                            AUD
                                                                                        </option>
                                                                                        <option value="31">
                                                                                            RON
                                                                                        </option>
                                                                                        <option value="35">
                                                                                            BTC
                                                                                        </option>
                                                                                        <option value="38">
                                                                                            DKK
                                                                                        </option>
                                                                                        <option value="41">
                                                                                            BRL
                                                                                        </option>
                                                                                        <option value="47">
                                                                                            BYN
                                                                                        </option>
                                                                                        <option value="50">
                                                                                            mBT
                                                                                        </option>
                                                                                        <option value="56">
                                                                                            NOK
                                                                                        </option>
                                                                                        <option value="60">
                                                                                            GEL
                                                                                        </option>
                                                                                        <option value="66">
                                                                                            CNY
                                                                                        </option>
                                                                                        <option value="67">
                                                                                            MXN
                                                                                        </option>
                                                                                        <option value="68">
                                                                                            JPY
                                                                                        </option>
                                                                                        <option value="69">
                                                                                            PEN
                                                                                        </option>
                                                                                        <option value="70">
                                                                                            COP
                                                                                        </option>
                                                                                        <option value="71">
                                                                                            INR
                                                                                        </option>
                                                                                        <option value="72">
                                                                                            HUF
                                                                                        </option>
                                                                                        <option value="73">
                                                                                            CHF
                                                                                        </option>
                                                                                    </select>
                                                                                    <input type="hidden"
                                                                                           name="outcome1_rate"
                                                                                           id="outcome1_rate" value="1"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle withCheckboxes">
                                                                            <div className="inside">
                                                                                <div className="content">
                                                                                    <div className="radioCalc">
                                                                                        <input type="radio" value="1"
                                                                                               name="stake_fix"
                                                                                               data-outcome_number="1"
                                                                                               id="outcome1_stake_fix"/>
                                                                                        <label for="outcome1_stake_fix"><span
                                                                                                className="checkbox"></span></label>
                                                                                    </div>
                                                                                    <div className="checkboxCalc">
                                                                                        <input type="checkbox"
                                                                                               value="true"
                                                                                               id="outcome1_stake_distr"
                                                                                               data-bet_number="1"
                                                                                               className="distr"
                                                                                               data-outcome_number="1"
                                                                                               name="outcome1_stake_distr"
                                                                                               checked=""/>
                                                                                        <label for="outcome1_stake_distr"><span
                                                                                                className="checkbox"></span></label>
                                                                                    </div>
                                                                                    <input type="hidden"
                                                                                           name="outcome1_stake_percent"
                                                                                           id="outcome1_stake_percent"
                                                                                           value="0.5"/>
                                                                                    <input type="hidden"
                                                                                           name="outcome1_updated"
                                                                                           id="outcome1_updated"
                                                                                           value="false"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                                <div className="row lay col-middle  margin0">
                                                                    <div className="row-sm-height displayTable">

                                                                        <div className="tableCell lay_koef_cell padding_left_5 text-right col-sm-height col-middle">
                                                                            <div className="inside">
                                                                                <div className="content">
                                                                                    <div className="form-group">
                                                                                        <input className="koef_lay form-control input4spaces input-xs"
                                                                                               data-outcome_number="1"
                                                                                               type="text"
                                                                                               id="outcome1_koef_lay"
                                                                                               value="0"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="tableCell text-right lay_title_cellcol-sm-height col-middle">
                                                                            <div className="inside">
                                                                                <div className="content">
                                                                                    <span className="layTitle">
                                                                                        Lay
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="tableCell stakeCurrency lay_stake_cellcol-sm-height col-middle">
                                                                            <div className="row margin0">
                                                                                <div className="row-sm-height">
                                                                                    <div className="padding_left_5 text-center col-sm-height col-middle">
                                                                                        <div className="inside">
                                                                                            <div className="content">
                                                                                                <div className="form-group">
                                                                                                    <input className="form-control input5spaces input-xs stake_lay"
                                                                                                           type="text"
                                                                                                           value="0"
                                                                                                           data-outcome_number="1"
                                                                                                           id="outcome1lay_stake"/>
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
                                                            <div className="tableCell col-middle text-center calcKoef calcKoefBg">
                                                                <div className="row-sm-height">
                                                                    <div className="inside">
                                                                        <div className="content">
                                                                            <div className="calcKoef" title="1.00"
                                                                                 id="outcome1_revenue">1.00
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row outcomeCalc outcome_2 displayTable">
                                                            <div className="tableCell col-middle outcomeCalcTitle">
                                                                <div className="row margin0">
                                                                    <div className="row-sm-height">
                                                                        <div className="col-xs-12 padding2_5 text-center col-sm-height col-middle">
                                                                            <div className="inside">
                                                                                <div className="content outcomeLinkContainer">
                                                                                    <span className="copy-team-name copy-event-name-js" title="Copy"
                                                                                        data-to-copy="FC Zorya Luhansk">
                                                                                        <span className="icomoon-copy3"></span>
                                                                                    </span>
                                                                                    <a href="https://www.betburger.com/prices"
                                                                                       className="check_for_russia is_disabled-hbs"
                                                                                       rel="nofollow"
                                                                                       title="Arb in FC Zorya Luhansk - AEK Athens">AH2(0)</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tableCell col-middle bookmakersSelect relative">
                                                                <div className="text-center col-sm-height col-middle withBookmakerList">
                                                                    <div className="inside bookmakersCol">
                                                                        <div id="bookmakers_2_scroll">
                                                                            <div className="content bookmakersSection scroller">
                                                                                <ul multiple=""
                                                                                    className="bookmakersSelect multipleRows">
                                                                                    <li data-bet_id="ODQ0NzcxMDZ8MTgsMC4wLDUsMCwwLDA"
                                                                                        data-bookmaker_id="105"
                                                                                        data-bet_number="2"
                                                                                        className=" sameOutcome   bg-color-">
                                                                                        <div className="row margin0 height100">
                                                                                            <div className="row-sm-height">
                                                                                                <div className="text-center col-sm-height col-middle">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <div className="bookmakerListRow text-left padding2_5">
                                                                                                                <a className="excludeBookmakerEvent"
                                                                                                                   data-id="ODQ0NzcxMDZ8MTgsMC4wLDUsMCwwLDA"
                                                                                                                   data-bet_number="2"
                                                                                                                   href="https://www.betburger.com/arbs#"
                                                                                                                   title="[missing &quot;en.arbs_page.delete_bet&quot; translation]"><span></span></a>
                                                                                                                <span className="bookmaker">Sportmarket()</span>
                                                                                                            </div>
                                                                                                            <div className="directLinkListRow text-left padding2_5">
                                                                                                                <a className="directLink"
                                                                                                                   target="_blank"
                                                                                                                   href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=1&amp;market_id=3"
                                                                                                                   title="Asian Handicap2(0)">
                                                                                                                    <span className="icomoon-redo2"></span></a>
                                                                                                            </div>
                                                                                                            <div className="koefLinkListRow text-left padding2_5">
                                                                                                                <a hreh="#"
                                                                                                                   className="refreshOutcomeCalc koefRefresh bold"
                                                                                                                   title="Refresh koef"
                                                                                                                   data-bet_number="2">
                                                                                                                    <span title="Refresh outcome odds">2.02</span>
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div className="content bookmakersSectionSingle">
                                                                                <div multiple=""
                                                                                     className="bookmakersSelect singleRow">
                                                                                    <a className="excludeBookmakerEvent"
                                                                                       data-id="ODQ0NzcxMDZ8MTgsMC4wLDUsMCwwLDA"
                                                                                       data-bet_number="2"
                                                                                       href="https://www.betburger.com/arbs#"
                                                                                       title="Hide Bet"><span></span></a>
                                                                                    <select className="input-xs singleSelect2 bg-color-"
                                                                                            data-number="2"
                                                                                            data-active="false">
                                                                                        <option className="bg-color-"
                                                                                                selected=""
                                                                                                value="ODQ0NzcxMDZ8MTgsMC4wLDUsMCwwLDA">
                                                                                            Sportmarket: 2.02 ()
                                                                                        </option>
                                                                                    </select>
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="refreshOutcomeCalc"
                                                                                       title="Refresh koef"
                                                                                       data-bet_number="2">
                                                                                        <span title="Refresh outcome odds"
                                                                                              className="icomoon-loop2"></span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tableCell col-middle withLay inputContainer">
                                                                <div className="row margin0">
                                                                    <div className="row-sm-height">
                                                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle outcomeKoefBooks">
                                                                            <div className="inside">
                                                                                <div className="content">
                                                                                    <div className="form-group">
                                                                                        <input className="koef form-control input-xs input4spaces"
                                                                                               data-outcome_number="2"
                                                                                               type="text"
                                                                                               id="outcome2_koef"
                                                                                               value="2.02"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle outcomeKoefCommission">
                                                                            <div className="inside">
                                                                                <div className="content">
                                                                                    <div className="form-group">
                                                                                        <input className="form-control input-xs commission input2spaces"
                                                                                               type="text"
                                                                                               data-outcome_number="2"
                                                                                               id="outcome2_commission"
                                                                                               value="0"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-left floatLeft col-sm-height padding_left_5 col-middle outcomeKoefStatic">
                                                                            <div className="inside">
                                                                                <div className="content">
                                                                                    <span className="bold" title="2.02"
                                                                                          id="outcome2_koef_static">2.02</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle">
                                                                            <div className="inside">
                                                                                <div className="content">
                                                                                    <div className="form-group">
                                                                                        <input className="form-control input-xs stake input5spaces"
                                                                                               type="text" value="0"
                                                                                               data-outcome_number="2"
                                                                                               id="outcome2_stake"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle withSelect ">
                                                                            <div className="inside">
                                                                                <div className="content selectCurrency">
                                                                                    <select className="select input-xs rate sel"
                                                                                            data-outcome_number="2"
                                                                                            name="currency"
                                                                                            id="outcome2_currency">
                                                                                        <option value="1"
                                                                                                selected="selected">
                                                                                            USD
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            EUR
                                                                                        </option>
                                                                                        <option value="3">
                                                                                            RUB
                                                                                        </option>
                                                                                        <option value="4">
                                                                                            UAH
                                                                                        </option>
                                                                                        <option value="5">
                                                                                            KZT
                                                                                        </option>
                                                                                        <option value="6">
                                                                                            BYR
                                                                                        </option>
                                                                                        <option value="7">
                                                                                            GBP
                                                                                        </option>
                                                                                        <option value="8">
                                                                                            WMZ
                                                                                        </option>
                                                                                        <option value="9">
                                                                                            WME
                                                                                        </option>
                                                                                        <option value="10">
                                                                                            WMR
                                                                                        </option>
                                                                                        <option value="11">
                                                                                            WMU
                                                                                        </option>
                                                                                        <option value="12">
                                                                                            WMB
                                                                                        </option>
                                                                                        <option value="13">
                                                                                            PLN
                                                                                        </option>
                                                                                        <option value="14">
                                                                                            CAD
                                                                                        </option>
                                                                                        <option value="15">
                                                                                            TRY
                                                                                        </option>
                                                                                        <option value="16">
                                                                                            MDL
                                                                                        </option>
                                                                                        <option value="17">
                                                                                            SEK
                                                                                        </option>
                                                                                        <option value="18">
                                                                                            SGD
                                                                                        </option>
                                                                                        <option value="21">
                                                                                            MYR
                                                                                        </option>
                                                                                        <option value="30">
                                                                                            AUD
                                                                                        </option>
                                                                                        <option value="31">
                                                                                            RON
                                                                                        </option>
                                                                                        <option value="35">
                                                                                            BTC
                                                                                        </option>
                                                                                        <option value="38">
                                                                                            DKK
                                                                                        </option>
                                                                                        <option value="41">
                                                                                            BRL
                                                                                        </option>
                                                                                        <option value="47">
                                                                                            BYN
                                                                                        </option>
                                                                                        <option value="50">
                                                                                            mBT
                                                                                        </option>
                                                                                        <option value="56">
                                                                                            NOK
                                                                                        </option>
                                                                                        <option value="60">
                                                                                            GEL
                                                                                        </option>
                                                                                        <option value="66">
                                                                                            CNY
                                                                                        </option>
                                                                                        <option value="67">
                                                                                            MXN
                                                                                        </option>
                                                                                        <option value="68">
                                                                                            JPY
                                                                                        </option>
                                                                                        <option value="69">
                                                                                            PEN
                                                                                        </option>
                                                                                        <option value="70">
                                                                                            COP
                                                                                        </option>
                                                                                        <option value="71">
                                                                                            INR
                                                                                        </option>
                                                                                        <option value="72">
                                                                                            HUF
                                                                                        </option>
                                                                                        <option value="73">
                                                                                            CHF
                                                                                        </option>
                                                                                    </select>
                                                                                    <input type="hidden"
                                                                                           name="outcome2_rate"
                                                                                           id="outcome2_rate" value="1"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle withCheckboxes">
                                                                            <div className="inside">
                                                                                <div className="content">
                                                                                    <div className="radioCalc">
                                                                                        <input type="radio" value="2"
                                                                                               name="stake_fix"
                                                                                               data-outcome_number="2"
                                                                                               id="outcome2_stake_fix"/>
                                                                                        <label for="outcome2_stake_fix"><span
                                                                                                className="checkbox"></span></label>
                                                                                    </div>
                                                                                    <div className="checkboxCalc">
                                                                                        <input type="checkbox"
                                                                                               value="true"
                                                                                               id="outcome2_stake_distr"
                                                                                               data-bet_number="2"
                                                                                               className="distr"
                                                                                               data-outcome_number="2"
                                                                                               name="outcome2_stake_distr"
                                                                                               checked=""/>
                                                                                        <label for="outcome2_stake_distr"><span
                                                                                                className="checkbox"></span></label>
                                                                                    </div>
                                                                                    <input type="hidden"
                                                                                           name="outcome2_stake_percent"
                                                                                           id="outcome2_stake_percent"
                                                                                           value="0.5"/>
                                                                                    <input type="hidden"
                                                                                           name="outcome2_updated"
                                                                                           id="outcome2_updated"
                                                                                           value="false"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                                <div className="row lay col-middle  margin0">
                                                                    <div className="row-sm-height displayTable">

                                                                        <div className="tableCell lay_koef_cell padding_left_5text-right col-sm-height col-middle">
                                                                            <div className="inside">
                                                                                <div className="content">
                                                                                    <div className="form-group">
                                                                                        <input className="koef_lay form-control input4spaces input-xs"
                                                                                               data-outcome_number="2"
                                                                                               type="text"
                                                                                               id="outcome2_koef_lay"
                                                                                               value="0"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="tableCell text-right lay_title_cell col-sm-height col-middle">
                                                                            <div className="inside">
                                                                                <div className="content">
                                                                                    <span className="layTitle">
                                                                                        Lay
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="tableCell stakeCurrency lay_stake_cell col-sm-height col-middle">
                                                                            <div className="row margin0">
                                                                                <div className="row-sm-height">
                                                                                    <div className="padding_left_5 text-center col-sm-height col-middle">
                                                                                        <div className="inside">
                                                                                            <div className="content">
                                                                                                <div className="form-group">
                                                                                                    <input className="form-control input5spaces input-xs stake_lay"
                                                                                                           type="text"
                                                                                                           value="0"
                                                                                                           data-outcome_number="2"
                                                                                                           id="outcome2lay_stake"/>
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
                                                            <div className="tableCell col-middle text-center calcKoef calcKoefBg">
                                                                <div className="row-sm-height">
                                                                    <div className="inside">
                                                                        <div className="content">
                                                                            <div className="calcKoef" title="1.00"
                                                                                 id="outcome2_revenue">1.00
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row lightGray bottomPanel">
                                                            <div className="row-sm-height relative">
                                                                <div className="absoluteLeft text-right col-sm-height col-middle leftIconsContainer">
                                                                    <div className="row-sm-height">
                                                                        <div className="col-xs-3 text-center col-sm-height col-middle refreshCalcContainer">
                                                                            <div className="inside">
                                                                                <div className="content">
                                                                                    <div className="refresh">
                                                                                    </div>
                                                                                    <div className="checkboxCalcNewView showSection">
                                                                                        <a id="changeArbView"
                                                                                           href="https://www.betburger.com/arbs#"
                                                                                           data-show="hide"
                                                                                           title="Arbs grouped by event">
                                                                                            <span className="icomoon-menu changeArbViewIco"
                                                                                                  aria-hidden="true"></span>
                                                                                            <span className="checkbox-state"></span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="copyToClickSection">
                                                                                        <a href="https://www.betburger.com/arbs#"
                                                                                           className="copyToClick"
                                                                                           title="Copy" id="copy_button"
                                                                                           data-clipboard-text="05-11-2020 15:00 Soccer.Zorya Lugansk - AEK Athens (Europe. UEFA Europa League) [1st half] 1.00%Pinnacle	AH1(0)	2.02	50.00	USD	1.00 Sportmarket	AH2(0)	2.02	50.00	USD	1.00">
                                                                                            <span className="icomoon-copy3"></span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="saveToAccountingSection">
                                                                                        <a href="https://www.betburger.com/arbs#"
                                                                                           className="saveToAccounting"
                                                                                           title="Save to accounting">
                                                                                            <span className="brankic-suitcase2"></span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="absoluteRight col-sm-height col-middle roundInputTitle">
                                                                    <div className="row-sm-height">
                                                                        <div className="text-right col-sm-height col-middle">
                                                                            <div className="inside">
                                                                                <div className="content">
                                                                                    <span className="round-stake">
                                                                                        Round to:
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="absoluteRight bottomInputContainer col-sm-height">
                                                                    <div className="row-sm-height inputContainer">
                                                                        <div className="col-sm-height text-center floatLeft padding_left_5 col-middle outcomeKoefBooks roundInput">
                                                                            <div className="row-sm-height">
                                                                                <div className="text-center col-sm-height col-middle">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <div className="form-group">
                                                                                                <input type="text"
                                                                                                       className="input-xs input4spaces form-control"
                                                                                                       id="round_stake"
                                                                                                       data-outcome_number="total"
                                                                                                       value="0.01"/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="outcomeKoefCommission text-center floatLeft padding_left_5 col-sm-height">
                                                                            <div className="input2spaces"></div>
                                                                        </div>
                                                                        <div className="outcomeKoefStatic text-center floatLeft padding_left_5 col-sm-height"></div>
                                                                        <div className="col-sm-height col-middle text-center floatLeft padding_left_5 bottomTotalStake">
                                                                            <div className="row-sm-height">
                                                                                <div className="text-center col-sm-height col-middle">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <div className="form-group">
                                                                                                <input type="text"
                                                                                                       className="input-xs form-control stake input5spaces"
                                                                                                       id="total_stake"
                                                                                                       data-outcome_number="total"
                                                                                                       value="100"/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-height col-middle withSelect text-center floatLeft padding_left_5">
                                                                            <div className="row-sm-height">
                                                                                <div className="text-center col-sm-height col-middle">
                                                                                    <div className="inside">
                                                                                        <div className="content selectCurrency">
                                                                                            <select className="select input-xs sel rate"
                                                                                                    name="currency"
                                                                                                    id="total_currency"
                                                                                                    data-bookmaker_id="0">
                                                                                                <option value="1"
                                                                                                        selected="selected">
                                                                                                    USD
                                                                                                </option>
                                                                                                <option value="2">
                                                                                                    EUR
                                                                                                </option>
                                                                                                <option value="3">
                                                                                                    RUB
                                                                                                </option>
                                                                                                <option value="4">
                                                                                                    UAH
                                                                                                </option>
                                                                                                <option value="5">
                                                                                                    KZT
                                                                                                </option>
                                                                                                <option value="6">
                                                                                                    BYR
                                                                                                </option>
                                                                                                <option value="7">
                                                                                                    GBP
                                                                                                </option>
                                                                                                <option value="8">
                                                                                                    WMZ
                                                                                                </option>
                                                                                                <option value="9">
                                                                                                    WME
                                                                                                </option>
                                                                                                <option value="10">
                                                                                                    WMR
                                                                                                </option>
                                                                                                <option value="11">
                                                                                                    WMU
                                                                                                </option>
                                                                                                <option value="12">
                                                                                                    WMB
                                                                                                </option>
                                                                                                <option value="13">
                                                                                                    PLN
                                                                                                </option>
                                                                                                <option value="14">
                                                                                                    CAD
                                                                                                </option>
                                                                                                <option value="15">
                                                                                                    TRY
                                                                                                </option>
                                                                                                <option value="16">
                                                                                                    MDL
                                                                                                </option>
                                                                                                <option value="17">
                                                                                                    SEK
                                                                                                </option>
                                                                                                <option value="18">
                                                                                                    SGD
                                                                                                </option>
                                                                                                <option value="21">
                                                                                                    MYR
                                                                                                </option>
                                                                                                <option value="30">
                                                                                                    AUD
                                                                                                </option>
                                                                                                <option value="31">
                                                                                                    RON
                                                                                                </option>
                                                                                                <option value="35">
                                                                                                    BTC
                                                                                                </option>
                                                                                                <option value="38">
                                                                                                    DKK
                                                                                                </option>
                                                                                                <option value="41">
                                                                                                    BRL
                                                                                                </option>
                                                                                                <option value="47">
                                                                                                    BYN
                                                                                                </option>
                                                                                                <option value="50">
                                                                                                    mBT
                                                                                                </option>
                                                                                                <option value="56">
                                                                                                    NOK
                                                                                                </option>
                                                                                                <option value="60">
                                                                                                    GEL
                                                                                                </option>
                                                                                                <option value="66">
                                                                                                    CNY
                                                                                                </option>
                                                                                                <option value="67">
                                                                                                    MXN
                                                                                                </option>
                                                                                                <option value="68">
                                                                                                    JPY
                                                                                                </option>
                                                                                                <option value="69">
                                                                                                    PEN
                                                                                                </option>
                                                                                                <option value="70">
                                                                                                    COP
                                                                                                </option>
                                                                                                <option value="71">
                                                                                                    INR
                                                                                                </option>
                                                                                                <option value="72">
                                                                                                    HUF
                                                                                                </option>
                                                                                                <option value="73">
                                                                                                    CHF
                                                                                                </option>
                                                                                            </select>
                                                                                            <input type="hidden"
                                                                                                   name="total_rate"
                                                                                                   id="total_rate"
                                                                                                   value="1" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-height col-middle withCheckboxes text-center floatLeft padding_left_5">
                                                                            <div className="row-sm-height">
                                                                                <div className="text-left col-sm-height col-middle">
                                                                                    <div className="inside">
                                                                                        <div className="content">
                                                                                            <div className="radioCalc">
                                                                                                <input type="radio"
                                                                                                       value="total"
                                                                                                       name="stake_fix"
                                                                                                       className="radio"
                                                                                                       id="total_stake_fix"
                                                                                                       checked="checked"/>
                                                                                                <label for="total_stake_fix"><span
                                                                                                        className="checkbox"></span></label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-height col-middle text-right calcKoef">
                                                                    <div className="row-sm-height">
                                                                        <div className="col-sm-height col-middle">
                                                                            <div className="inside">
                                                                                <div className="content">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="placeBets"
                                                                                       title="Put stake">
                                                                                        <span className="icomoon-target"></span>
                                                                                    </a>
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                       className="calculateTotal"
                                                                                       title="Calculate">
                                                                                        <span className="icomoon-calculate"></span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="calcModalReportWindow"></div>
                                                        <div className="noAuthorize"></div>
                                                   </input>
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
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
                                                            <input type="checkbox" value="1" className="hide"
                                                                   id="show_event_arbs" name="show_event_arbs"
                                                                   checked=""/>
                                                            <label className="show_event_arbs_label" for="show_event_arbs"
                                                                   title="Arbs grouped by event">
                                                                <span className="show_event_arbs_checkbox"></span>
                                                            </label>
                                                        </div>
                                                        <div className="clear_both"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tableRowStyle rightPanelRows rightArbsRows">
                                            <div className="tableCellStyle height100">
                                                <div className="height100">
                                                    <div className="row groupedArbsSection height100">
                                                        <div className="col-xs-12 height100">
                                                            <div className="groupedArbsComponent height100">
                                                                <div className="arbListView height100">
                                                                    <div id="groupedArbsScroll" className="jsHeight100"
                                                                         style={{touch_action: "none"}}>
                                                                        <div className="scroller"
                                                                             style={{transform: "translate(0px, 0px) translateZ(0px)"}}>
                                                                            <ul>
                                                                                <li className="arb_f697fb91e3e507ca83f2150d91a6ebba event_214433770">
                                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                                        <div className="arbHead row relative">
                                                                                            <div className="row-sm-height">
                                                                                                <div className="absoluteLeft padding5px percent col-sm-height col-middle betPercent">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <span title="1.00%">1.00%</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle selected">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height displayTable">
                                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <span title="0.00">
                                                                                                                                    0.00
                                                                                                                                </span>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                                                                                                        <span className="sport" title="Soccer">
                                                                                                                            Soccer
                                                                                                                        </span>
                                                                                                                        <span className="fullTime">
                                                                                                                            <small><strong title="Game period: 1st half">
                                                                                                                                [1st half]</strong>
                                                                                                                            </small>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="ageTime">
                                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                                    1
                                                                                                                                    h
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="dropdown-toggle"
                                                                                                                                   title="Hide menu">
                                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%22f697fb91e3e507ca83f2150d91a6ebba%22,%22event_id%22:214433770,%22arb_formula_id%22:1,%22percent%22:1,%22started_at%22:1604606400,%22event_name%22:%22Zorya%20Lugansk%20-%20AEK%20Athens%22,%22league%22:%22Europe.%20UEFA%20Europa%20League%22,%22league_id%22:9428,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:10248,%22away_id%22:4627,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:5%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22FC%20Zorya%20Luhansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA%22,%22koef%22:2.02,%22commission%22:0,%22bookmaker_event_id%22:84466837,%22bookmaker_id%22:1,%22period_id%22:5,%22bc_id%22:103,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.02,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:103,%22title%22:%22F-F1(0.0)%22,%22mv_id%22:17,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:0,%22reverse_id%22:330,%22reverse_value%22:null,%22etalon_id%22:103,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22FC%20Zorya%20Luhansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ0NzcxMDZ8MTgsMC4wLDUsMCwwLDA%22,%22koef%22:2.02,%22commission%22:0,%22bookmaker_event_id%22:84477106,%22bookmaker_id%22:105,%22period_id%22:5,%22bc_id%22:330,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.02,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:330,%22title%22:%22F-F2(0.0)%22,%22mv_id%22:18,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:0,%22reverse_id%22:103,%22reverse_value%22:null,%22etalon_id%22:330,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                                   className="standalone-calculator"
                                                                                                                                   title="Open in new view">
                                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                                </a>
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

                                                                                        <div className="bet_1 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        Pinnacle
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="FC Zorya Luhansk">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=1&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in FC Zorya Luhansk - AEK Athens"
                                                                                                                               arb_type_id="2">
                                                                                                                                FC
                                                                                                                                Zorya
                                                                                                                                Luhansk
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="UEFA - Europa League">
                                                                                                                            UEFA
                                                                                                                            -
                                                                                                                            Europa
                                                                                                                            League</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap1(0)">
                                                                                                                                    AH1(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <span className="icomoon-arrow-down
                                                                                                            gray "></span>
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="2.02"
                                                                                                               title="Odd 2.02 on the outcome AH1(0) of event FC Zorya Luhansk - AEK Athens">
                                                                                                                2.02
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="bet_2 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        Sportmarket
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="FC Zorya Luhansk">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=1&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in FC Zorya Luhansk - AEK Athens"
                                                                                                                               arb_type_id="2">
                                                                                                                                FC
                                                                                                                                Zorya
                                                                                                                                Luhansk
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="UEFA Europa League">
                                                                                                                            UEFA
                                                                                                                            Europa
                                                                                                                            League</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap2(0)">
                                                                                                                                    AH2(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <span className="icomoon-arrow-up
                                                                                                            gray "></span>
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="2.02"
                                                                                                               title="Odd 2.02 on the outcome AH2(0) of event FC Zorya Luhansk - AEK Athens">
                                                                                                                2.02
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQ0NzcxMDZ8MTgsMC4wLDUsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="arb_5ebb74a2e43cc42b29e846e47f007034 event_214433770">
                                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                                        <div className="arbHead row relative">
                                                                                            <div className="row-sm-height">
                                                                                                <div className="absoluteLeft padding5px percent col-sm-height col-middle betPercent">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <span title="1.00%">1.00%</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height displayTable">
                                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <span title="0.00">
                                                                                                                                    0.00
                                                                                                                                </span>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                                                                                                        <span className="sport" title="Soccer">
                                                                                                                            Soccer
                                                                                                                        </span>
                                                                                                                        <span className="fullTime">
                                                                                                                            <small><strong title="Game period: 1st half">
                                                                                                                                [1st half]</strong>
                                                                                                                            </small>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="ageTime">
                                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                                    1
                                                                                                                                    h
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="dropdown-toggle"
                                                                                                                                   title="Hide menu">
                                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%225ebb74a2e43cc42b29e846e47f007034%22,%22event_id%22:214433770,%22arb_formula_id%22:1,%22percent%22:1,%22started_at%22:1604606400,%22event_name%22:%22Zorya%20Lugansk%20-%20AEK%20Athens%22,%22league%22:%22Europe.%20UEFA%20Europa%20League%22,%22league_id%22:9428,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:10248,%22away_id%22:4627,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:5%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22FC%20Zorya%20Luhansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA%22,%22koef%22:2.02,%22commission%22:0,%22bookmaker_event_id%22:84466837,%22bookmaker_id%22:1,%22period_id%22:5,%22bc_id%22:103,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.02,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:103,%22title%22:%22F-F1(0.0)%22,%22mv_id%22:17,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:0,%22reverse_id%22:330,%22reverse_value%22:null,%22etalon_id%22:103,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22Zorya%20Lugansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ1MDg4OTd8MTgsMC4wLDUsMCwwLDA%22,%22koef%22:2.02,%22commission%22:0,%22bookmaker_event_id%22:84508897,%22bookmaker_id%22:12,%22period_id%22:5,%22bc_id%22:330,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.02,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:330,%22title%22:%22F-F2(0.0)%22,%22mv_id%22:18,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:0,%22reverse_id%22:103,%22reverse_value%22:null,%22etalon_id%22:330,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                                   className="standalone-calculator"
                                                                                                                                   title="Open in new view">
                                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                                </a>
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

                                                                                        <div className="bet_1 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        Pinnacle
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="FC Zorya Luhansk">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=1&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in FC Zorya Luhansk - AEK Athens"
                                                                                                                               arb_type_id="2">
                                                                                                                                FC
                                                                                                                                Zorya
                                                                                                                                Luhansk
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="UEFA - Europa League">
                                                                                                                            UEFA
                                                                                                                            -
                                                                                                                            Europa
                                                                                                                            League</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap1(0)">
                                                                                                                                    AH1(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <span className="icomoon-arrow-down
                                                                                                            gray "></span>
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="2.02"
                                                                                                               title="Odd 2.02 on the outcome AH1(0) of event FC Zorya Luhansk - AEK Athens">
                                                                                                                2.02
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="bet_2 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        DafabetOW
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="Zorya Lugansk">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=1&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in Zorya Lugansk - AEK Athens"
                                                                                                                               arb_type_id="2">
                                                                                                                                Zorya
                                                                                                                                Lugansk
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="*UEFA EUROPA LEAGUE|l_10132.png">
                                                                                                                            *UEFA
                                                                                                                            EUROPA
                                                                                                                            LEAGUE|l_10132.png</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap2(0)">
                                                                                                                                    AH2(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="2.02"
                                                                                                               title="Odd 2.02 on the outcome AH2(0) of event Zorya Lugansk - AEK Athens">
                                                                                                                2.02
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQ1MDg4OTd8MTgsMC4wLDUsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="arb_42740bf3bb9929ac67e1d86d7bf593a8 event_214433770">
                                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                                        <div className="arbHead row relative">
                                                                                            <div className="row-sm-height">
                                                                                                <div className="absoluteLeft padding5px percent col-sm-height col-middle betPercent">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <span title="1.00%">1.00%</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height displayTable">
                                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <span title="0.00">
                                                                                                                                    0.00
                                                                                                                                </span>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                                                                                                        <span className="sport" title="Soccer">
                                                                                                                            Soccer
                                                                                                                        </span>
                                                                                                                        <span className="fullTime">
                                                                                                                                <small><strong title="Game period: 1st half">
                                                                                                                                    [1st half]</strong>
                                                                                                                                </small>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="ageTime">
                                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                                    1
                                                                                                                                    h
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="dropdown-toggle"
                                                                                                                                   title="Hide menu">
                                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%2242740bf3bb9929ac67e1d86d7bf593a8%22,%22event_id%22:214433770,%22arb_formula_id%22:1,%22percent%22:1,%22started_at%22:1604606400,%22event_name%22:%22Zorya%20Lugansk%20-%20AEK%20Athens%22,%22league%22:%22Europe.%20UEFA%20Europa%20League%22,%22league_id%22:9428,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:10248,%22away_id%22:4627,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:5%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22FC%20Zorya%20Luhansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA%22,%22koef%22:2.02,%22commission%22:0,%22bookmaker_event_id%22:84466837,%22bookmaker_id%22:1,%22period_id%22:5,%22bc_id%22:103,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.02,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:103,%22title%22:%22F-F1(0.0)%22,%22mv_id%22:17,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:0,%22reverse_id%22:330,%22reverse_value%22:null,%22etalon_id%22:103,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22FC%20Zorya%20Lugansk%22,%22away%22:%22AEK%20Athens%20FC%22,%22id%22:%22ODQyMjUwOTd8MTgsMC4wLDUsMCwwLDA%22,%22koef%22:2.02,%22commission%22:0,%22bookmaker_event_id%22:84225097,%22bookmaker_id%22:20,%22period_id%22:5,%22bc_id%22:330,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.02,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:330,%22title%22:%22F-F2(0.0)%22,%22mv_id%22:18,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:0,%22reverse_id%22:103,%22reverse_value%22:null,%22etalon_id%22:330,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                                   className="standalone-calculator"
                                                                                                                                   title="Open in new view">
                                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                                </a>
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

                                                                                        <div className="bet_1 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        Pinnacle
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="FC Zorya Luhansk">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=1&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in FC Zorya Luhansk - AEK Athens"
                                                                                                                               arb_type_id="2">
                                                                                                                                FC
                                                                                                                                Zorya
                                                                                                                                Luhansk
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="UEFA - Europa League">
                                                                                                                            UEFA
                                                                                                                            -
                                                                                                                            Europa
                                                                                                                            League</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap1(0)">
                                                                                                                                    AH1(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <span className="icomoon-arrow-down
                                                                                                            gray "></span>
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="2.02"
                                                                                                               title="Odd 2.02 on the outcome AH1(0) of event FC Zorya Luhansk - AEK Athens">
                                                                                                                2.02
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="bet_2 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        DafaSports
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="FC Zorya Lugansk">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=1&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in FC Zorya Lugansk - AEK Athens FC"
                                                                                                                               arb_type_id="2">
                                                                                                                                FC
                                                                                                                                Zorya
                                                                                                                                Lugansk
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                                FC
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="International Clubs. UEFA Europa League, Group Stage. UEFA Europa League, Group G">
                                                                                                                            International
                                                                                                                            Clubs.
                                                                                                                            UEFA
                                                                                                                            Europa
                                                                                                                            League,
                                                                                                                            Group
                                                                                                                            Stage.
                                                                                                                            UEFA
                                                                                                                            Europa
                                                                                                                            League,
                                                                                                                            Group
                                                                                                                            G</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap2(0)">
                                                                                                                                    AH2(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <span className="icomoon-arrow-up
                                                                                                            gray "></span>
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="2.02"
                                                                                                               title="Odd 2.02 on the outcome AH2(0) of event FC Zorya Lugansk - AEK Athens FC">
                                                                                                                2.02
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQyMjUwOTd8MTgsMC4wLDUsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="arb_6df9bf924e9f0be6de6a7551c7818c56 event_214433770">
                                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                                        <div className="arbHead row relative">
                                                                                            <div className="row-sm-height">
                                                                                                <div className="absoluteLeft padding5px percent col-sm-height col-middle betPercent">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <span title="0.99%">0.99%</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height displayTable">
                                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <span title="0.00">
                                                                                                                                    0.00
                                                                                                                                </span>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                                                                                                        <span className="sport" title="Soccer">
                                                                                                                            Soccer
                                                                                                                        </span>
                                                                                                                        <span className="fullTime">
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="ageTime">
                                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                                    18
                                                                                                                                    min
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="dropdown-toggle"
                                                                                                                                   title="Hide menu">
                                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%226df9bf924e9f0be6de6a7551c7818c56%22,%22event_id%22:214433770,%22arb_formula_id%22:1,%22percent%22:0.99,%22started_at%22:1604606400,%22event_name%22:%22Zorya%20Lugansk%20-%20AEK%20Athens%22,%22league%22:%22Europe.%20UEFA%20Europa%20League%22,%22league_id%22:9428,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:10248,%22away_id%22:4627,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:4%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22Zorya%20Luhansk%22,%22away%22:%22AEK%22,%22id%22:%22ODQyMzA4NTd8MTcsMC4wLDQsMCwwLDA%22,%22koef%22:2.04,%22commission%22:0,%22bookmaker_event_id%22:84230857,%22bookmaker_id%22:21,%22period_id%22:4,%22bc_id%22:103,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.04,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:103,%22title%22:%22F-F1(0.0)%22,%22mv_id%22:17,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:0,%22reverse_id%22:330,%22reverse_value%22:null,%22etalon_id%22:103,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22Zarya%20Lugansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ1NDk5NjR8MTgsMC4wLDQsMCwwLDA%22,%22koef%22:2,%22commission%22:0,%22bookmaker_event_id%22:84549964,%22bookmaker_id%22:6,%22period_id%22:4,%22bc_id%22:330,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:330,%22title%22:%22F-F2(0.0)%22,%22mv_id%22:18,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:0,%22reverse_id%22:103,%22reverse_value%22:null,%22etalon_id%22:330,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                                   className="standalone-calculator"
                                                                                                                                   title="Open in new view">
                                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                                </a>
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

                                                                                        <div className="bet_1 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        1xbet
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="Zorya Luhansk">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=0&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in Zorya Luhansk - AEK"
                                                                                                                               arb_type_id="2">
                                                                                                                                Zorya
                                                                                                                                Luhansk
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="UEFA Europa League">
                                                                                                                            UEFA
                                                                                                                            Europa
                                                                                                                            League</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap1(0)">
                                                                                                                                    AH1(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <span className="icomoon-arrow-up
                                                                                                            gray "></span>
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="2.04"
                                                                                                               title="Odd 2.04 on the outcome AH1(0) of event Zorya Luhansk - AEK">
                                                                                                                2.04
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQyMzA4NTd8MTcsMC4wLDQsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="bet_2 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        Fonbet
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="Zarya Lugansk">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=0&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in Zarya Lugansk - AEK Athens"
                                                                                                                               arb_type_id="2">
                                                                                                                                Zarya
                                                                                                                                Lugansk
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="UEFA Europe League. Group stage">
                                                                                                                            UEFA
                                                                                                                            Europe
                                                                                                                            League.
                                                                                                                            Group
                                                                                                                            stage</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap2(0)">
                                                                                                                                    AH2(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="2"
                                                                                                               title="Odd 2 on the outcome AH2(0) of event Zarya Lugansk - AEK Athens">
                                                                                                                2.00
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQ1NDk5NjR8MTgsMC4wLDQsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="arb_4715a8c4193762b9a5bd80497e6fb951 event_214433770">
                                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                                        <div className="arbHead row relative">
                                                                                            <div className="row-sm-height">
                                                                                                <div className="absoluteLeft padding5px percent col-sm-height col-middle betPercent">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <span title="0.99%">0.99%</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height displayTable">
                                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <span title="0.00">
                                                                                                                                    0.00
                                                                                                                                </span>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                                                                                                        <span className="sport" title="Soccer">
                                                                                                                            Soccer
                                                                                                                        </span>
                                                                                                                        <span className="fullTime">
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="ageTime">
                                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                                    25
                                                                                                                                    min
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="dropdown-toggle"
                                                                                                                                   title="Hide menu">
                                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%224715a8c4193762b9a5bd80497e6fb951%22,%22event_id%22:214433770,%22arb_formula_id%22:1,%22percent%22:0.99,%22started_at%22:1604606400,%22event_name%22:%22Zorya%20Lugansk%20-%20AEK%20Athens%22,%22league%22:%22Europe.%20UEFA%20Europa%20League%22,%22league_id%22:9428,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:10248,%22away_id%22:4627,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:4%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22Zorya%20Lugansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ0ODUxNDN8MTcsMC4wLDQsMCwwLDA%22,%22koef%22:2.04,%22commission%22:0,%22bookmaker_event_id%22:84485143,%22bookmaker_id%22:4,%22period_id%22:4,%22bc_id%22:103,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.04,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:103,%22title%22:%22F-F1(0.0)%22,%22mv_id%22:17,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:0,%22reverse_id%22:330,%22reverse_value%22:null,%22etalon_id%22:103,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22Zarya%20Lugansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ1NDk5NjR8MTgsMC4wLDQsMCwwLDA%22,%22koef%22:2,%22commission%22:0,%22bookmaker_event_id%22:84549964,%22bookmaker_id%22:6,%22period_id%22:4,%22bc_id%22:330,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:330,%22title%22:%22F-F2(0.0)%22,%22mv_id%22:18,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:0,%22reverse_id%22:103,%22reverse_value%22:null,%22etalon_id%22:330,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                                   className="standalone-calculator"
                                                                                                                                   title="Open in new view">
                                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                                </a>
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

                                                                                        <div className="bet_1 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        Marathon
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="Zorya Lugansk">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=0&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in Zorya Lugansk - AEK Athens"
                                                                                                                               arb_type_id="2">
                                                                                                                                Zorya
                                                                                                                                Lugansk
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="Clubs. International. UEFA Europa League. Group Stage">
                                                                                                                            Clubs.
                                                                                                                            International.
                                                                                                                            UEFA
                                                                                                                            Europa
                                                                                                                            League.
                                                                                                                            Group
                                                                                                                            Stage</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap1(0)">
                                                                                                                                    AH1(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <span className="icomoon-arrow-up
                                                                                                            gray "></span>
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="2.04"
                                                                                                               title="Odd 2.04 on the outcome AH1(0) of event Zorya Lugansk - AEK Athens">
                                                                                                                2.04
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQ0ODUxNDN8MTcsMC4wLDQsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="bet_2 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        Fonbet
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="Zarya Lugansk">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=0&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in Zarya Lugansk - AEK Athens"
                                                                                                                               arb_type_id="2">
                                                                                                                                Zarya
                                                                                                                                Lugansk
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="UEFA Europe League. Group stage">
                                                                                                                            UEFA
                                                                                                                            Europe
                                                                                                                            League.
                                                                                                                            Group
                                                                                                                            stage</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap2(0)">
                                                                                                                                    AH2(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="2"
                                                                                                               title="Odd 2 on the outcome AH2(0) of event Zarya Lugansk - AEK Athens">
                                                                                                                2.00
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQ1NDk5NjR8MTgsMC4wLDQsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="arb_850c8bf85ad07cd95b5bf1a2d0295e47 event_214433770">
                                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                                        <div className="arbHead row relative">
                                                                                            <div className="row-sm-height">
                                                                                                <div className="absoluteLeft padding5px percent col-sm-height col-middle betPercent">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <span title="0.96%">0.96%</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height displayTable">
                                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <span title="0.00">
                                                                                                                                    0.00
                                                                                                                                </span>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                                                                                                        <span className="sport" title="Soccer">
                                                                                                                            Soccer
                                                                                                                        </span>
                                                                                                                        <span className="fullTime">
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="ageTime">
                                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                                    1
                                                                                                                                    h
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="dropdown-toggle"
                                                                                                                                   title="Hide menu">
                                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%22850c8bf85ad07cd95b5bf1a2d0295e47%22,%22event_id%22:214433770,%22arb_formula_id%22:1,%22percent%22:0.96,%22started_at%22:1604606400,%22event_name%22:%22Zorya%20Lugansk%20-%20AEK%20Athens%22,%22league%22:%22Europe.%20UEFA%20Europa%20League%22,%22league_id%22:9428,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:10248,%22away_id%22:4627,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:4%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22Zorya%20Luhansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQyMzUwNTF8MTcsMC4wLDQsMCwwLDA%22,%22koef%22:2.06,%22commission%22:0,%22bookmaker_event_id%22:84235051,%22bookmaker_id%22:34,%22period_id%22:4,%22bc_id%22:103,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.06,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:103,%22title%22:%22F-F1(0.0)%22,%22mv_id%22:17,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:0,%22reverse_id%22:330,%22reverse_value%22:null,%22etalon_id%22:103,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22Zorya%20Luhansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ2MTU0OTl8MTgsMC4wLDQsMCwwLDA%22,%22koef%22:1.98,%22commission%22:0,%22bookmaker_event_id%22:84615499,%22bookmaker_id%22:3,%22period_id%22:4,%22bc_id%22:330,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:1.98,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:330,%22title%22:%22F-F2(0.0)%22,%22mv_id%22:18,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:0,%22reverse_id%22:103,%22reverse_value%22:null,%22etalon_id%22:330,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                                   className="standalone-calculator"
                                                                                                                                   title="Open in new view">
                                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                                </a>
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

                                                                                        <div className="bet_1 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        Vbet
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="Zorya Luhansk">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=0&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in Zorya Luhansk - AEK Athens"
                                                                                                                               arb_type_id="2">
                                                                                                                                Zorya
                                                                                                                                Luhansk
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="Europe. UEFA Europa League">
                                                                                                                            Europe.
                                                                                                                            UEFA
                                                                                                                            Europa
                                                                                                                            League</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap1(0)">
                                                                                                                                    AH1(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <span className="icomoon-arrow-down
                                                                                                            gray "></span>
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="2.06"
                                                                                                               title="Odd 2.06 on the outcome AH1(0) of event Zorya Luhansk - AEK Athens">
                                                                                                                2.06
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQyMzUwNTF8MTcsMC4wLDQsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="bet_2 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        Sbobet
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="Zorya Luhansk">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=0&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in Zorya Luhansk - AEK Athens"
                                                                                                                               arb_type_id="2">
                                                                                                                                Zorya
                                                                                                                                Luhansk
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="UEFA EUROPA LEAGUE">
                                                                                                                            UEFA
                                                                                                                            EUROPA
                                                                                                                            LEAGUE</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap2(0)">
                                                                                                                                    AH2(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="1.98"
                                                                                                               title="Odd 1.98 on the outcome AH2(0) of event Zorya Luhansk - AEK Athens">
                                                                                                                1.98
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQ2MTU0OTl8MTgsMC4wLDQsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="arb_a210daf163244fac138214ec64205e93 event_214433770">
                                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                                        <div className="arbHead row relative">
                                                                                            <div className="row-sm-height">
                                                                                                <div className="absoluteLeft padding5px percent col-sm-height col-middle betPercent">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <span title="0.96%">0.96%</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height displayTable">
                                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <span title="0.00">
                                                                                                                                    0.00
                                                                                                                                </span>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                                                                                                        <span className="sport" title="Soccer">
                                                                                                                            Soccer
                                                                                                                        </span>
                                                                                                                        <span className="fullTime">
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="ageTime">
                                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                                    1
                                                                                                                                    h
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="dropdown-toggle"
                                                                                                                                   title="Hide menu">
                                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%22a210daf163244fac138214ec64205e93%22,%22event_id%22:214433770,%22arb_formula_id%22:1,%22percent%22:0.96,%22started_at%22:1604606400,%22event_name%22:%22Zorya%20Lugansk%20-%20AEK%20Athens%22,%22league%22:%22Europe.%20UEFA%20Europa%20League%22,%22league_id%22:9428,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:10248,%22away_id%22:4627,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:4%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22Zorya%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQyNzQwNzh8MTcsMC4wLDQsMCwwLDA%22,%22koef%22:2.06,%22commission%22:0,%22bookmaker_event_id%22:84274078,%22bookmaker_id%22:39,%22period_id%22:4,%22bc_id%22:103,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.06,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:103,%22title%22:%22F-F1(0.0)%22,%22mv_id%22:17,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:0,%22reverse_id%22:330,%22reverse_value%22:null,%22etalon_id%22:103,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22ZORYA%20LUGANSK%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ2MTY3NTB8MTgsMC4wLDQsMCwwLDA%22,%22koef%22:1.98,%22commission%22:0,%22bookmaker_event_id%22:84616750,%22bookmaker_id%22:56,%22period_id%22:4,%22bc_id%22:330,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:1.98,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:330,%22title%22:%22F-F2(0.0)%22,%22mv_id%22:18,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:0,%22reverse_id%22:103,%22reverse_value%22:null,%22etalon_id%22:330,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                                   className="standalone-calculator"
                                                                                                                                   title="Open in new view">
                                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                                </a>
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

                                                                                        <div className="bet_1 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        Tipsport
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="Zorya">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=0&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in Zorya - AEK Athens"
                                                                                                                               arb_type_id="2">
                                                                                                                                Zorya
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="Evropská liga">
                                                                                                                            Evropská
                                                                                                                            liga</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap1(0)">
                                                                                                                                    AH1(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <span className="icomoon-arrow-up
                                                                                                            gray "></span>
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="2.06"
                                                                                                               title="Odd 2.06 on the outcome AH1(0) of event Zorya - AEK Athens">
                                                                                                                2.06
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQyNzQwNzh8MTcsMC4wLDQsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="bet_2 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        BetOnline
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        14:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="ZORYA LUGANSK">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=0&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in ZORYA LUGANSK - AEK Athens"
                                                                                                                               arb_type_id="2">
                                                                                                                                ZORYA
                                                                                                                                LUGANSK
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="UEFA EL">
                                                                                                                            UEFA
                                                                                                                            EL</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap2(0)">
                                                                                                                                    AH2(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="1.98"
                                                                                                               title="Odd 1.98 on the outcome AH2(0) of event ZORYA LUGANSK - AEK Athens">
                                                                                                                1.98
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQ2MTY3NTB8MTgsMC4wLDQsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="arb_6852eadfd92295cc1d83401e20c8ed4e event_214433770">
                                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                                        <div className="arbHead row relative">
                                                                                            <div className="row-sm-height">
                                                                                                <div className="absoluteLeft padding5px percent col-sm-height col-middle betPercent">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <span title="0.96%">0.96%</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height displayTable">
                                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <span title="0.00">
                                                                                                                                    0.00
                                                                                                                                </span>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                                                                                                        <span className="sport" title="Soccer">
                                                                                                                            Soccer
                                                                                                                        </span>
                                                                                                                        <span className="fullTime">
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="ageTime">
                                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                                    1
                                                                                                                                    h
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="dropdown-toggle"
                                                                                                                                   title="Hide menu">
                                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%226852eadfd92295cc1d83401e20c8ed4e%22,%22event_id%22:214433770,%22arb_formula_id%22:1,%22percent%22:0.96,%22started_at%22:1604606400,%22event_name%22:%22Zorya%20Lugansk%20-%20AEK%20Athens%22,%22league%22:%22Europe.%20UEFA%20Europa%20League%22,%22league_id%22:9428,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:10248,%22away_id%22:4627,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:4%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22Zorya%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQyNzQwNzh8MTcsMC4wLDQsMCwwLDA%22,%22koef%22:2.06,%22commission%22:0,%22bookmaker_event_id%22:84274078,%22bookmaker_id%22:39,%22period_id%22:4,%22bc_id%22:103,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.06,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:103,%22title%22:%22F-F1(0.0)%22,%22mv_id%22:17,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:0,%22reverse_id%22:330,%22reverse_value%22:null,%22etalon_id%22:103,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22Zorya%20Luhansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ2MTU0OTl8MTgsMC4wLDQsMCwwLDA%22,%22koef%22:1.98,%22commission%22:0,%22bookmaker_event_id%22:84615499,%22bookmaker_id%22:3,%22period_id%22:4,%22bc_id%22:330,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:1.98,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:330,%22title%22:%22F-F2(0.0)%22,%22mv_id%22:18,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:0,%22reverse_id%22:103,%22reverse_value%22:null,%22etalon_id%22:330,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                                   className="standalone-calculator"
                                                                                                                                   title="Open in new view">
                                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                                </a>
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

                                                                                        <div className="bet_1 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        Tipsport
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="Zorya">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=0&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in Zorya - AEK Athens"
                                                                                                                               arb_type_id="2">
                                                                                                                                Zorya
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="Evropská liga">
                                                                                                                            Evropská
                                                                                                                            liga</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap1(0)">
                                                                                                                                    AH1(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <span className="icomoon-arrow-up
                                                                                                            gray "></span>
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="2.06"
                                                                                                               title="Odd 2.06 on the outcome AH1(0) of event Zorya - AEK Athens">
                                                                                                                2.06
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQyNzQwNzh8MTcsMC4wLDQsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="bet_2 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        Sbobet
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="Zorya Luhansk">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=0&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in Zorya Luhansk - AEK Athens"
                                                                                                                               arb_type_id="2">
                                                                                                                                Zorya
                                                                                                                                Luhansk
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="UEFA EUROPA LEAGUE">
                                                                                                                            UEFA
                                                                                                                            EUROPA
                                                                                                                            LEAGUE</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap2(0)">
                                                                                                                                    AH2(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="1.98"
                                                                                                               title="Odd 1.98 on the outcome AH2(0) of event Zorya Luhansk - AEK Athens">
                                                                                                                1.98
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQ2MTU0OTl8MTgsMC4wLDQsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="arb_f0c668c97b4af1442085122107a7ab9a event_214433770">
                                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                                        <div className="arbHead row relative">
                                                                                            <div className="row-sm-height">
                                                                                                <div className="absoluteLeft padding5px percent col-sm-height col-middle betPercent">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <span title="0.96%">0.96%</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height displayTable">
                                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <span title="0.00">
                                                                                                                                    0.00
                                                                                                                                </span>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                                                                                                        <span className="sport" title="Soccer">
                                                                                                                            Soccer
                                                                                                                        </span>
                                                                                                                        <span className="fullTime">
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="ageTime">
                                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                                    1
                                                                                                                                    h
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="dropdown-toggle"
                                                                                                                                   title="Hide menu">
                                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%22f0c668c97b4af1442085122107a7ab9a%22,%22event_id%22:214433770,%22arb_formula_id%22:1,%22percent%22:0.96,%22started_at%22:1604606400,%22event_name%22:%22Zorya%20Lugansk%20-%20AEK%20Athens%22,%22league%22:%22Europe.%20UEFA%20Europa%20League%22,%22league_id%22:9428,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:10248,%22away_id%22:4627,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:4%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22Zorya%20Luhansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQyMzUwNTF8MTcsMC4wLDQsMCwwLDA%22,%22koef%22:2.06,%22commission%22:0,%22bookmaker_event_id%22:84235051,%22bookmaker_id%22:34,%22period_id%22:4,%22bc_id%22:103,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.06,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:103,%22title%22:%22F-F1(0.0)%22,%22mv_id%22:17,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:0,%22reverse_id%22:330,%22reverse_value%22:null,%22etalon_id%22:103,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22ZORYA%20LUGANSK%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ2MTY3NTB8MTgsMC4wLDQsMCwwLDA%22,%22koef%22:1.98,%22commission%22:0,%22bookmaker_event_id%22:84616750,%22bookmaker_id%22:56,%22period_id%22:4,%22bc_id%22:330,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:1.98,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:330,%22title%22:%22F-F2(0.0)%22,%22mv_id%22:18,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:0,%22reverse_id%22:103,%22reverse_value%22:null,%22etalon_id%22:330,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                                   className="standalone-calculator"
                                                                                                                                   title="Open in new view">
                                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                                </a>
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

                                                                                        <div className="bet_1 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        Vbet
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="Zorya Luhansk">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=0&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in Zorya Luhansk - AEK Athens"
                                                                                                                               arb_type_id="2">
                                                                                                                                Zorya
                                                                                                                                Luhansk
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="Europe. UEFA Europa League">
                                                                                                                            Europe.
                                                                                                                            UEFA
                                                                                                                            Europa
                                                                                                                            League</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap1(0)">
                                                                                                                                    AH1(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <span className="icomoon-arrow-down
                                                                                                            gray "></span>
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="2.06"
                                                                                                               title="Odd 2.06 on the outcome AH1(0) of event Zorya Luhansk - AEK Athens">
                                                                                                                2.06
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQyMzUwNTF8MTcsMC4wLDQsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="bet_2 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        BetOnline
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        14:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="ZORYA LUGANSK">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=0&amp;market_id=3"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in ZORYA LUGANSK - AEK Athens"
                                                                                                                               arb_type_id="2">
                                                                                                                                ZORYA
                                                                                                                                LUGANSK
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="UEFA EL">
                                                                                                                            UEFA
                                                                                                                            EL</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="Asian Handicap2(0)">
                                                                                                                                    AH2(0)
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="1.98"
                                                                                                               title="Odd 1.98 on the outcome AH2(0) of event ZORYA LUGANSK - AEK Athens">
                                                                                                                1.98
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQ2MTY3NTB8MTgsMC4wLDQsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="arb_bfbad900c7390786ccbebbedd4c6f378 event_214433770">
                                                                                    <div className="col-xs-12 arb-item-body-js">
                                                                                        <div className="arbHead row relative">
                                                                                            <div className="row-sm-height">
                                                                                                <div className="absoluteLeft padding5px percent col-sm-height col-middle betPercent">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <span title="0.77%">0.77%</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-xs-12 blueBg  col-sm-height col-middle">
                                                                                                    <div className="inside">
                                                                                                        <div className="content">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height displayTable">
                                                                                                                    <div className="tableCell middle text-center col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <span title="0.00">
                                                                                                                                    0.00
                                                                                                                                </span>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                                                                                                        <span className="sport" title="Soccer">
                                                                                                                            Soccer
                                                                                                                        </span>
                                                                                                                        <span className="fullTime">
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                                                                                    </div>
                                                                                                                    <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="ageTime">
                                                                                                                                    <span className="icomoon-clock"></span>
                                                                                                                                    1
                                                                                                                                    h
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="dropdown-toggle"
                                                                                                                                   title="Hide menu">
                                                                                                                                    <span className="icomoon-remove2"></span>
                                                                                                                                </a>
                                                                                                                                <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%22bfbad900c7390786ccbebbedd4c6f378%22,%22event_id%22:214433770,%22arb_formula_id%22:1,%22percent%22:0.767,%22started_at%22:1604606400,%22event_name%22:%22Zorya%20Lugansk%20-%20AEK%20Athens%22,%22league%22:%22Europe.%20UEFA%20Europa%20League%22,%22league_id%22:9428,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:10248,%22away_id%22:4627,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:4%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22Zorya%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ1MTE4NDN8MTQsMC4wLDQsMSwwLDA%22,%22koef%22:1.5882353,%22commission%22:5,%22bookmaker_event_id%22:84511843,%22bookmaker_id%22:11,%22period_id%22:4,%22bc_id%22:2235,%22direct_link%22:%22%22,%22koef_lay%22:2.7,%22is_lay%22:1,%22koef_commissed%22:1.558823535,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:2235,%22title%22:%22DC-1X()%22,%22mv_id%22:14,%22value_id%22:null,%22synonym_id%22:105,%22m_id%22:2,%22bv_id%22:29,%22value%22:null,%22reverse_id%22:2250,%22reverse_value%22:null,%22etalon_id%22:105,%22created_at%22:1389619769,%22updated_at%22:1510297578,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22market_variation%22:%7B%22id%22:14,%22title%22:%22DC-1X%22,%22market_id%22:2,%22bet_variation_id%22:29,%22swap_id%22:15%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22Zarya%20Lugansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ1NDk5NjR8MTMsMC4wLDQsMCwwLDA%22,%22koef%22:2.85,%22commission%22:0,%22bookmaker_event_id%22:84549964,%22bookmaker_id%22:6,%22period_id%22:4,%22bc_id%22:2250,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.85,%22period%22:%7B%22id%22:4,%22title%22:%22regular%20time%22,%22identifier%22:%220%22%7D,%22bet_combination%22:%7B%22id%22:2250,%22title%22:%221X2-2()%22,%22mv_id%22:13,%22value_id%22:null,%22synonym_id%22:328,%22m_id%22:1,%22bv_id%22:34,%22value%22:null,%22reverse_id%22:2235,%22reverse_value%22:null,%22etalon_id%22:328,%22created_at%22:1389619769,%22updated_at%22:1510297578,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22market_variation%22:%7B%22id%22:13,%22title%22:%221X2-2%22,%22market_id%22:1,%22bet_variation_id%22:34,%22swap_id%22:11%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%22%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                                                                                   className="standalone-calculator"
                                                                                                                                   title="Open in new view">
                                                                                                                                    <span className="brankic-pop-out"></span>
                                                                                                                                </a>
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

                                                                                        <div className="bet_1 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        Betfair
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="Zorya">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=0&amp;market_id=2"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in Zorya - AEK Athens"
                                                                                                                               arb_type_id="1">
                                                                                                                                Zorya
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="International. UEFA Europa League">
                                                                                                                            International.
                                                                                                                            UEFA
                                                                                                                            Europa
                                                                                                                            League</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="1X">
                                                                                                                                    1X
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                            <span className="icomoon-arrow-up
                              gray "></span>
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="1.5882353"
                                                                                                               title="Odd 1.5882353 on the outcome 1X of event Zorya - AEK Athens">
                                                                                                                1.59
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title="$100.00">$100.00</small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQ1MTE4NDN8MTQsMC4wLDQsMSwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="bet_2 row relative">
                                                                                            <div className="row-sm-height betHeight displayTable">
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                                                                    <div className="row height100">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content bookmakerLinkContainer">
                                                                                                                        Fonbet
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                                                                    <div className="row">
                                                                                                        <div className="row-sm-height">
                                                                                                            <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                                                                <div className="inside">
                                                                                                                    <div className="content timeContainer">
                                                                                                                        05
                                                                                                                        Nov
                                                                                                                        <br/>
                                                                                                                        15:00
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                                                                    <div className="inside height100">
                                                                                                        <div className="content eventLegueName height100">
                                                                                                            <div className="row height100">
                                                                                                                <div className="row-sm-height">
                                                                                                                    <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                                                                        <a className="copy-team-name copy-team-name-js"
                                                                                                                           title="Copy"
                                                                                                                           data-to-copy="Zarya Lugansk">
                                                                                                                            <span className="icomoon-copy3"></span>
                                                                                                                        </a>
                                                                                                                        <div>
                                                                                                                            <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=0&amp;market_id=1"
                                                                                                                               target="_blank"
                                                                                                                               rel="nofollow"
                                                                                                                               title="Arb in Zarya Lugansk - AEK Athens"
                                                                                                                               arb_type_id="1">
                                                                                                                                Zarya
                                                                                                                                Lugansk
                                                                                                                                -
                                                                                                                                AEK
                                                                                                                                Athens
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                        <small className="text-muted"
                                                                                                                               title="UEFA Europe League. Group stage">
                                                                                                                            UEFA
                                                                                                                            Europe
                                                                                                                            League.
                                                                                                                            Group
                                                                                                                            stage</small>
                                                                                                                    </div>
                                                                                                                    <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                                                                        <div className="inside">
                                                                                                                            <div className="content text-center compareLinkContainer">
                                                                                                                                <a href="https://www.betburger.com/arbs#"
                                                                                                                                   className="check_for_russia is_disabled-hbs"
                                                                                                                                   rel="nofollow"
                                                                                                                                   title="2">
                                                                                                                                    2
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                                                                    <div className="inside">
                                                                                                        <div className="content text-right relative outcomeKoef">
                                                                                                            <a href="https://www.betburger.com/arbs#"
                                                                                                               className="koef check_for_russia is_disabled-hbs"
                                                                                                               rel="nofollow"
                                                                                                               koef_eu="2.85"
                                                                                                               title="Odd 2.85 on the outcome 2 of event Zarya Lugansk - AEK Athens">
                                                                                                                2.85
                                                                                                            </a>

                                                                                                            <div>
                                                                                                                <small className="currency"
                                                                                                                       title=""></small>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                                       className="removeOutcome"
                                                                                                       data-id="ODQ1NDk5NjR8MTMsMC4wLDQsMCwwLDA"
                                                                                                       title="Hide Bet">
                                                                                                        <span className="brankic-cancel3"></span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="iScrollVerticalScrollbar iScrollLoneScrollbar"
                                                                             style={{position: "absolute", z_index: "9999", width: "7px", bottom: "2px", top: "2px", right: "1px", overflow: "hidden", transform: "translateZ(0px)", transition_duration: "0ms", opacity: "0"}}>
                                                                            <div className="iScrollIndicator"
                                                                                 style={{box_sizing: "border-box", position: "absolute", background: "rgba(0, 0, 0, 0.5)", border: "1px solid rgba(255, 255, 255, 0.9)", border_radius: "3px", width: "100%", transition_duration: "0ms", display: "block", height: "237px", transform: "translate(0px, 0px) translateZ(0px)"}}></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tableRowStyle leftSmallPanelRows selected">
                                            <div className="tableCellStyle height100">
                                                <div className="height100">
                                                    <div className="col-xs-12 height100">
                                                        <div className="row smallarbsComponent height100">
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

export default ContainerWrapper;
