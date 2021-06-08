import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bet from '../fillter-edit/bets-part.js';
import Sport from '../fillter-edit/sport-part.js';
import Button from '../fillter-edit/button-part.js';
import jwt from 'jsonwebtoken';
import { UpdateFilter} from '../../../store/actions/adminActions';


class MultiFilter extends Component {
    constructor() {
        super();
        this.state = {
          bookmarks: '',
          sports:'',
          filter_id:'',
          filtername:'',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGetsports=this.handleGetsports.bind(this);
        this.handleGetBookmarks=this.handleGetBookmarks.bind(this);
        this.handleFilterChange=this.handleFilterChange.bind(this);
        
    }
    handleFilterChange(evt){
        this.setState({
            filtername:evt.target.value
        })
    }
  
    handleGetBookmarks(data,index){
        console.log(data);
        console.log(index);
        this.setState({
            bookmarks:data,
            filter_id:index,
        });
    };

    handleGetsports(data,index,name){
        console.log(data);
        console.log(index);
        console.log(name)
        this.setState({
            sports:data,
            filter_id:index,
            filtername:name,
        });
    };

    handleSubmit(evt) {
        evt.preventDefault();
        if(this.state.filtername==""){
            alert("Please enter filtername.")
        }
        else{
            const data={
                sports:this.state.sports,
                bookmarks:this.state.bookmarks,
                filter_id:this.state.filter_id,
                user_id:jwt.decode(localStorage.getItem('jwtToken')).id,
                filtername:this.state.filtername,
            }
            this.props.UpdateFilter(data);
        } 
    };

  render() {
    return (
        <div className="fade tab-pane" id="multi_filters">
            <div className="margin">
                <div className="col-lg-10 col-md-9">
                    <div className="alert hidden staticTop" role="alert"></div>
                    <div className="alert hidden flashAlert" role="alert"></div>
                </div>
                <div className="col-lg-10 col-md-9">
                    <div className="page-header title font">
                        <h1>Filter Setting</h1>
                    </div>
                </div>
                <div className="col-lg-10 col-md-9">
                    <div className="col-lg-5 col-md-5" >
                        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                            <label className="">
                                FilterName:
                            </label>
                            <div>
                                <input className="form-control" value={this.state.filtername} type="text" name="" style={{height:"auto"}} onChange={this.handleFilterChange} />
                                <span className="help-block hidden"></span>
                            </div>
                        </div>  
                    </div>
                </div>            
                <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12">
                    <div class="row">
                        <div className="filtersFormPage" style={{marginTop:"50px"}}>
                            <div className="filterForms">
                                <form acceptCharset="UTF-8" onSubmit={this.handleSubmit} className="form-horizontal" id="new_user_multi_filter" method="post">
                                    <Bet handleGetBookmarks={this.handleGetBookmarks}/>
                                    <Sport handleGetsports={this.handleGetsports}/>
                                    <Button/>
                                </form>
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
        
    }
}

export default connect(mapStateToProps, {UpdateFilter})(MultiFilter)
