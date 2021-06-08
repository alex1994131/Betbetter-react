import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { getAllBookmarks, getAllSports } from '../../../../store/actions/betActions';
import {setAllArbs} from '../../../../store/actions/betActions'
class Table1 extends Component {
    constructor() {
        super();
        this.state = {
          bet1_price:50,
          bet2_price:50,  
          total_price: 100,
          koef1:1,
          koef2:1,
        };
        this.handleBet1Change = this.handleBet1Change.bind(this);
        this.handleBet2Change = this.handleBet2Change.bind(this);
        this.handleTotalChange=this.handleTotalChange.bind(this);
      }

      
      handleBet1Change(evt) {
        this.setState({
            bet1_price: evt.target.value,
            total_price:parseFloat(this.state.bet2_price)+parseFloat(evt.target.value)
        });
    };

    handleBet2Change(evt) {
        this.setState({
            bet2_price: evt.target.value,
            total_price:parseFloat(this.state.bet1_price)+parseFloat(evt.target.value)
        });
    };
      handleTotalChange(evt) {
        this.setState({
          total_price: evt.target.value,
          bet1_price:evt.target.value-this.state.bet2_price
        });
      };
    cleanDate1 (d) {
        var print_Date = '';
        d=new Date();
        if(true){
            print_Date=new Intl.DateTimeFormat('en-US', {month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(d)
        }
        return print_Date;
    }
    componentDidMount() {
        this.props.getAllBookmarks();
        this.props.getAllSports();
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.allbets !== prevProps.allbets){
            let bet1={};
            let bet2={};
            let data={};
            this.props.allbets.map(bet => {
                if(bet.id===this.props.allarbs.bet1_id){
                    bet1=bet;
                }
                if(bet.id===this.props.allarbs.bet2_id){
                    bet2=bet;
                }   
            });
            this.setState({
                bet1_price:(100/(bet1.koef+bet2.koef)*bet2.koef).toFixed(2),
                bet2_price:(100/(bet1.koef+bet2.koef)*bet1.koef).toFixed(2),
            })
        }
    }
  render() {
        const bookmarks = this.props.bookmarks;
        const sports = this.props.sports;
        const arbs=this.props.allarbs;
        const bets=this.props.allbets;
        let bet1={};
        let bet2={};

        bets.map(bet => {
            if(bet.id===arbs.bet1_id){
                bet1=bet;
            }
            if(bet.id===arbs.bet2_id){
                bet2=bet;
            }
        });
        
    return (
        <div className="tableRowStyle calcRow">
            <div className="row calculatorSection" style={{marginLeft:"-20px"}}>
                <div className="message-container hide">
                    <span>
                        Saved
                    </span>
                </div>
                <div className="background-theme hide"></div>
                <div className="arbsCalculatorComponent col-xs-12 withArb">
                    <div className="calculatorView smallCalcView">
                        <input type="hidden" name="formula" id="formula" value="[object Object]"/>
                        <input type="hidden" name="percent" id="percent" value="/" />
                        <input type="hidden" id="matchbook" value="0"/>
                        <div className="row">
                            <div className="row-sm-height calcHeader displayTable">
                                <div className="tableCell left_calcHeader">
                                    <div className="left_calcHeader_top text-center">
                                        <div className="left_calcHeader_percent inline_middle text-left padding5px"
                                            title="1.00%">{arbs.percent}%
                                        </div>
                                        <div className="left_calcHeader_sport inline_middle text-left padding5px" title="Soccer">
                                            {
                                                sports.map(sport => {
                                                    return (
                                                        sport.id == arbs.sport_id && sport.name
                                                    )  
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="left_calcHeader_bottom">
                                        <div className="left_calcHeader_time text-center">
                                            {this.cleanDate1(arbs.started_at*1000)}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="tableCell padding5px center_calcHeader text-left">
                                    <div className="center_calcHeader_top">
                                        <div className="center_calcHeader_event_name inline_middle"
                                            title="Zorya Lugansk - AEK Athens">
                                            <a>
                                                {bet2.bookmaker_event_name}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="center_calcHeader_bottom">
                                        <div className="center_calcHeader_league inline_middle"
                                            title="Europe. UEFA Europa League">
                                            {bet2.bookmaker_league_name}
                                        </div>
                                    </div>
                                </div>
                                <div className="tableCell right_calcHeader">
                                    <div className="right_calcHeader_lines">
                                        <a href="#"
                                        className="smallWindow inline_middle text-center halfWindow"
                                        title="Change calculator view">
                                            <i className="fas fa-expand-arrows-alt" style={{color:"white"}}></i></a>
                                        <a href="#"
                                        className="newWindow inline_middle text-center"
                                        title="Open in new view">
                                            <i className="fas fa-share-square" style={{color:"white"}}></i></a>
                                    </div>
                                    <div className="right_calcHeader_lines">
                                        <a href="#"
                                        className="reportWrongArb inline_middle text-center"
                                        title="Report about wrong arb">
                                            <i className="fas fa-bullhorn" style={{color:"white"}}></i>
                                        </a>
                                        <a id="drop_calc"
                                        href="#"
                                        className="dropdown-toggle closeTrash inline_middle text-center"
                                        data-toggle="dropdown" title="Hide menu"
                                        role="button" aria-haspopup="true"
                                        aria-expanded="true">
                                            <i className="glyphicon glyphicon-trash" style={{color:"white"}}></i>
                                        
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-right"
                                            aria-labelledby="drop_calc">
                                            <li>
                                                <a href="#"
                                                title="Hide arb"
                                                data-id="f697fb91e3e507ca83f2150d91a6ebba"
                                                className="hideArb">
                                                    Hide arb
                                                </a></li>
                                            <li>
                                                <a href="#"
                                                title="Hide event"
                                                data-id="214433770"
                                                className="hideEvent">
                                                    Hide event
                                                </a></li>
                                            <li role="separator" className="divider"></li>
                                            <li>
                                                <a href="#"
                                                title="Hide event in Pinnacle"
                                                data-id="84466837"
                                                className="hideBkEvent">
                                                    Hide event in Pinnacle
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                title="Hide event in Sportmarket"
                                                data-id="84477106"
                                                className="hideBkEvent">
                                                    Hide event in Sportmarket
                                                </a>
                                            </li>
                                            <li role="separator" className="divider"></li>
                                            <li>
                                                <a href="#"
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
                                                        <span className="glyphicon glyphicon-duplicate"></span>
                                                    </span>
                                                    <a href="https://www.betburger.com/prices"
                                                    className="check_for_russia is_disabled-hbs"
                                                    rel="nofollow"
                                                    title="Arb in FC Zorya Luhansk - AEK Athens"> {bet1.market_and_bet_type}({bet1.market_and_bet_type_param})</a>
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
                                                <ul multiple="" className="bookmakersSelect multipleRows">
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
                                                                                href="#"
                                                                                title="[missing &quot;en.arbs_page.delete_bet&quot; translation]"><span></span></a>
                                                                                <span className="bookmaker">Pinnacle()</span>
                                                                            </div>
                                                                            <div className="directLinkListRow text-left padding2_5">
                                                                                <a className="directLink"
                                                                                target="_blank"
                                                                                href="#"
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
                                                <div multiple="" className="bookmakersSelect singleRow">
                                                    <a className="excludeBookmakerEvent" data-id="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA" data-bet_number="1" href="#" title="Hide Bet"><span className="fa fa-close"></span></a>
                                                    <select className="input-xs singleSelect1 bg-color-" data-number="1" data-active="false">
                                                        <option className="bg-color-" selected="" value="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA">
                                                        {
                                                            bookmarks.map(bookmark => {
                                                                return (
                                                                    bookmark.id == bet1.bookmaker_id && bookmark.name+":("+bet1.koef.toFixed(2)+")"
                                                                )  
                                                            })
                                                        }
                                                        
                                                        </option>
                                                    </select>
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
                                                                value={bet1.koef} onChange={this.handleKoef1Change}/>
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
                                                            id="outcome1_koef_static">{bet1.koef}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle">
                                            <div className="inside">
                                                <div className="content">
                                                    <div className="form-group">
                                                        <input className="form-control input-xs stake input5spaces"
                                                                type="text" value={this.state.bet1_price} onChange={this.handleBet1Change} 
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
                                                    
                                                    <div className="checkboxCalc">
                                                        <input type="checkbox"
                                                                value="true"
                                                                id="outcome1_stake_distr"
                                                                data-bet_number="1"
                                                                className="distr"
                                                                data-outcome_number="1"
                                                                name="outcome1_stake_distr"
                                                                checked=""/>
                                                        <label htmlFor="outcome1_stake_distr"><span
                                                                className="far fa-check-square"></span></label>
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
                                                    id="outcome1_revenue">{(this.state.bet1_price*bet1.koef-this.state.total_price).toFixed(3)}
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
                                                        <span className="glyphicon glyphicon-duplicate"></span>
                                                    </span>
                                                    <a href="https://www.betburger.com/prices"
                                                    className="check_for_russia is_disabled-hbs"
                                                    rel="nofollow"
                                                    title="Arb in FC Zorya Luhansk - AEK Athens"> {bet2.market_and_bet_type}({bet2.market_and_bet_type_param})</a>
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
                                                <ul multiple="" className="bookmakersSelect multipleRows">
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
                                                                                href="#"
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
                                                <div multiple="" className="bookmakersSelect singleRow">
                                                    <a className="excludeBookmakerEvent" data-id="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA" data-bet_number="1" href="#" title="Hide Bet"><span className="fa fa-close"></span></a>
                                                    <select className="input-xs singleSelect1 bg-color-" data-number="1" data-active="false">
                                                        <option className="bg-color-" selected="" value="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA">
                                                        {
                                                            bookmarks.map(bookmark => {
                                                                return (
                                                                    bookmark.id == bet2.bookmaker_id && bookmark.name+":("+bet2.koef.toFixed(2)+")"
                                                                )  
                                                            })
                                                        }
                                                        </option>
                                                    </select>
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
                                                                value={bet2.koef} onChange={this.handleKoef2Change}/>
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
                                                            id="outcome1_koef_static">{bet2.koef}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle">
                                            <div className="inside">
                                                <div className="content">
                                                    <div className="form-group">
                                                        <input className="form-control input-xs stake input5spaces"
                                                                type="text" value={this.state.bet2_price} onChange={this.handleBet2Change}
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
                                                    
                                                    <div className="checkboxCalc">
                                                        <input type="checkbox"
                                                                value="true"
                                                                id="outcome1_stake_distr"
                                                                data-bet_number="1"
                                                                className="distr"
                                                                data-outcome_number="1"
                                                                name="outcome1_stake_distr"
                                                                checked=""/>
                                                        <label htmlFor="outcome1_stake_distr"><span
                                                                className="far fa-check-square"></span></label>
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
                                                    id="outcome1_revenue">{(this.state.bet2_price*bet2.koef-this.state.total_price).toFixed(3)}
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
                                                    <div className="refresh"></div>
                                                    <div className="checkboxCalcNewView showSection">
                                                        <a id="changeArbView"
                                                            href="#"
                                                            data-show="hide"
                                                            title="Arbs grouped by event">
                                                            <span className="icomoon-menu changeArbViewIco"
                                                                    aria-hidden="true"></span>
                                                            <span className="checkbox-state"></span>
                                                        </a>
                                                    </div>
                                                    <div className="copyToClickSection">
                                                        <a href="#"
                                                            className="copyToClick"
                                                            title="Copy" id="copy_button"
                                                            data-clipboard-text="05-11-2020 15:00 Soccer.Zorya Lugansk - AEK Athens (Europe. UEFA Europa League) [1st half] 1.00%Pinnacle	AH1(0)	2.02	50.00	USD	1.00 Sportmarket	AH2(0)	2.02	50.00	USD	1.00">
                                                            <span className="icomoon-copy3"></span>
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
                                                                        value={this.state.total_price} onChange={this.handleTotalChange}/>
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
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="calcModalReportWindow"></div>
                        <div className="noAuthorize"></div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

Table1.propTypes = {
    getAllBookmarks: PropTypes.func.isRequired,
    getAllSports: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        bookmarks: state.bets.bookmarks,
        sports: state.bets.sports,
        allarbs:state.bets.allarbs,
        allbets:state.bets.allbets
    }
}

export default connect(mapStateToProps, {getAllBookmarks, getAllSports,setAllArbs})(Table1)
