import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import qs from 'querystring';
import { parseJSON } from 'jquery';
import {getAllFilters} from '../../../store/actions/adminActions'

import Sport1 from './sport/sport1.js';

class HalfOne extends Component {
    constructor() {
        super()
        this.state = {
            arbsdata: '',
            betdata: '',
            search_filter:[],
            filter_name:""
        }
    }

    getData(data) {
        
        axios.post('https://rest-api-pr.betburger.com/api/v1/arbs/bot_search', qs.stringify(data), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((result) => {
            // this.state.betdata = result.data.arbs;
            this.setState({
                arbsdata: result.data.arbs,
                betdata: result.data.bets
                
            });
            
        })
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.filters !== prevProps.filters){
            const filters=this.props.filters;
            const user_id = jwt.decode(localStorage.getItem('jwtToken')).id;
            let filter_id='';
            let filter_name='';
            filters.map(filter=>{
                if(filter.user_id==user_id && filter.active==1){
                    filter_id=filter.filter_id;
                }
            });
            if(filter_id==''){
                filter_id=412898;
            }
            this.setState({
                search_filter:[filter_id],
                filter_name:filter_name,
            })
            const apitoken = localStorage.getItem('apitoken');
            var data = {
                per_page: 50,
                search_filter: [filter_id],
                access_token: apitoken
            }
            
            this.getData(data);
    
            setInterval(() => {
                this.getData(data);
                console.log(data);
            }, 10000);
        }
    }
    componentDidMount() {
        this.props.getAllFilters(); 
    }
  
    render() {
        return (
            <div className="col-xs-6 col-sm-height col-top leftSection height100">
                <div className="inside inside-full-height">
                    <div className="content sectionContentJs height100" data-padding="20">
                        <div className="arbsComponent height100">
                            <div className="arbListView height100">
                                <div className="row height100" id="leftArbList">
                                    <div className="col-xs-12 height100">
                                        <div id="arbsScroll" style={{touch_action: "none"}}>
                                            <div className="scroller" style={{overflowY: "scroll",height:"1000px"}}>
                                                <Sport1 betdata={this.state.betdata} arbsdata={this.state.arbsdata} />
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

const mapStateToProps = state => {
    return { 
        filters: state.admin.filters,
    }
}


export default connect(mapStateToProps, {getAllFilters})(HalfOne)
