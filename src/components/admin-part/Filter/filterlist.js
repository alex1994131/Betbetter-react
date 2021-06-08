import React, { Component} from 'react';
import { connect } from 'react-redux';

import jwt from 'jsonwebtoken';

import {getAllFilters} from '../../../store/actions/adminActions';
import {getAllUsers} from '../../../store/actions/adminActions';
import {SetFilter} from '../../../store/actions/adminActions';
import {DelFilter} from '../../../store/actions/adminActions';
import {FilterActive} from '../../../store/actions/adminActions';

import { getAllBookmarks} from '../../../store/actions/betActions';
import { getAllSports} from '../../../store/actions/betActions';


class Filter extends Component {
    constructor() {
        super();

        this.state = {
            filter_no: '',
            fliter_id: '',
            filter_name:'',
            modal : true,
            data_visible:"none",
            filters_id:''
        };

        this.handleFilterIDChange = this.handleFilterIDChange.bind(this);
        this.handleFilterNameChange = this.handleFilterNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleFIlterDelClick=this.handleFIlterDelClick.bind(this);
        this.handleFilterActive=this.handleFilterActive.bind(this);
        this.handleFilterView=this.handleFilterView.bind(this);
       
    }

    handleSubmit(evt) {
        evt.preventDefault();
    
        if (!this.state.filter_id) {
          return this.setState({ error: ' is required' });
        } 
        if (!this.state.filter_name) {
            return this.setState({ error: ' is required' });
        }

        const filter_data={
            filter_no: this.state.filter_no,
            filter_id:this.state.filter_id,
            filter_name:this.state.filter_name
        }

        this.props.SetFilter(filter_data);
    }
    
    handleFilterIDChange(evt) {
        this.setState({
            filter_id: evt.target.value,
            data_visible:"none"
        });
       
    };

    handleFilterNameChange(evt) {
        this.setState({
            filter_name: evt.target.value,
            data_visible:"none"
        });
    };

    handleFIlterDelClick(evt){
        const filter_ids={
            id: evt.target.id,
            data_visible:"none"
        }
        this.props.DelFilter(filter_ids);    
    }

    handleFilterActive(evt){
        const filter_id={
            id:evt.target.id,
            data_visible:"none"
        }
        console.log(filter_id)
        this.props.FilterActive(filter_id);
    }

    handleFilterUpdate(obj, evt) {
        this.setState({
            filter_no: obj[0],
            filter_id: obj[1],
            filter_name: obj[2],
            data_visible:"none"
        });
    }

    handleFilterView(id,evt) {
        this.setState({
            filters_id:id,
            data_visible:"block"
        });
        console.log(this.state.filter_id)
    }

    componentDidMount() {
        this.props.getAllFilters();
        this.props.getAllUsers();
        this.props.getAllSports();
        this.props.getAllBookmarks();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.filters !== prevProps.filters) {
            this.setState({
                filter_no: "",
                filter_id: "",
                filter_name: "",
                data_visible:"none"
            });
        }
    }
    
  render() {
    const filters = this.props.filters;
    const users = this.props.users;

    const tablecontent = filters.map((value, index) =>
        <tr key={value.id}>
            <td style={{textAlign:"center"}}>
                {value.id}
            </td>
            {
                users.map(user=>{
                    if(value.user_id==user.id){
                        return (
                            <td style={{textAlign:"center"}}>
                                {user.name}
                            </td>
                        );
                    }
                })
            }
            <td style={{textAlign:"center"}}>
                {value.filter_name}
            </td>
            <td style={{textAlign:"center"}}>
                {value.filter_id}
            </td>
            <td style={{textAlign:"right"}}>
                <input type="button" className={`btn ${value.active == 1 ? 'green' : 'danger'}`} name={index} id={value.id} value={`${value.active == 1 ? 'Deactive' : 'Active'}`} onClick={this.handleFilterActive}/> &nbsp;   
                <input type="button" className='btn blue' name={index} id={value.id} value="View" onClick={this.handleFilterView.bind(this,value.id)}/>&nbsp;
                <input type="button" className='btn primary' name={index} id={value.id} value="Update" onClick={this.handleFilterUpdate.bind(this, [value.id, value.filter_id, value.filter_name])}/>&nbsp;
                <input type="button" className="btn" style={{backgroundColor:"#ef4059",color:"#fff"}} name="api" id={value.id} value="Delete" onClick={this.handleFIlterDelClick}/>
            </td>
        </tr>
    );

    const bookmarks=this.props.bookmarks;    

    let bet_id = "";
    filters.map(filter => {
        if(filter.id === this.state.filters_id){
            bet_id = filter.bookmark_id;
            return;
        }
    });
    let bets_id_arr = bet_id.split(':');
    let bookmark_flag=false;
    
    const bookmark_content=bookmarks.map(bookmark => 
        <div className="col-xs-6 col-md-3 order-item" data-order="10bet">
            <div className="checkbox text-left">
                {
                    bookmark_flag=false,
                        bets_id_arr.map(bet_id=>{
                        if(bet_id==bookmark.id){
                            bookmark_flag=true;
                            return;
                        }
                    })
                }
                {
                    bookmark_flag==true&&
                    <input name="bookmark{bookmark.id}" value={bookmark.id} id="bk_{bookmark.id}" type="checkbox" checked="true"  data-indeterminate="true"/>
                }
                    {
                    bookmark_flag==false&&
                    <input name="bookmark{bookmark.id}" value={bookmark.id} id="bk_{bookmark.id}" type="checkbox"  disabled data-indeterminate="true"/>
                }
                <label className="text-left" for="bk_{bookmark.id}">
                    <span className="custom_checkbox"></span>
                    <p>{bookmark.name}</p>
                </label>
            </div>                                            
        </div>
    );

    
    const sports=this.props.sports;
    
    let sports_id = '';
    filters.map(filter => {
        if(filter.id === this.state.filters_id){
            sports_id = filter.sports_id;
            return;
        }
    });
    console.log(this.state.filters_id)
    console.log(sports_id)
    let sports_id_arr = sports_id.split(':');
    let sports_flag=false;

    const sport_content=sports.map(sport => 
        <div className="col-xs-6 col-md-3 order-item" data-order="10bet">
            <div className="checkbox text-left">
                {
                    sports_flag=false,
                        sports_id_arr.map(sport_id=>{
                        if(sport_id==sport.id){
                            sports_flag=true;
                            return;
                        }
                    })
                }
                {
                    sports_flag==true &&
                    <input name="sport{sport.id}" value={sport.id} id="bk_{sport.id}" type="checkbox" checked="true"  data-indeterminate="true"/>
                }
                {
                    sports_flag==false &&
                    <input name="sport{sport.id}" value={sport.id} id="bk_{sport.id}" type="checkbox" disabled data-indeterminate="true"/>
                }
                <label className="text-left" for="bk_{sport.id}">
                    <span className="custom_checkbox"></span>
                    <p>{sport.name}</p>
                </label>
            </div>                                            
        </div>
    );


    return (
        <div className="tab-pane fade" id="filter_tab">
            <div className="margin">
                <div className="col-lg-10 col-md-9">
                    <div className="alert alert-danger fade hide" style={{margin_top: "10px",}}>
                        <span aria-hidden="true" className="glyphicon glyphicon-exclamation-sign"></span>
                    </div>
                    <div className="page-header title font">
                        <h1>Filter</h1>
                    </div>
                    <form id="form_api_token" role="form"  onSubmit={this.handleSubmit} method="post">
                        <div className="row" style={{marginTop:"10px",alignItems:"center", display:"flex"}}>
                            <input type="hidden" id="filter_no" value={this.state.filter_no} />
                            <div className="col-md-5 col-xs-12">
                                <input className="form-control"  type="text" name="filter_name" id="filter_name" value={this.state.filter_name} onChange={this.handleFilterNameChange} placeholder="input filter name"/>
                            </div>
                            <div className="col-md-5 col-xs-12">
                                <input className="form-control"  type="text" name="filter_id" id="filter_id" value={this.state.filter_id} onChange={this.handleFilterIDChange} placeholder="input filter id"/>
                            </div>
                            <div className="col-md-2 col-xs-12 text-left">
                                <input type="submit" className="btn blue" style={{width:"100%"}} name="filter" value="Update" />
                            </div>
                        </div>
                    </form>
                    <div style={{marginTop:'50px'}}>
                        <div className="table-responsive">
                            <table className="table table-striped" id="profilePayments">
                                <thead>
                                <tr>
                                    <th style={{textAlign:"center"}}>ID</th>
                                    <th style={{textAlign:"center"}}>User</th>
                                    <th style={{textAlign:"center"}}>FilterName</th>
                                    <th style={{textAlign:"center"}}>FilterID</th>
                                    <th style={{textAlign:"center"}} >Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {tablecontent}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div style={{display:this.state.data_visible}}> 
                        <div className="row">
                            <label className="col-sm-2 control-label col-xs-12 control-label pull-left labelBkTitle">
                                    Bookmakers
                                </label>
                            <div className="filtersFormPage">
                                <div className="form-horizontal" id="new_user_multi_filter">
                                    <div className="col-sm-10">
                                        <div className="bookmakers1_list">
                                            <div className="sorted-list">
                                                <div className="row order-list">
                                                        {bookmark_content}           
                                                    <div className="col-xs-6 col-md-3">
                                                        <div className="checkbox">
                                                            <label>&nbsp;</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className="row">
                            <label className="col-sm-2 control-label col-xs-12 control-label pull-left labelBkTitle">
                                    Sports
                            </label>
                            <div className="filtersFormPage">
                                <div className="form-horizontal" id="new_user_multi_filter">
                                    <div className="col-sm-10">
                                        <div className="bookmakers1_list">
                                            <div className="sorted-list">
                                                <div className="row order-list">
                                                        {sport_content}           
                                                    <div className="col-xs-6 col-md-3">
                                                        <div className="checkbox">
                                                            <label>&nbsp;</label>
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
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        filters: state.admin.filters,
        users: state.admin.users,
        bookmarks: state.bets.bookmarks,
        sports: state.bets.sports
    }
}

export default connect(mapStateToProps, {getAllFilters, getAllUsers, SetFilter, FilterActive, DelFilter, getAllBookmarks, getAllSports})(Filter)

