import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { getAllBookmarks, getAllSports } from '../../../../store/actions/betActions';
import {setAllArbs} from '../../../../store/actions/betActions'
import {setAllBets} from '../../../../store/actions/betActions'

class Sport1 extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
        }
        this.handleArbClick = this.handleArbClick.bind(this);
    }

    handleArbClick(evt) {
        const key=evt.target.id;
        const ArbsData={
            arbs:this.props.arbsdata[key],
            bets:this.props.betdata,
        }
        this.props.setAllArbs(ArbsData);
        this.props.setAllBets(ArbsData);
      };

    cleanDate (d) {
              
        var print_Date = '';
        print_Date=new Intl.DateTimeFormat('en-US', {month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(d)
        return print_Date;

    }

    componentDidMount() {
        this.props.getAllBookmarks();
        this.props.getAllSports();
    }

    render() {
        var betList = <div>Loading...</div>

        const betdata = this.props.betdata;
        const arbsdata = this.props.arbsdata;

        const bookmarks = this.props.bookmarks;
        const sports = this.props.sports;

        console.log(bookmarks);

        if(arbsdata.length > 0){
            betList = arbsdata.map((arbs,key)=> {
                return (
                    <li className="arb_f697fb91e3e507ca83f2150d91a6ebba event_214433770" >
                        <div className="col-xs-12 arb-item-body-js" >
                            <div className="arbHead row relative">
                                <div className="row-sm-height">
                                    <div className="absoluteLeft padding5px percent col-sm-height col-middle betPercent">
                                        <div className="inside">
                                            <div className="content">
                                                <span id={key} onClick={this.handleArbClick}>{arbs.percent}%</span>
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
                                                        <div className="tableCell padding5px col-sm-height col-middle sportPeriod" >
                                                            <span className="sport" title="Soccer" id={key} onClick={this.handleArbClick} >
                                                                {
                                                                    sports.map(sport => {
                                                                        return (
                                                                            sport.id == arbs.sport_id && sport.name
                                                                        )  
                                                                    })
                                                                }
                                                            </span>
                                                        </div>
                                                        <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                        </div>
                                                        <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                            <div className="inside">
                                                                <div className="content" id={key} onClick={this.handleArbClick}>
                                                                    <a href="#"
                                                                    className="dropdown-toggle"
                                                                    title="Hide menu">
                                                                        <span className="icomoon-remove2"><span className="icomoon-clock"><i className="glyphicon" style={{fontSize: "13px"}}>&#xe020;</i></span></span>
                                                                    </a>
                                                                    <a href="#"
                                                                    className="standalone-calculator"
                                                                    title="Open in new view">
                                                                        <span className="brankic-pop-out"><i className="glyphicon" style={{fontSize: "19px", paddingLeft: '5px'}}>&#xe066;</i></span>
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
                            {
                                betdata.map(bets => {
                                    if(bets.id==arbs.bet1_id || bets.id==arbs.bet2_id || bets.id==arbs.bet3_id){
                                        return (
                                            <div className="bet_1 row relative">
                                                <div className="row-sm-height betHeight displayTable">
                                                    <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                        <div className="row height100">
                                                            <div className="row-sm-height">
                                                                <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                    <div className="inside">
                                                                        <div className="content bookmakerLinkContainer">
                                                                            {
                                                                                bookmarks.map(bookmark => {
                                                                                    return (
                                                                                        bookmark.id == bets.bookmaker_id && bookmark.name
                                                                                    )  
                                                                                })
                                                                            }
                                                                            
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
                                                                            {
                                                                                this.cleanDate(arbs.started_at*1000)   
                                                                            }
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
                                                                                <span className="icomoon-copy3"><span className="glyphicon" style={{fontSize: "10px"}}>&#xe224;</span></span>
                                                                            </a>
                                                                            <div>
                                                                                <a>
                                                                                    {bets.bookmaker_event_name}
                                                                                </a>
                                                                            </div>
                                                                            <small className="text-muted"
                                                                                    title="UEFA - Europa League">
                                                                                {bets.bookmaker_league_name}</small>
                                                                        </div>
                                                                        <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                            <div className="inside">
                                                                                <div className="content text-center compareLinkContainer">
                                                                                    <a href="#"
                                                                                        className="check_for_russia is_disabled-hbs"
                                                                                        rel="nofollow"
                                                                                        title="Asian Handicap1(0)">
                                                                                        {bets.market_and_bet_type}({bets.market_and_bet_type_param})
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
                                                                {bets.diff==2 &&
                                                                    <span className="icomoon-arrow-down gray ">
                                                                        <i style={{fontSize:"12px", marginRight: "3px", color: "red"}} className='fas'>&#xf309;</i>
                                                                    </span>
                                                                }
                                                                {
                                                                    bets.diff==1 &&
                                                                    <span className="icomoon-arrow-up gray ">
                                                                        <i style={{fontSize:"12px", marginRight: "3px", color: "green"}} className='fas'>&#xf30c;</i>
                                                                    </span>
                                                                }                                                            
                                                                                                                                                  
                                                                <a href="#" className="koef check_for_russia is_disabled-hbs" rel="nofollow" koef_eu="2.02" title="Odd 2.02 on the outcome AH1(0) of event FC Zorya Luhansk - AEK Athens">
                                                                    {bets.koef.toFixed(2)}
                                                                </a>

                                                                <div>
                                                                    <small className="currency"
                                                                            title=""></small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                        <a href="#"
                                                            className="removeOutcome"
                                                            data-id="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA"
                                                            title="Hide Bet">
                                                            <span className="brankic-cancel3"><i style={{fontSize:"12px"}} className="fa">&#xf00d;</i></span></a>
                                                    </div>
                                                </div>
                                            </div>   
                                        )
                                    }
                                })
                            }
                        </div>
                    </li>
                )
            });
        } 
        return (
            <ul >
                { betList }
            </ul>
        );
    }
}

Sport1.propTypes = {
    getAllBookmarks: PropTypes.func.isRequired,
    getAllSports: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        bookmarks: state.bets.bookmarks,
        sports: state.bets.sports
    }
}

export default connect(mapStateToProps, {getAllBookmarks, getAllSports, setAllArbs,setAllBets})(Sport1)
